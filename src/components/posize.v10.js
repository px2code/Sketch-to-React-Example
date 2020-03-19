import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { commonStyles, config } from './pxConfig';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// posize version v0.10.1

const hashName = false;
const isAnchor = /#[a-zA-Z0-9]+$/;

// ratio
const minmaxPxPx = /^\s*minmax\(\s*(\d+(\.\d+)?)px\s*,\s*(\d+(\.\d+)?)px\s*\)\s*$/;
const minmaxPxFr = /^\s*minmax\(\s*(\d+(\.\d+)?)px\s*,\s*(\d+(\.\d+)?)fr\s*\)\s*$/;
const frValue = /^\s*(\d+(\.\d+)?)fr\s*$/;

// fix
const pxValue = /^\s*(\d+(\.\d+)?)px\s*$/;

// respect
const minmaxPxMax = /^\s*minmax\(\s*(\d+(\.\d+)?)px\s*,\s*max-content\s*\)\s*$/;
const minmaxAutoPx = /^\s*minmax\(\s*auto\s*,\s*(\d+(\.\d+)?)px\s*\)\s*$/;
const minmaxAutoMax = /^\s*minmax\(\s*auto\s*,\s*max-content\s*\)\s*$/;

// ratio and respect
const auto = /^\s*auto\s*$/;
const classNameMaps = new Map();

function hashFun(obj) {
  const str = JSON.stringify(obj);
  let hash = 5381,
    i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(i -= 1);
  }

  hash = (hash >>> 0).toString(36);
  if (hashName) {
    return hash;
  } else {
    let result = classNameMaps.get(hash);
    if (!result) {
      result = `${classNameMaps.size + 1}`;
      classNameMaps.set(hash, result);
    }

    return result;
  }
}


function isDecidable(value) {
  let result = value.match(frValue); // ratio: {a}fr
  if (result) {
    return false;
  }

  result = value.match(pxValue); // fixed: {a}px
  if (result) {
    return true;
  }

  result = value.match(auto); // respect and ratio: auto
  if (result) {
    return true;
  }

  result = value.match(minmaxAutoMax); // respect: minmax(auto,max-content)
  if (result) {
    return true;
  }

  result = value.match(minmaxPxFr); // ratio: minmax({a}px,{b}fr)
  if (result) {
    return false;
  }

  result = value.match(minmaxPxMax); // respect: minmax({a}px,max-content)
  if (result) {
    return true;
  }

  result = value.match(minmaxPxPx); // ratio: minmax({a}px,{b}px)
  if (result) {
    return false;
  }

  result = value.match(minmaxAutoPx); // respect: minmax(auto,{b}px)
  if (result) {
    return true;
  }

  return false;
}

function canOptimize(props) {
  const {
    layout: {
      absolute = false,
      vertical = ['1fr'],
      horizontal = ['1fr'],
      isOffscreen = false
    } = {},
    pxHref
  } = props;

  let verticalCan = false;
  if (vertical.length === 1) {
    verticalCan = true;
  } else if (vertical.length === 3) {
    if (
      (isDecidable(vertical[0]) && isDecidable(vertical[1])) ||
      (isDecidable(vertical[0]) && isDecidable(vertical[2]))
    // marginTop: auto is not work
    ) {
      verticalCan = true;
    }
  }

  let horizontalCan = false;
  if (horizontal.length === 1) {
    horizontalCan = true;
  } else if (horizontal.length === 3) {
    if (
      (isDecidable(horizontal[0]) && isDecidable(horizontal[1])) ||
      (isDecidable(horizontal[0]) && isDecidable(horizontal[2])) ||
      (isDecidable(horizontal[1]) && isDecidable(horizontal[2]))
    ) {
      horizontalCan = true;
    }
  }

  return config.enableOptimize && verticalCan && horizontalCan && !isOffscreen && !pxHref && !absolute;
}

function capitalize(v) {
  return `${v.substring(0, 1).toUpperCase()}${v.substring(1)}`;
}

function genRatio(m1, m2) {
  if (!m1 && !m2) return '100%';
  return `calc(100%${m1 ? ` - ${m1}` : ''}${m2 ? ` - ${m2}` : ''})`;
}

function genOuterStyle(values, horizontal) {
  const outerStyle = {};

  const key = horizontal ? 'width' : 'height';
  const margin1 = horizontal ? 'marginLeft' : 'marginTop';
  const margin2 = horizontal ? 'marginRight' : 'marginBottom';

  let value = null;
  let m1 = null;
  let m2 = null;
  if (values.length === 1) {
    value = values[0];
  } else if (values.length === 3) {
    value = values[1];
    m1 = isDecidable(values[0]) ? values[0] : 'auto';
    m2 = isDecidable(values[2]) ? values[2] : 'auto';
  }

  outerStyle[margin1] = m1;
  outerStyle[margin2] = m2;

  let result = value.match(frValue); // ratio: {a}fr
  if (result) {
    outerStyle[key] = genRatio(m1, m2);
    return outerStyle;
  }

  result = value.match(pxValue); // fixed: {a}px
  if (result) {
    outerStyle[key] = parseFloat(result[1]);
    return outerStyle;
  }

  result = value.match(auto); // respect and ratio: auto
  if (result) {
    outerStyle[key] = 'auto';
    return outerStyle;
  }

  result = value.match(minmaxAutoMax); // respect: minmax(auto,max-content)
  if (result) {
    outerStyle[key] = 'auto';
    outerStyle[`max${capitalize(key)}`] = 'max-content';
    return outerStyle;
  }

  result = value.match(minmaxPxFr); // ratio: minmax({a}px,{b}fr)
  if (result) {
    outerStyle[key] = genRatio(m1, m2);
    outerStyle[`min${capitalize(key)}`] = parseFloat(result[1]);
    return outerStyle;
  }

  result = value.match(minmaxPxMax); // respect: minmax({a}px,max-content)
  if (result) {
    outerStyle[key] = 'max-content';
    outerStyle[`min${capitalize(key)}`] = parseFloat(result[1]);
    outerStyle[`max${capitalize(key)}`] = 'max-content';
    return outerStyle;
  }

  result = value.match(minmaxPxPx); // ratio: minmax({a}px,{b}px)
  if (result) {
    outerStyle[key] = genRatio(m1, m2);
    outerStyle[`min${capitalize(key)}`] = parseFloat(result[1]);
    outerStyle[`max${capitalize(key)}`] = parseFloat(result[3]);
    return outerStyle;
  }

  result = value.match(minmaxAutoPx); // respect: minmax(auto,{b}px)
  if (result) {
    outerStyle[key] = 'auto';
    outerStyle[`min${capitalize(key)}`] = 'auto';
    outerStyle[`max${capitalize(key)}`] = parseFloat(result[3]);
    return outerStyle;
  }

  throw 'not support';
}

function genBoxStyles(vertical, horizontal, overflow) {
  const area = {
    overflow, // prevent Collapsing margins https://www.w3.org/TR/CSS21/box.html#propdef-margin
    ...genOuterStyle(horizontal, true),
    ...genOuterStyle(vertical, false)
  };

  const styleSheet = {};

  const areaName = `area${hashFun(area)}`;
  styleSheet[areaName] = area;

  const styles = StyleSheet.create(styleSheet);

  return {
    styles,
    areaName
  };
}

function boxPosize(WrappedComponent, props) {
  const {
    layout: {
      absolute = false,
      overflow = 'visible',
      vertical = ['1fr'],
      horizontal = ['1fr'],
      outerClassName,
      clickableClassName = css(commonStyles.clickable),
      className
    } = {},
    pxDebug,
    pxRef,
    style,
    ...childProps
  } = props;

  const OuterTag = outerClassName ? 'div' : React.Fragment;
  const outerProps = outerClassName ? { className: outerClassName } : {};
  const boxStyles = genBoxStyles(vertical, horizontal, overflow);

  return (
    <OuterTag key={'outer'} {...outerProps}>
      <WrappedComponent
        key={'body'}
        pxDebug={pxDebug}
        ref={pxRef}
        style={style}
        className={
          [css(
            absolute ? styles.absBox : styles.relBox,
            boxStyles.styles[boxStyles.areaName],
            (config.debug || pxDebug) && styles.debugBox),
            props.onClick && clickableClassName,
            className
          ].filter(e => !!e).join(' ')}
        {...childProps} />
    </OuterTag>
  );
}

function genGridStyles(vertical, horizontal, overflow) {
  const v = Math.round(vertical.length / 2);
  const h = Math.round(horizontal.length / 2);

  const styleSheet = {};
  const track = {
    gridTemplateRows: vertical.join(' '),
    gridTemplateColumns: horizontal.join(' '),
    pointerEvents: overflow === 'scroll' ? 'auto' : 'none',
    overflow,
    height: '100%',
    width: '100%'
  };

  const area = { gridArea: `${v} / ${h} / ${v} / ${h}` };

  const trackName = `track${hashFun(track)}`;
  styleSheet[trackName] = track;
  const areaName = `area${hashFun(area)}`;
  styleSheet[areaName] = area;

  const styles = StyleSheet.create(styleSheet);

  return {
    styles,
    trackName,
    areaName
  };
}

function gridPosize(WrappedComponent, props) {
  const {
    layout: {
      absolute = false,
      overflow = 'visible',
      vertical = ['1fr'],
      horizontal = ['1fr'],
      isOffscreen = false,
      outerClassName,
      anchorClassName = css(commonStyles.anchor),
      clickableClassName = css(commonStyles.clickable),
      className
    } = {},
    pxDebug,
    pxHref,
    pxHrefTarget,
    pxRef,
    style,
    ...childProps
  } = props;

  const OuterTag = outerClassName ? 'div' : React.Fragment;
  const outerProps = outerClassName ? { className: outerClassName } : {};

  const AnchorTag = pxHref ? (pxHref && isAnchor.test(pxHref) ? AnchorLink : 'a') : React.Fragment;
  const anchorProps = pxHref ? {
    offset: config.anchorScrollOffset,
    href: pxHref,
    target: pxHrefTarget,
    className: anchorClassName
  } : {};

  const gridStyles = genGridStyles(vertical, horizontal, overflow);

  return (
    <OuterTag key={'outer'} {...outerProps}>
      <div
        key={'grid'}
        className={
          css(absolute ? styles.absGrid : styles.relGrid,
            gridStyles.styles[gridStyles.trackName],
            (config.debug || pxDebug) && styles.debugGrid
          )}>
        <div
          key={'gridBox'}
          className={
            css(styles.gridBox,
              gridStyles.styles[gridStyles.areaName],
              isOffscreen && styles.offScreen,
              (config.debug || pxDebug) && styles.debugGridBox)}>
          <AnchorTag key={'anchor'} {...anchorProps}>
            <WrappedComponent
              key={'body'}
              pxDebug={pxDebug}
              ref={pxRef}
              style={style}
              className={[
                css(styles.content),
                props.onClick && clickableClassName,
                className
              ].filter(e => !!e).join(' ')}
              {...childProps} />
          </AnchorTag>
        </div>
      </div>
    </OuterTag>
  );
}

export default function posize(WrappedComponent) {
  return (props) => {
    if (canOptimize(props)) {
      return boxPosize(WrappedComponent, props);
    } else {
      return gridPosize(WrappedComponent, props);
    }
  };
}

const styles = StyleSheet.create({
  relBox: {
    pointerEvents: 'auto',
    position: 'relative'
  },

  absBox: {
    pointerEvents: 'auto',
    position: 'absolute',
    left: 0,
    top: 0
  },

  absGrid: {
    display: 'grid',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },

  relGrid: {
    display: 'grid',
    position: 'relative'
  },

  content: { pointerEvents: 'auto' },

  gridBox: {
    pointerEvents: 'none',
    position: 'relative',
    width: '100%', // fit box, it is necessary because child need refer parent size
    height: '100%' // fit box, it is necessary because child need refer parent size
  },

  offScreen: { overflow: 'hidden' },

  debugBox: {
    outlineWidth: 3,
    outlineColor: '#f5799e',
    outlineStyle: 'solid',
    outlineOffset: -3
  },

  debugGrid: {
    outlineWidth: 1,
    outlineColor: '#10670900',
    outlineStyle: 'solid',
    outlineOffset: -1
  },

  debugGridBox: {
    outlineWidth: 3,
    outlineColor: '#10670900',
    outlineStyle: 'solid',
    outlineOffset: -3
  }
});
