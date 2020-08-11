/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */

import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Posize } from 'components/posize.v1.00';
import { shareStyles } from 'components/pxConfig.v1.00';

const Px = ({ id, x, y, absolute, zIndex, trackStyle, areaStyle, className, altClassName, children, ...props }) => {
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

function renderHero(props) {
  return (
    <div className={css(heroStyles.hero)}>
      <div className={css(heroStyles.hero_space0)} />
      <div className={css(heroStyles.hero_item1)}>
        <div className={css(heroStyles.group76)}>
          <div className={css(heroStyles.img50)} />
          <div className={css(heroStyles.img51)} />
          <div className={css(heroStyles.img53)} />
          <Px x="23px 269fr 23px" y="31px 29fr 140fr" absolute className={css(heroStyles.txt56)}>
            <div className={css(heroStyles.txt56_content)}>{'Play without subscribing'}</div>
          </Px>

          <Px x="25px 265fr 25px" y="154fr 22fr 24px" absolute className={css(heroStyles.flexRow260)}>
            <div className={css(heroStyles.flexRow260_item0)}>
              <div className={css(heroStyles.img60)} />
            </div>
            <div className={css(heroStyles.flexRow260_space1)} />
            <div className={css(heroStyles.flexRow260_item2)}>
              <div className={css(heroStyles.txt57)}>
                <div className={css(heroStyles.txt57_content)}>{'Davide Galizzi'}</div>
              </div>
            </div>
            <div className={css(heroStyles.flexRow260_space3)} />
          </Px>

          <Px x="258fr 40px 17px" y="135fr 40px 25px" absolute className={css(heroStyles.img59)} />
        </div>
      </div>
      <div className={css(heroStyles.hero_space2)} />
      <div className={css(heroStyles.hero_space3)} />
    </div>
  );
}

function renderContent(props) {
  return (
    <Px
      x="minmax(320px,375fr)"
      y="0px minmax(780px,780fr) 32px"
      absolute
      trackStyle={{ overflow: 'auto' }}
      areaStyle={{ overflow: 'scroll', pointerEvents: 'auto' }}
      className={css(contentStyles.content)}>
      <Px x="375fr" y="0px 211fr 569fr" absolute className={css(contentStyles.img31)} />

      <div className={css(contentStyles.flexColumn194)}>
        <div className={css(contentStyles.flexColumn194_item0)}>
          <div className={css(contentStyles.txt62)}>
            <div className={css(contentStyles.txt62_content)}>{'Explore'}</div>
          </div>
        </div>
        <div className={css(contentStyles.flexColumn194_item1)}>
          <div className={css(contentStyles.txt61)}>
            <div className={css(contentStyles.txt61_content)}>{'Based on your interests'}</div>
          </div>
        </div>
        <div className={css(contentStyles.flexColumn194_space2)} />
        <div className={css(contentStyles.flexColumn194_item3)}>{renderHero(props)}</div>
        <div className={css(contentStyles.flexColumn194_space4)} />
        <div className={css(contentStyles.flexColumn194_item5)}>
          <div className={css(contentStyles.flexRow137)}>
            <div className={css(contentStyles.flexRow137_item0)}>
              <div className={css(contentStyles.flexColumn131)}>
                <div className={css(contentStyles.flexColumn131_item0)}>
                  <div className={css(contentStyles.txt33)}>
                    <div className={css(contentStyles.txt33_content)}>{'Discover'}</div>
                  </div>
                </div>
                <div className={css(contentStyles.flexColumn131_space1)} />
                <div className={css(contentStyles.flexColumn131_item2)}>
                  <div className={css(contentStyles.txt34)}>
                    <div className={css(contentStyles.txt34_content)}>{'Top podcasts on PodPro'}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={css(contentStyles.flexRow137_space1)} />
            <div className={css(contentStyles.flexRow137_item2)}>
              <Px x="minmax(0px, max-content)" y="26fr minmax(19px,19fr) 0px" className={css(contentStyles.txt35)}>
                <div className={css(contentStyles.txt35_content)}>{'Show all'}</div>
              </Px>
            </div>
          </div>
        </div>
        <div className={css(contentStyles.flexColumn194_space6)} />
        <div className={css(contentStyles.flexColumn194_item7)}>
          <div className={css(contentStyles.discover)}>
            <div className={css(contentStyles.discover_item0)}>
              <div className={css(contentStyles.item)}>
                <Px x="14fr 92fr 14fr" y="0px minmax(161px,161fr) 26px" className={css(contentStyles.flexColumn87)}>
                  <div className={css(contentStyles.flexColumn87_item0)}>
                    <div className={css(contentStyles.img38)} />
                  </div>
                  <div className={css(contentStyles.flexColumn87_space1)} />
                  <div className={css(contentStyles.flexColumn87_item2)}>
                    <div className={css(contentStyles.txt39)}>
                      <pre className={css(contentStyles.txt39_content)}>{'To Live and Die \nin LA'}</pre>
                    </div>
                  </div>
                  <div className={css(contentStyles.flexColumn87_space3)} />
                  <div className={css(contentStyles.flexColumn87_item4)}>
                    <div className={css(contentStyles.txt40)}>
                      <pre className={css(contentStyles.txt40_content)}>{'Tenderfoot TV \n& Cadence 13'}</pre>
                    </div>
                  </div>
                </Px>
              </div>
            </div>
            <div className={css(contentStyles.discover_item1)}>
              <div className={css(contentStyles.item1)}>
                <Px x="13fr 94fr 13fr" y="0px minmax(135px,135fr) 52px" className={css(contentStyles.flexColumn95)}>
                  <div className={css(contentStyles.flexColumn95_item0)}>
                    <div className={css(contentStyles.img46)} />
                  </div>
                  <div className={css(contentStyles.flexColumn95_space1)} />
                  <div className={css(contentStyles.flexColumn95_item2)}>
                    <div className={css(contentStyles.txt47)}>
                      <div className={css(contentStyles.txt47_content)}>{'Public Official A'}</div>
                    </div>
                  </div>
                  <div className={css(contentStyles.flexColumn95_space3)} />
                  <div className={css(contentStyles.flexColumn95_item4)}>
                    <div className={css(contentStyles.txt48)}>
                      <div className={css(contentStyles.txt48_content)}>{'WBEZ Chicago'}</div>
                    </div>
                  </div>
                </Px>
              </div>
            </div>
            <div className={css(contentStyles.discover_item2)}>
              <div className={css(contentStyles.item2)}>
                <Px x="14fr 92fr 14fr" y="0px minmax(135px,135fr) 52px" className={css(contentStyles.flexColumn103)}>
                  <div className={css(contentStyles.flexColumn103_item0)}>
                    <div className={css(contentStyles.img42)} />
                  </div>
                  <div className={css(contentStyles.flexColumn103_space1)} />
                  <div className={css(contentStyles.flexColumn103_item2)}>
                    <div className={css(contentStyles.txt43)}>
                      <div className={css(contentStyles.txt43_content)}>{'The Dropout'}</div>
                    </div>
                  </div>
                  <div className={css(contentStyles.flexColumn103_space3)} />
                  <div className={css(contentStyles.flexColumn103_item4)}>
                    <div className={css(contentStyles.txt44)}>
                      <div className={css(contentStyles.txt44_content)}>{'ABC News'}</div>
                    </div>
                  </div>
                </Px>
              </div>
            </div>
          </div>
        </div>
        <div className={css(contentStyles.flexColumn194_item8)}>
          <Px x="31px minmax(153px,153fr) 191fr" y="minmax(24px,24fr)" className={css(contentStyles.txt18)}>
            <div className={css(contentStyles.txt18_content)}>{'Recently Uploaded'}</div>
          </Px>
        </div>
        <div className={css(contentStyles.flexColumn194_space9)} />
        <div className={css(contentStyles.flexColumn194_item10)}>
          <div className={css(contentStyles.recently)}>
            <div className={css(contentStyles.rect4)} />
            <Px x="15px 298px 14px" y="73fr 2px 75fr" absolute className={css(contentStyles.img5)} />

            <Px x="17px 295fr 15px" y="15px minmax(47px,47fr) 88fr" absolute className={css(contentStyles.flexRow227)}>
              <div className={css(contentStyles.flexRow227_item0)}>
                <div className={css(contentStyles.img11)} />
              </div>
              <div className={css(contentStyles.flexRow227_space1)} />
              <div className={css(contentStyles.flexRow227_item2)}>
                <div className={css(contentStyles.flexColumn209)}>
                  <div className={css(contentStyles.flexColumn209_item0)}>
                    <div className={css(contentStyles.txt7)}>
                      <div className={css(contentStyles.txt7_content)}>{'The Dropout'}</div>
                    </div>
                  </div>
                  <div className={css(contentStyles.flexColumn209_space1)} />
                  <div className={css(contentStyles.flexColumn209_item2)}>
                    <div className={css(contentStyles.txt8)}>
                      <div className={css(contentStyles.txt8_content)}>{'ABC News'}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css(contentStyles.flexRow227_space3)} />
              <div className={css(contentStyles.flexRow227_item4)}>
                <div className={css(contentStyles.txt9)}>
                  <div className={css(contentStyles.txt9_content)}>{'41s'}</div>
                </div>
              </div>
            </Px>

            <Px x="17px 295fr 15px" y="90fr minmax(47px,47fr) 13px" absolute className={css(contentStyles.flexRow220)}>
              <div className={css(contentStyles.flexRow220_item0)}>
                <div className={css(contentStyles.img17)} />
              </div>
              <div className={css(contentStyles.flexRow220_space1)} />
              <div className={css(contentStyles.flexRow220_item2)}>
                <div className={css(contentStyles.flexColumn215)}>
                  <div className={css(contentStyles.flexColumn215_item0)}>
                    <div className={css(contentStyles.txt13)}>
                      <div className={css(contentStyles.txt13_content)}>{'Should This Exist?'}</div>
                    </div>
                  </div>
                  <div className={css(contentStyles.flexColumn215_space1)} />
                  <div className={css(contentStyles.flexColumn215_item2)}>
                    <Px x="0px minmax(62px,62fr) 71fr" y="minmax(19px,19fr)" className={css(contentStyles.txt14)}>
                      <div className={css(contentStyles.txt14_content)}>{'WaitWhat'}</div>
                    </Px>
                  </div>
                </div>
              </div>
              <div className={css(contentStyles.flexRow220_space3)} />
              <div className={css(contentStyles.flexRow220_item4)}>
                <div className={css(contentStyles.txt15)}>
                  <div className={css(contentStyles.txt15_content)}>{'39min'}</div>
                </div>
              </div>
            </Px>
          </div>
        </div>
      </div>
    </Px>
  );
}

function renderStatusBar(props) {
  return (
    <Px x="minmax(320px,375fr)" y="0px minmax(44px,44fr) 768fr" absolute className={css(statusBarStyles.statusBar)}>
      <div className={css(statusBarStyles.rect65)} />

      <div className={css(statusBarStyles.flexRow237)}>
        <div className={css(statusBarStyles.flexRow237_item0)}>
          <div className={css(statusBarStyles.txt73)}>
            <div className={css(statusBarStyles.txt73_content)}>
              <span className={css(statusBarStyles.txt73Span0)}>{'9:4'}</span>
              <span className={css(statusBarStyles.txt73Span1)}>{'1'}</span>
            </div>
          </div>
        </div>
        <div className={css(statusBarStyles.flexRow237_space1)} />
        <div className={css(statusBarStyles.flexRow237_item2)}>
          <div className={css(statusBarStyles.img71)} />
        </div>
        <div className={css(statusBarStyles.flexRow237_space3)} />
        <div className={css(statusBarStyles.flexRow237_item4)}>
          <div className={css(statusBarStyles.img70)} />
        </div>
        <div className={css(statusBarStyles.flexRow237_space5)} />
        <div className={css(statusBarStyles.flexRow237_item6)}>
          <div className={css(statusBarStyles.group235)}>
            <div className={css(statusBarStyles.rect67)} />
            <div className={css(statusBarStyles.img68)} />
            <div className={css(statusBarStyles.rect69)} />
          </div>
        </div>
      </div>
    </Px>
  );
}

function renderTabBar(props) {
  return (
    <Px x="minmax(320px,375fr)" y="730fr minmax(82px,82fr) 0px" absolute className={css(tabBarStyles.tabBar)}>
      <div className={css(tabBarStyles.rect20)} />
      <Px x="121fr 134fr 120fr" y="68fr 5fr 9px" absolute className={css(tabBarStyles.rect22)} />

      <Px x="375fr" y="12px 22fr 48fr" absolute className={css(tabBarStyles.flexRow144)}>
        <div className={css(tabBarStyles.flexRow144_space0)} />
        <div className={css(tabBarStyles.flexRow144_item1)}>
          <div className={css(tabBarStyles.img24)} />
        </div>
        <div className={css(tabBarStyles.flexRow144_space2)} />
        <div className={css(tabBarStyles.flexRow144_item3)}>
          <div className={css(tabBarStyles.img28)} />
        </div>
        <div className={css(tabBarStyles.flexRow144_space4)} />
        <div className={css(tabBarStyles.flexRow144_item5)}>
          <div className={css(tabBarStyles.img30)} />
        </div>
        <div className={css(tabBarStyles.flexRow144_space6)} />
        <div className={css(tabBarStyles.flexRow144_item7)}>
          <div className={css(tabBarStyles.img26)} />
        </div>
        <div className={css(tabBarStyles.flexRow144_space8)} />
      </Px>
    </Px>
  );
}

export default function Home(props) {
  return (
    <Px
      x="100%"
      y="100%"
      absolute
      trackStyle={{ overflow: 'auto' }}
      areaStyle={{ overflow: 'hidden' }}
      className={css(styles.group1)}>
      {renderContent(props)}
      {renderStatusBar(props)}
      {renderTabBar(props)}
    </Px>
  );
}

Home.inStorybook = true;

const heroStyles = StyleSheet.create({
  hero: { width: `100%`, display: `flex`, position: `relative`, minHeight: 200 },
  hero_space0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 24 },
  hero_item1: { position: `relative`, display: `flex`, flexGrow: 1, flexBasis: 315 },
  group76: { width: `100%`, display: `flex`, position: `relative`, minHeight: 200 },
  img50: {
    opacity: 0.8046177455357143,
    backgroundImage: `url(${require('assets/6381e951b07d81dd2a7f8c80e90b8d99.png')})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `0px 0px 0px 0px`,
    position: `absolute`,
    top: 66,
    minHeight: 134,
    bottom: 0,
    left: 35,
    flexGrow: 1,
    right: 23
  },
  img51: {
    opacity: 0.5,
    backgroundImage: `url(${require('assets/425d537181fbbd4107f44cf2aae8f77b.png')})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `10px 10px 10px 10px`,
    position: `absolute`,
    top: 0,
    minHeight: 192,
    bottom: 8,
    left: 0,
    flexGrow: 1,
    right: 18
  },
  img53: {
    width: `100%`,
    backgroundImage: `url(${require('assets/3f0d762784f609a645f48d8861f20efd.png')})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `10px 10px 10px 10px`,
    position: `absolute`,
    top: 0,
    bottom: 8
  },
  txt56: shareStyles.fitVisible,
  txt56_content: {
    color: `rgb(255,255,255)`,
    textAlign: `left`,
    lineHeight: `29px`,
    fontSize: `22px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexRow260: shareStyles.fitFlex,
  flexRow260_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 21 },
  img60: {
    width: 21,
    height: 21,
    backgroundImage: `url(${require('assets/688f5ec46a2abe11d9105e90013a2bcf.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `relative`,
    marginTop: 0,
    marginBottom: 1
  },
  flexRow260_space1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 9 },
  flexRow260_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt57: { width: `100%`, overflow: `visible`, position: `relative`, marginTop: 3, minHeight: 19, marginBottom: 0 },
  txt57_content: {
    color: `rgb(255,255,255)`,
    textAlign: `left`,
    textShadow: `0px 1px 9px rgba(0,0,0,0.5019607843137255)`,
    lineHeight: `19px`,
    fontSize: `14px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexRow260_space3: { position: `relative`, display: `flex`, flexGrow: 1, flexBasis: 146 },
  img59: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/eea0b48631523881e085f8d36482a4ca.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  hero_space2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 16 },
  hero_space3: { position: `relative`, display: `flex`, flexBasis: 20 }
});

const contentStyles = StyleSheet.create({
  content: shareStyles.fitFlex,
  img31: {
    width: `104.53333333333332%`,
    height: `100%`,
    transform: `translate(0px, 0px)`,
    backgroundImage: `url(${require('assets/f9e54f0941bdaddb2dd6550636fd4f2e.png')})`,
    backgroundSize: `100% 100%`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexColumn194: {
    width: `100%`,
    display: `flex`,
    flexDirection: `column`,
    position: `relative`,
    marginTop: 53,
    minHeight: 727,
    marginBottom: 0
  },
  flexColumn194_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt62: { overflow: `visible`, position: `relative`, minHeight: 24, marginLeft: 31 },
  txt62_content: {
    color: `rgb(255,255,255)`,
    textAlign: `left`,
    lineHeight: `24px`,
    fontSize: `18px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexColumn194_item1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto`, marginTop: -1 },
  txt61: { overflow: `visible`, position: `relative`, minHeight: 19, marginLeft: 31 },
  txt61_content: {
    color: `rgb(255,255,255)`,
    textAlign: `left`,
    lineHeight: `19px`,
    fontSize: `14px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexColumn194_space2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 18 },
  flexColumn194_item3: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  flexColumn194_space4: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 27 },
  flexColumn194_item5: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  flexRow137: { display: `flex`, position: `relative`, minHeight: 45, marginLeft: 31, flexGrow: 1, marginRight: 29 },
  flexRow137_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  flexColumn131: { display: `flex`, flexDirection: `column`, position: `relative`, minHeight: 45, maxWidth: `auto` },
  flexColumn131_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt33: { overflow: `visible`, position: `relative`, minHeight: 24, marginLeft: 0 },
  txt33_content: {
    color: `rgb(255,45,85)`,
    textAlign: `left`,
    lineHeight: `24px`,
    fontSize: `18px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexColumn131_space1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 2 },
  flexColumn131_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt34: { overflow: `visible`, position: `relative`, minHeight: 19, maxWidth: `auto` },
  txt34_content: {
    color: `rgba(84,84,84,0.5019607843137255)`,
    textAlign: `left`,
    lineHeight: `19px`,
    fontSize: `14px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexRow137_space1: { position: `relative`, display: `flex`, flexGrow: 1, flexBasis: 106 },
  flexRow137_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt35: shareStyles.fitVisible,
  txt35_content: {
    color: `rgb(84,84,84)`,
    textAlign: `left`,
    lineHeight: `19px`,
    fontSize: `14px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexColumn194_space6: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 19 },
  flexColumn194_item7: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  discover: { display: `flex`, flexWrap: `wrap`, position: `relative`, marginLeft: 9, flexGrow: 1, marginRight: 5 },
  discover_item0: { position: `relative`, display: `flex`, flexBasis: 119.5 },
  item: { width: `100%`, display: `flex`, position: `relative`, minWidth: 120 },
  flexColumn87: shareStyles.fitFlexColumn,
  flexColumn87_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 90 },
  img38: {
    width: `100%`,
    height: 90,
    backgroundImage: `url(${require('assets/7f907c72cedd510912cc2f012aeac015.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `relative`
  },
  flexColumn87_space1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 8 },
  flexColumn87_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt39: {
    width: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`,
    position: `relative`,
    minHeight: 34
  },
  txt39_content: {
    color: `rgb(84,84,84)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `17px`,
    fontSize: `13px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    margin: 0,
    userSelect: `text`
  },
  flexColumn87_space3: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 3 },
  flexColumn87_item4: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt40: {
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`,
    position: `relative`,
    minHeight: 26,
    marginLeft: 9,
    flexGrow: 1,
    marginRight: 9
  },
  txt40_content: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `13px`,
    fontSize: `11px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    margin: 0,
    userSelect: `text`
  },
  discover_item1: { position: `relative`, display: `flex`, flexBasis: 119.5 },
  item1: { width: `100%`, display: `flex`, position: `relative`, minWidth: 120 },
  flexColumn95: shareStyles.fitFlexColumn,
  flexColumn95_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 90 },
  img46: {
    width: `100%`,
    height: 90,
    backgroundImage: `url(${require('assets/6100c327dbdaa82c9d7d556b4530bfba.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `relative`
  },
  flexColumn95_space1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 11 },
  flexColumn95_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt47: {
    width: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`,
    position: `relative`,
    minHeight: 18,
    minWidth: 94
  },
  txt47_content: {
    color: `rgb(84,84,84)`,
    textAlign: `center`,
    lineHeight: `18px`,
    fontSize: `13px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexColumn95_space3: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 1 },
  flexColumn95_item4: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt48: {
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`,
    position: `relative`,
    minHeight: 15,
    marginLeft: 11,
    flexGrow: 1,
    minWidth: 73,
    marginRight: 11
  },
  txt48_content: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `center`,
    lineHeight: `15px`,
    fontSize: `11px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  discover_item2: { position: `relative`, display: `flex`, flexBasis: 119.5 },
  item2: { width: `100%`, display: `flex`, position: `relative`, minWidth: 120 },
  flexColumn103: shareStyles.fitFlexColumn,
  flexColumn103_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 90 },
  img42: {
    width: `100%`,
    height: 90,
    backgroundImage: `url(${require('assets/921b2dfc4c45918f20acb16059d6069f.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `relative`
  },
  flexColumn103_space1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 11 },
  flexColumn103_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt43: {
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`,
    position: `relative`,
    minHeight: 18,
    marginLeft: 10,
    flexGrow: 1,
    minWidth: 73,
    marginRight: 9
  },
  txt43_content: {
    color: `rgb(84,84,84)`,
    textAlign: `center`,
    lineHeight: `18px`,
    fontSize: `13px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexColumn103_space3: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 1 },
  flexColumn103_item4: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt44: {
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`,
    position: `relative`,
    minHeight: 15,
    marginLeft: 21,
    flexGrow: 1,
    minWidth: 52,
    marginRight: 19
  },
  txt44_content: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `center`,
    lineHeight: `15px`,
    fontSize: `11px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexColumn194_item8: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt18: shareStyles.fitVisible,
  txt18_content: {
    color: `rgb(255,45,85)`,
    textAlign: `left`,
    lineHeight: `24px`,
    fontSize: `18px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexColumn194_space9: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 15 },
  flexColumn194_item10: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  recently: { display: `flex`, position: `relative`, minHeight: 150, marginLeft: 24, flexGrow: 1, marginRight: 24 },
  rect4: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: `10px 10px 10px 10px`,
    position: `absolute`,
    minHeight: 150
  },
  img5: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/37b368019be0241f33d56da478bf4fc8.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexRow227: shareStyles.fitFlex,
  flexRow227_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 44 },
  img11: {
    width: 44,
    height: 44,
    backgroundImage: `url(${require('assets/babcc6c199851bb23341cd5436eaf795.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `8px 8px 8px 8px`,
    position: `relative`,
    marginTop: 0,
    marginBottom: 3
  },
  flexRow227_space1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 15 },
  flexRow227_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  flexColumn209: {
    width: `100%`,
    display: `flex`,
    flexDirection: `column`,
    position: `relative`,
    marginTop: 5,
    minHeight: 42,
    marginBottom: 0
  },
  flexColumn209_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt7: { width: `100%`, overflow: `visible`, position: `relative`, minHeight: 21, minWidth: 89 },
  txt7_content: {
    color: `rgb(84,84,84)`,
    textAlign: `left`,
    lineHeight: `21px`,
    fontSize: `16px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexColumn209_space1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 2 },
  flexColumn209_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt8: {
    overflow: `visible`,
    position: `relative`,
    minHeight: 19,
    marginLeft: 0,
    flexGrow: 1,
    minWidth: 66,
    marginRight: 23
  },
  txt8_content: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `left`,
    lineHeight: `19px`,
    fontSize: `14px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexRow227_space3: { position: `relative`, display: `flex`, flexGrow: 1, flexBasis: 128 },
  flexRow227_item4: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt9: {
    width: `100%`,
    display: `flex`,
    justifyContent: `flex-end`,
    overflow: `visible`,
    position: `relative`,
    marginTop: 9,
    minHeight: 15,
    marginBottom: 23,
    minWidth: 19
  },
  txt9_content: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `right`,
    lineHeight: `15px`,
    fontSize: `11px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexRow220: shareStyles.fitFlex,
  flexRow220_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 44 },
  img17: {
    width: 44,
    height: 44,
    backgroundImage: `url(${require('assets/e236f4c4d4d424e53bacefcdc7cd88d0.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `8px 8px 8px 8px`,
    position: `relative`,
    marginTop: 0,
    marginBottom: 3
  },
  flexRow220_space1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 15 },
  flexRow220_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  flexColumn215: {
    width: `100%`,
    display: `flex`,
    flexDirection: `column`,
    position: `relative`,
    marginTop: 5,
    minHeight: 42,
    marginBottom: 0
  },
  flexColumn215_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt13: { width: `100%`, overflow: `visible`, position: `relative`, minHeight: 21, minWidth: 133 },
  txt13_content: {
    color: `rgb(84,84,84)`,
    textAlign: `left`,
    lineHeight: `21px`,
    fontSize: `16px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexColumn215_space1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 2 },
  flexColumn215_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt14: shareStyles.fitVisible,
  txt14_content: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `left`,
    lineHeight: `19px`,
    fontSize: `14px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexRow220_space3: { position: `relative`, display: `flex`, flexGrow: 1, flexBasis: 71 },
  flexRow220_item4: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt15: {
    width: `100%`,
    display: `flex`,
    justifyContent: `flex-end`,
    overflow: `visible`,
    position: `relative`,
    marginTop: 9,
    minHeight: 15,
    marginBottom: 23,
    minWidth: 32
  },
  txt15_content: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `right`,
    lineHeight: `15px`,
    fontSize: `11px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  }
});

const statusBarStyles = StyleSheet.create({
  statusBar: shareStyles.fitFlex,
  rect65: { width: `100%`, height: `100%`, borderRadius: `0px 0px 0px 0px`, position: `absolute`, minHeight: 44 },
  flexRow237: {
    display: `flex`,
    position: `absolute`,
    top: 16,
    minHeight: 17,
    bottom: 12,
    left: 21,
    flexGrow: 1,
    right: 14
  },
  flexRow237_item0: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: `auto` },
  txt73: {
    width: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`,
    position: `relative`,
    minHeight: 17,
    minWidth: 54
  },
  txt73_content: {
    color: `rgb(255,255,255)`,
    textAlign: `center`,
    lineHeight: `17px`,
    fontSize: `14px`,
    fontWeight: 600,
    fontStyle: `normal`,
    fontFamily: `Roboto, Helvetica, Arial, serif`,
    userSelect: `text`
  },
  txt73Span0: {
    color: `#ffffffff`,
    lineHeight: `17px`,
    fontSize: `14px`,
    fontWeight: 600,
    fontStyle: `normal`,
    fontFamily: `Roboto, Helvetica, Arial, serif`
  },
  txt73Span1: {
    color: `#ffffffff`,
    lineHeight: `17px`,
    fontSize: `14px`,
    fontWeight: 600,
    fontStyle: `normal`,
    fontFamily: `Roboto, Helvetica, Arial, serif`
  },
  flexRow237_space1: { position: `relative`, display: `flex`, flexGrow: 1, flexBasis: 219 },
  flexRow237_item2: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 17 },
  img71: {
    width: 17,
    height: 11,
    backgroundImage: `url(${require('assets/795ac441aa8b562eefccf531aa0efdfc.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `relative`,
    marginTop: 3,
    marginBottom: 4
  },
  flexRow237_space3: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 5 },
  flexRow237_item4: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 16 },
  img70: {
    width: 16,
    height: 11,
    backgroundImage: `url(${require('assets/451fedd8c291cbdd8ba086e9a85f4a89.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `relative`,
    marginTop: 3,
    marginBottom: 4
  },
  flexRow237_space5: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 4 },
  flexRow237_item6: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 25 },
  group235: { width: `100%`, display: `flex`, position: `relative`, marginTop: 2, minHeight: 12, marginBottom: 4 },
  rect67: {
    height: `100%`,
    opacity: 0.35,
    borderRadius: `2.666666746139526px 2.666666746139526px 2.666666746139526px 2.666666746139526px`,
    borderStyle: `solid`,
    borderColor: `rgb(255,255,255)`,
    borderWidth: 1,
    position: `absolute`,
    minHeight: 12,
    left: 0,
    flexGrow: 1,
    right: 3
  },
  img68: {
    width: 2,
    height: 4,
    opacity: 0.4,
    backgroundImage: `url(${require('assets/553e70bafe2803a5419746deea178230.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `absolute`,
    top: 0,
    marginTop: 4,
    marginBottom: 4,
    left: 0,
    marginLeft: 23,
    marginRight: 0
  },
  rect69: {
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: `1.333333373069763px 1.333333373069763px 1.333333373069763px 1.333333373069763px`,
    position: `absolute`,
    top: 2,
    minHeight: 8,
    bottom: 2,
    left: 2,
    flexGrow: 1,
    right: 5
  }
});

const tabBarStyles = StyleSheet.create({
  tabBar: shareStyles.fitFlex,
  rect20: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,253,253)`,
    borderRadius: `0px 0px 0px 0px`,
    boxShadow: `0px -5px 74px 0px rgba(84,84,84,0.2627450980392157)`,
    position: `absolute`,
    minHeight: 82
  },
  rect22: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(232,232,232)`,
    borderRadius: `100px 100px 100px 100px`
  },
  flexRow144: shareStyles.fitFlex,
  flexRow144_space0: { position: `relative`, display: `flex`, flexGrow: 1, flexShrink: 0, flexBasis: 54 },
  flexRow144_item1: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 20 },
  img24: {
    width: 20,
    height: 20,
    backgroundImage: `url(${require('assets/501cef46729a85144552533f184476d9.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `relative`,
    marginTop: 2,
    marginBottom: 0
  },
  flexRow144_space2: { position: `relative`, display: `flex`, flexGrow: 1, flexBasis: 61 },
  flexRow144_item3: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 20 },
  img28: {
    width: 20,
    height: 20,
    backgroundImage: `url(${require('assets/1d4ae77a7252ffe42d7ad3d0fdd4bb8d.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `relative`,
    marginTop: 1,
    marginBottom: 1
  },
  flexRow144_space4: { position: `relative`, display: `flex`, flexGrow: 1, flexBasis: 65 },
  flexRow144_item5: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 18 },
  img30: {
    width: 18,
    height: 17,
    backgroundImage: `url(${require('assets/270cae3ae8756ce5d41b653705ad1cfe.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `relative`,
    marginTop: 2,
    marginBottom: 3
  },
  flexRow144_space6: { position: `relative`, display: `flex`, flexGrow: 1, flexBasis: 64 },
  flexRow144_item7: { position: `relative`, display: `flex`, flexShrink: 0, flexBasis: 19 },
  img26: {
    width: 19,
    height: 21,
    backgroundImage: `url(${require('assets/aa0f4ef3cba253e5b5ecafb8bb542dcc.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    position: `relative`,
    marginTop: 0,
    marginBottom: 1
  },
  flexRow144_space8: { position: `relative`, display: `flex`, flexGrow: 1, flexShrink: 0, flexBasis: 54 }
});

const styles = StyleSheet.create({
  group1: { width: `100%`, height: `100%`, display: `flex`, backgroundColor: `rgb(255,255,255)` }
});
