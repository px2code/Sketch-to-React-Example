/**
 * Copyright (c) pxCode, Inc. and its affiliates.
 * This source code is licensed under the MIT license found in https://www.pxcode.io
 */

import React from 'react';
import { config } from './pxConfig.v1.00';

// posize version v1.00.1

const StyleSheet = config.StyleSheet;
const css = config.css;

const styles = StyleSheet.create({
  absTrack: {
    display: ['grid', '-ms-grid'],
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },

  relTrack: {
    display: ['grid', '-ms-grid'],
    pointerEvents: 'none',
    position: 'relative',
    // height: '100%', no need set height
    width: '100%',
  },

  area: {
    pointerEvents: 'auto',
    position: 'relative',
    width: '100%', // fit box, it is necessary because child need refer parent size
    height: '100%' // fit box, it is necessary because child need refer parent size
  },

  debugTrack: {
    outlineWidth: 1,
    outlineColor: '#106709',
    outlineStyle: 'solid',
    outlineOffset: -1
  },

  debugArea: {
    outlineWidth: 3,
    outlineColor: '#106709',
    outlineStyle: 'solid',
    outlineOffset: -3
  }
});

const classNameMaps = new Map();

function hashFun(obj) {
  const str = JSON.stringify(obj);
  let hash = 5381;
  let i = str.length;
  while (i) { hash = (hash * 33) ^ str.charCodeAt(i -= 1); }
  hash = (hash >>> 0).toString(36);

  if (config.hashName) {
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

const rep = /\s*,\s*/g
const split = /\s+/

function genGridStyles(horizontal, vertical, zIndex, trackStyle, areaStyle) {
  const v = Math.round(vertical.replace(rep, ',').split(split).length / 2);
  const h = Math.round(horizontal.replace(rep, ',').split(split).length / 2);

  const track = {
    grid: `${vertical} / ${horizontal}`,
    '-ms-grid-columns': horizontal,
    '-ms-grid-rows': vertical,
    zIndex,
    ...trackStyle
  };

  const area = {
    gridArea: `${v} / ${h} / ${v} / ${h}`,
    '-ms-grid-column': `${h}`,
    '-ms-grid-row': `${v}`,
    ...areaStyle
  };

  const trackName = `${hashFun(track)}`;
  const areaName = `${hashFun(area)}`;
  return {
    styles: StyleSheet.create({
      [trackName]: track,
      [areaName]: area
    }),
    trackName,
    areaName
  };
}

export const Posize = (props) => {
  const {
    x = '1fr 1fr 1fr',
    y = '1fr 1fr 1fr',
    name,
    absolute,
    zIndex,
    trackStyle,
    areaStyle,
    altClassName,
    children,
    debug
  } = props;

  const gridStyles = genGridStyles(x, y, zIndex, trackStyle, areaStyle);
  return (
    <div key={'track'}
         className={
           [
             'track',
             altClassName? `${altClassName}_track` : null,
             css(absolute ? styles.absTrack : styles.relTrack,
               gridStyles.styles[gridStyles.trackName],
               (config.debug || debug) && styles.debugTrack,
             )
           ].filter(e => !!e).join(' ')} id={name ? `${name}Track` : null}>
      <div key={'area'}
           className={
             [
               'area',
               altClassName? `${altClassName}_area` : null,
               css(styles.area,
                 gridStyles.styles[gridStyles.areaName],
                 (config.debug || debug) && styles.debugArea)
             ].filter(e => !!e).join(' ')} id={name ? `${name}Area` : null}>
        { children }
      </div>
    </div>
  );
};

export const Px = ({ id, x, y, absolute, zIndex, trackStyle, areaStyle, className, altClassName, children, ...props }) => {
  const posizeProps = { name: id, x, y, absolute, zIndex, trackStyle, areaStyle, altClassName };
  const cn = [className, altClassName].filter(Boolean).join(' ');
  return (
    <Posize {...posizeProps}>
      <div id={id} className={cn} {...props}>
        {children}
      </div>
    </Posize>
  );
};

export const PxImg = ({ id, x, y, absolute, zIndex, trackStyle, areaStyle, className, altClassName, children, ...props }) => {
  const posizeProps = { name: id, x, y, absolute, zIndex, trackStyle, areaStyle, altClassName };
  const cn = [className, altClassName].filter(Boolean).join(' ');
  return (
    <Posize {...posizeProps}>
      <img id={id} alt='alt' className={cn} {...props}/>
    </Posize>
  );
};

