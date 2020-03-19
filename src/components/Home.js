import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import posize from 'components/posize.v10';
import { commonStyles, shareStyles } from 'components/pxConfig';

const Px = posize('div');

export default class Home extends Component {
  static inStorybook = true;

  static propTypes = {};
  static defaultProps = {};

  get injectChildren() {
    const { children } = this.props;
    const injectMap = new Map();
    React.Children.forEach(children, (child) => {
      if (child && child.props && child.props.placeholder) {
        injectMap.set(child.props.placeholder, () => {
          return child;
        });
      }
    });
    return injectMap;
  }

  render() {
    const injectMap = this.injectChildren;
    return (
      <Px layout={layouts.group1}>
        <Px layout={layouts.BodyGroup75}>
          <Px layout={layouts.graph31} />

          <Px layout={layouts.flexGroup124}>
            <Px layout={layouts.text62}>
              <div className={css(styles.text62Text)}>{'Explore'}</div>
            </Px>
            <div className={css(styles.flexCell126)} />
            <Px layout={layouts.text61}>
              <div className={css(styles.text61Text)}>
                {'Based on your interests'}
              </div>
            </Px>
            <div className={css(styles.flexCell128)} />

            <Px layout={layouts.flexGroup135}>
              <div className={css(styles.flexCell136)} />

              <Px layout={layouts.group138}>
                <Px layout={layouts.graph50} />

                <Px layout={layouts.CoverGroupGroup118}>
                  <Px layout={layouts.graph51} />

                  <Px layout={layouts.group52}>
                    <Px layout={layouts.graph53} />
                  </Px>

                  <Px layout={layouts.BackgroundGroupGroup122}>
                    <Px layout={layouts.flexGroup219}>
                      <Px layout={layouts.text56}>
                        <div className={css(styles.text56Text)}>
                          {'Play without subscribing'}
                        </div>
                      </Px>
                      <div className={css(styles.flexCell221)} />

                      <Px layout={layouts.flexGroup238}>
                        <div className={css(styles.flexCell239)} />
                        <Px layout={layouts.graph60} />
                        <div className={css(styles.flexCell241)} />
                        <Px layout={layouts.text57}>
                          <div className={css(styles.text57Text)}>
                            {'Davide Galizzi'}
                          </div>
                        </Px>
                        <div className={css(styles.flexCell243)} />

                        <Px layout={layouts.group58}>
                          <Px layout={layouts.graph59} />
                        </Px>
                      </Px>
                    </Px>
                  </Px>
                </Px>
              </Px>

              <div className={css(styles.flexCell140)} />

              <Px layout={layouts.group54}>
                <Px layout={layouts.graph55} />
              </Px>
            </Px>

            <div className={css(styles.flexCell130)} />

            <Px layout={layouts.flexGroup143}>
              <Px layout={layouts.text33}>
                <div className={css(styles.text33Text)}>{'Discover'}</div>
              </Px>
              <div className={css(styles.flexCell145)} />

              <Px layout={layouts.flexGroup157}>
                <div className={css(styles.flexCell158)} />
                <Px layout={layouts.text34}>
                  <div className={css(styles.text34Text)}>
                    {'Top podcasts on PodPro'}
                  </div>
                </Px>
                <div className={css(styles.flexCell160)} />
                <Px layout={layouts.text35}>
                  <div className={css(styles.text35Text)}>{'Show all'}</div>
                </Px>
                <div className={css(styles.flexCell162)} />
              </Px>

              <div className={css(styles.flexCell149)} />

              <Px layout={layouts.flexGroup164}>
                <Px layout={layouts.flexGroup171}>
                  <Px layout={layouts.graph38} />
                  <div className={css(styles.flexCell173)} />
                  <Px layout={layouts.text39}>
                    <div className={css(styles.text39Text)}>
                      {'To Live and Die \nin LA'}
                    </div>
                  </Px>
                  <div className={css(styles.flexCell175)} />
                  <Px layout={layouts.text40}>
                    <div className={css(styles.text40Text)}>
                      {'Tenderfoot TV \n& Cadence 13'}
                    </div>
                  </Px>
                </Px>

                <div className={css(styles.flexCell166)} />

                <Px layout={layouts.flexGroup178}>
                  <Px layout={layouts.graph46} />
                  <div className={css(styles.flexCell180)} />
                  <Px layout={layouts.text47}>
                    <div className={css(styles.text47Text)}>
                      {'Public Official A'}
                    </div>
                  </Px>
                  <div className={css(styles.flexCell182)} />
                  <Px layout={layouts.text48}>
                    <div className={css(styles.text48Text)}>
                      {'WBEZ Chicago'}
                    </div>
                  </Px>
                </Px>

                <div className={css(styles.flexCell168)} />

                <Px layout={layouts.flexGroup185}>
                  <Px layout={layouts.graph42} />
                  <div className={css(styles.flexCell187)} />
                  <Px layout={layouts.text43}>
                    <div className={css(styles.text43Text)}>
                      {'The Dropout'}
                    </div>
                  </Px>
                  <div className={css(styles.flexCell189)} />
                  <Px layout={layouts.text44}>
                    <div className={css(styles.text44Text)}>{'ABC News'}</div>
                  </Px>
                </Px>
              </Px>
            </Px>

            <div className={css(styles.flexCell132)} />

            <Px layout={layouts.flexGroup152}>
              <Px layout={layouts.text18}>
                <div className={css(styles.text18Text)}>
                  {'Recently Uploaded'}
                </div>
              </Px>
              <div className={css(styles.flexCell154)} />

              <Px layout={layouts.group3}>
                <Px layout={layouts.box4} />

                <Px layout={layouts.BackgroundGroupFlexGroup192}>
                  <div className={css(styles.flexCell193)} />

                  <Px layout={layouts.flexGroup201}>
                    <Px layout={layouts.group10}>
                      <Px layout={layouts.graph11} />
                    </Px>

                    <div className={css(styles.flexCell203)} />

                    <Px layout={layouts.flexGroup226}>
                      <div className={css(styles.flexCell227)} />
                      <Px layout={layouts.text7}>
                        <div className={css(styles.text7Text)}>
                          {'The Dropout'}
                        </div>
                      </Px>
                      <div className={css(styles.flexCell229)} />
                      <Px layout={layouts.text8}>
                        <div className={css(styles.text8Text)}>
                          {'ABC News'}
                        </div>
                      </Px>
                    </Px>

                    <div className={css(styles.flexCell207)} />
                    <Px layout={layouts.text9}>
                      <div className={css(styles.text9Text)}>{'41s'}</div>
                    </Px>
                  </Px>

                  <div className={css(styles.flexCell195)} />
                  <Px layout={layouts.box5} />
                  <div className={css(styles.flexCell197)} />

                  <Px layout={layouts.flexGroup210}>
                    <Px layout={layouts.group16}>
                      <Px layout={layouts.graph17} />
                    </Px>

                    <div className={css(styles.flexCell212)} />

                    <Px layout={layouts.flexGroup232}>
                      <div className={css(styles.flexCell233)} />
                      <Px layout={layouts.text13}>
                        <div className={css(styles.text13Text)}>
                          {'Should This Exist?'}
                        </div>
                      </Px>
                      <div className={css(styles.flexCell235)} />
                      <Px layout={layouts.text14}>
                        <div className={css(styles.text14Text)}>
                          {'WaitWhat'}
                        </div>
                      </Px>
                    </Px>

                    <div className={css(styles.flexCell216)} />
                    <Px layout={layouts.text15}>
                      <div className={css(styles.text15Text)}>{'39min'}</div>
                    </Px>
                  </Px>

                  <div className={css(styles.flexCell199)} />
                </Px>
              </Px>
            </Px>
          </Px>
        </Px>

        <Px layout={layouts.group19}>
          <Px layout={layouts.box20} />

          <Px layout={layouts.BackgroundGroupFlexGroup89}>
            <div className={css(styles.flexCell90)} />

            <Px layout={layouts.flexGroup78}>
              <Px layout={layouts.group23}>
                <Px layout={layouts.graph24} />
              </Px>

              <div className={css(styles.flexCell80)} />

              <Px layout={layouts.group27}>
                <Px layout={layouts.graph28} />
              </Px>

              <div className={css(styles.flexCell82)} />

              <Px layout={layouts.group29}>
                <Px layout={layouts.graph30} />
              </Px>

              <div className={css(styles.flexCell84)} />

              <Px layout={layouts.group25}>
                <Px layout={layouts.graph26} />
              </Px>
            </Px>

            <div className={css(styles.flexCell92)} />

            <Px layout={layouts.group21}>
              <Px layout={layouts.box22} />
            </Px>

            <div className={css(styles.flexCell94)} />
          </Px>
        </Px>

        <Px layout={layouts.group63}>
          <Px layout={layouts.group64}>
            <Px layout={layouts.box65} />

            <Px layout={layouts.BackgroundGroupFlexGroup100}>
              <div className={css(styles.flexCell101)} />

              <Px layout={layouts.group72}>
                <Px layout={layouts.text73}>
                  <div className={css(styles.text73Text)}>
                    <span className={css(styles.text73Span0)}>{'9:4'}</span>
                    <span className={css(styles.text73Span1)}>{'1'}</span>
                  </div>
                </Px>
              </Px>

              <div className={css(styles.flexCell103)} />
              <Px layout={layouts.graph71} />
              <div className={css(styles.flexCell105)} />
              <Px layout={layouts.graph70} />
              <div className={css(styles.flexCell107)} />

              <Px layout={layouts.flexGroup111}>
                <Px layout={layouts.CoverGroupGroup96}>
                  <Px layout={layouts.box67} />
                  <Px layout={layouts.box69} />
                </Px>

                <div className={css(styles.flexCell113)} />
                <Px layout={layouts.graph68} />
              </Px>

              <div className={css(styles.flexCell109)} />
            </Px>
          </Px>
        </Px>
      </Px>
    );
  }
}

const styles = StyleSheet.create({
  group1Body: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,255,255)`
  },
  BodyGroup75Body: shareStyles.fit,
  graph31Body: {
    width: `110.58229166666665%`,
    height: `106.24010587446871%`,
    transform: `translate(-23px, -13.15625px)`,
    backgroundImage: `url(${require('assets/1a027ac7abddd53be943946e0919b65b.png')})`,
    backgroundSize: `100% 100%`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexGroup124Body: shareStyles.fitFlexColumn,
  text62Outer: { position: `relative`, flexBasis: 24 },
  text62Body: shareStyles.fit,
  text62Text: {
    color: `rgb(255,255,255)`,
    textAlign: `left`,
    lineHeight: `21.599999999999998px`,
    fontSize: 18,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell126: { position: `relative`, flexShrink: 0, minHeight: 2 },
  text61Outer: { position: `relative`, flexBasis: 19 },
  text61Body: shareStyles.fit,
  text61Text: {
    color: `rgb(255,255,255)`,
    textAlign: `left`,
    lineHeight: `16.8px`,
    fontSize: 14,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell128: { position: `relative`, flexShrink: 0, minHeight: 18 },
  flexGroup135Outer: { position: `relative`, flexBasis: 200 },
  flexGroup135Body: shareStyles.fitFlex,
  flexCell136: { position: `relative`, flexShrink: 0, minWidth: 24 },
  group138Outer: { position: `relative`, flexGrow: 1, flexBasis: 315 },
  group138Body: shareStyles.fit,
  graph50Body: {
    width: `100%`,
    height: `100%`,
    opacity: 0.8046177455357143,
    backgroundImage: `url(${require('assets/dda54ae400f4eb5495599d626f0dba19.png')})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `0px 0px 0px 0px`
  },
  CoverGroupGroup118Body: shareStyles.fit,
  graph51Body: {
    width: `100%`,
    height: `100%`,
    opacity: 0.5,
    backgroundImage: `url(${require('assets/00cbce7d9268e41e3f159d8d53aa83d6.png')})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `10px 10px 10px 10px`
  },
  group52Body: shareStyles.fit,
  graph53Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/7af1b12e24fcdab21907d449ead9cec0.png')})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `10px 10px 10px 10px`
  },
  BackgroundGroupGroup122Body: shareStyles.fit,
  flexGroup219Body: shareStyles.fitFlexColumn,
  text56Outer: { position: `relative`, flexBasis: 29 },
  text56Body: shareStyles.fit,
  text56Text: {
    color: `rgb(255,255,255)`,
    textAlign: `left`,
    lineHeight: `26.4px`,
    fontSize: 22,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell221: { position: `relative`, flexBasis: 74 },
  flexGroup238Outer: { position: `relative`, flexBasis: 42 },
  flexGroup238Body: shareStyles.fitFlex,
  flexCell239: { position: `relative`, flexShrink: 0, minWidth: 2 },
  graph60Outer: { position: `relative`, flexBasis: 20.5 },
  graph60Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/644d6bc0b8b19a0201ef5ae5853024b9.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell241: { position: `relative`, flexShrink: 0, minWidth: 9.5 },
  text57Outer: { position: `relative`, flexBasis: 89 },
  text57Body: shareStyles.fit,
  text57Text: {
    color: `rgb(255,255,255)`,
    textAlign: `left`,
    lineHeight: `16.8px`,
    textShadow: `0px 1px 9px #00000080`,
    fontSize: 14,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell243: { position: `relative`, flexGrow: 1, flexBasis: 113 },
  group58Outer: { position: `relative`, flexShrink: 0, minWidth: 41 },
  group58Body: shareStyles.fit,
  graph59Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/f3df2077ade351a2f6f73c03bf65bbc7.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell140: { position: `relative`, flexShrink: 0, minWidth: 16 },
  group54Outer: { position: `relative`, flexBasis: 20 },
  group54Body: shareStyles.fit,
  graph55Body: {
    width: `1575%`,
    height: `100%`,
    transform: `translate(0px, 0px)`,
    backgroundImage: `url(${require('assets/d3f260395b4eee3aadb048c6d6ce9e28.png')})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `10px 10px 10px 10px`
  },
  flexCell130: { position: `relative`, flexShrink: 0, minHeight: 27 },
  flexGroup143Outer: { position: `relative`, flexBasis: 224 },
  flexGroup143Body: shareStyles.fitFlexColumn,
  text33Outer: { position: `relative`, flexBasis: 24 },
  text33Body: shareStyles.fit,
  text33Text: {
    color: `rgb(255,45,85)`,
    textAlign: `left`,
    lineHeight: `21.599999999999998px`,
    fontSize: 18,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell145: { position: `relative`, flexShrink: 0, minHeight: 2 },
  flexGroup157Outer: { position: `relative`, flexBasis: 19 },
  flexGroup157Body: shareStyles.fitFlex,
  flexCell158: { position: `relative`, flexShrink: 0, minWidth: 31 },
  text34Outer: { position: `relative`, flexBasis: 155 },
  text34Body: shareStyles.fit,
  text34Text: {
    color: `rgba(84,84,84,0.5019607843137255)`,
    textAlign: `left`,
    lineHeight: `16.8px`,
    fontSize: 14,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell160: { position: `relative`, flexGrow: 1, flexBasis: 106 },
  text35Outer: { position: `relative`, flexBasis: 54 },
  text35Body: shareStyles.fit,
  text35Text: {
    color: `rgb(84,84,84)`,
    textAlign: `left`,
    lineHeight: `16.8px`,
    fontSize: 14,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell162: { position: `relative`, flexShrink: 0, minWidth: 29 },
  flexCell149: { position: `relative`, flexShrink: 0, minHeight: 19 },
  flexGroup164Outer: { position: `relative`, flexBasis: 160 },
  flexGroup164Body: shareStyles.fitFlex,
  flexGroup171Outer: { position: `relative`, flexBasis: 92 },
  flexGroup171Body: shareStyles.fitFlexColumn,
  graph38Outer: { position: `relative`, flexBasis: 90 },
  graph38Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/8e95951bfcc4dbc90910d71e2621c1e5.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell173: { position: `relative`, flexShrink: 0, minHeight: 6 },
  text39Outer: { position: `relative`, flexBasis: 34 },
  text39Body: shareStyles.fitFlexCenter,
  text39Text: {
    color: `rgb(84,84,84)`,
    textAlign: `center`,
    lineHeight: `17px`,
    whiteSpace: `pre-wrap`,
    fontSize: 13,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell175: { position: `relative`, flexShrink: 0, minHeight: 4 },
  text40Outer: { position: `relative`, flexBasis: 26 },
  text40Body: shareStyles.fitFlexCenter,
  text40Text: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `center`,
    lineHeight: `13px`,
    whiteSpace: `pre-wrap`,
    fontSize: 11,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell166: { position: `relative`, flexShrink: 0, minWidth: 27.5 },
  flexGroup178Outer: { position: `relative`, flexBasis: 94 },
  flexGroup178Body: shareStyles.fitFlexColumn,
  graph46Outer: { position: `relative`, flexBasis: 90 },
  graph46Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/26dea6e4bf92e2158d8ac293b6666835.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell180: { position: `relative`, flexShrink: 0, minHeight: 11 },
  text47Outer: { position: `relative`, flexBasis: 18 },
  text47Body: shareStyles.fitFlexCenter,
  text47Text: {
    color: `rgb(84,84,84)`,
    textAlign: `center`,
    lineHeight: `15.6px`,
    fontSize: 13,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell182: { position: `relative`, flexShrink: 0, minHeight: 1 },
  text48Outer: { position: `relative`, flexBasis: 15 },
  text48Body: shareStyles.fitFlexCenter,
  text48Text: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `center`,
    lineHeight: `13.2px`,
    fontSize: 11,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell168: { position: `relative`, flexShrink: 0, minWidth: 28 },
  flexGroup185Outer: { position: `relative`, flexBasis: 90.5 },
  flexGroup185Body: shareStyles.fitFlexColumn,
  graph42Outer: { position: `relative`, flexBasis: 90 },
  graph42Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/b02e08d6f82495943dfa8f67f18efd22.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell187: { position: `relative`, flexShrink: 0, minHeight: 11 },
  text43Outer: { position: `relative`, flexBasis: 18 },
  text43Body: shareStyles.fitFlexCenter,
  text43Text: {
    color: `rgb(84,84,84)`,
    textAlign: `center`,
    lineHeight: `15.6px`,
    fontSize: 13,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell189: { position: `relative`, flexShrink: 0, minHeight: 1 },
  text44Outer: { position: `relative`, flexBasis: 15 },
  text44Body: shareStyles.fitFlexCenter,
  text44Text: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `center`,
    lineHeight: `13.2px`,
    fontSize: 11,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell132: { position: `relative`, flexShrink: 0, minHeight: 27 },
  flexGroup152Outer: { position: `relative`, flexBasis: 189 },
  flexGroup152Body: shareStyles.fitFlexColumn,
  text18Outer: { position: `relative`, flexBasis: 24 },
  text18Body: shareStyles.fit,
  text18Text: {
    color: `rgb(255,45,85)`,
    textAlign: `left`,
    lineHeight: `21.599999999999998px`,
    fontSize: 18,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell154: { position: `relative`, flexShrink: 0, minHeight: 15 },
  group3Outer: { position: `relative`, flexBasis: 150 },
  group3Body: shareStyles.fit,
  box4Body: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: `10px 10px 10px 10px`
  },
  BackgroundGroupFlexGroup192Body: shareStyles.fitFlexColumn,
  flexCell193: { position: `relative`, flexShrink: 0, minHeight: 15 },
  flexGroup201Outer: { position: `relative`, flexBasis: 47 },
  flexGroup201Body: shareStyles.fitFlex,
  group10Outer: { position: `relative`, flexShrink: 0, minWidth: 44 },
  group10Body: shareStyles.fit,
  graph11Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/2bafc319c5bac7b182450e313d354b3c.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `8px 8px 8px 8px`
  },
  flexCell203: { position: `relative`, flexShrink: 0, minWidth: 15 },
  flexGroup226Outer: { position: `relative`, flexBasis: 89 },
  flexGroup226Body: shareStyles.fitFlexColumn,
  flexCell227: { position: `relative`, flexShrink: 0, minHeight: 5 },
  text7Outer: { position: `relative`, flexBasis: 21 },
  text7Body: shareStyles.fit,
  text7Text: {
    color: `rgb(84,84,84)`,
    textAlign: `left`,
    lineHeight: `19.2px`,
    fontSize: 16,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell229: { position: `relative`, flexShrink: 0, minHeight: 2 },
  text8Outer: { position: `relative`, flexBasis: 19 },
  text8Body: shareStyles.fit,
  text8Text: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `left`,
    lineHeight: `16.8px`,
    fontSize: 14,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell207: { position: `relative`, flexGrow: 1, flexBasis: 128 },
  text9Outer: { position: `relative`, flexBasis: 19 },
  text9Body: {
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `flex-end`
  },
  text9Text: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `right`,
    lineHeight: `13.2px`,
    fontSize: 11,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell195: { position: `relative`, flexShrink: 0, minHeight: 11 },
  box5Outer: { position: `relative`, flexBasis: 1 },
  box5Body: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgba(151,151,151,0.2)`
  },
  flexCell197: { position: `relative`, flexShrink: 0, minHeight: 16 },
  flexGroup210Outer: { position: `relative`, flexBasis: 47 },
  flexGroup210Body: shareStyles.fitFlex,
  group16Outer: { position: `relative`, flexShrink: 0, minWidth: 44 },
  group16Body: shareStyles.fit,
  graph17Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/3b534859cfccd7d159630e90674f01a6.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `8px 8px 8px 8px`
  },
  flexCell212: { position: `relative`, flexShrink: 0, minWidth: 15 },
  flexGroup232Outer: { position: `relative`, flexBasis: 133 },
  flexGroup232Body: shareStyles.fitFlexColumn,
  flexCell233: { position: `relative`, flexShrink: 0, minHeight: 5 },
  text13Outer: { position: `relative`, flexBasis: 21 },
  text13Body: shareStyles.fit,
  text13Text: {
    color: `rgb(84,84,84)`,
    textAlign: `left`,
    lineHeight: `19.2px`,
    fontSize: 16,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell235: { position: `relative`, flexShrink: 0, minHeight: 2 },
  text14Outer: { position: `relative`, flexBasis: 19 },
  text14Body: shareStyles.fit,
  text14Text: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `left`,
    lineHeight: `16.8px`,
    fontSize: 14,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell216: { position: `relative`, flexGrow: 1, flexBasis: 71 },
  text15Outer: { position: `relative`, flexBasis: 32 },
  text15Body: {
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `flex-end`
  },
  text15Text: {
    color: `rgba(84,84,84,0.6)`,
    textAlign: `right`,
    lineHeight: `13.2px`,
    fontSize: 11,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexCell199: { position: `relative`, flexShrink: 0, minHeight: 13 },
  group19Body: shareStyles.fit,
  box20Body: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,253,253)`,
    borderRadius: `0px 0px 0px 0px`,
    boxShadow: `0px -5px 74px 0px #54545443`
  },
  BackgroundGroupFlexGroup89Body: shareStyles.fitFlexColumn,
  flexCell90: { position: `relative`, flexShrink: 0, minHeight: 2 },
  flexGroup78Outer: { position: `relative`, flexBasis: 41 },
  flexGroup78Body: shareStyles.fitFlex,
  group23Outer: { position: `relative`, flexBasis: 40 },
  group23Body: shareStyles.fit,
  graph24Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/aab18cd806476b48aa57a85e6b0c27b8.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell80: { position: `relative`, flexGrow: 1, flexBasis: 42 },
  group27Outer: { position: `relative`, flexBasis: 41 },
  group27Body: shareStyles.fit,
  graph28Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/2334056cc49dc80cfab4c079636c0ff1.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell82: { position: `relative`, flexGrow: 1, flexBasis: 43 },
  group29Outer: { position: `relative`, flexBasis: 39 },
  group29Body: shareStyles.fit,
  graph30Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/b778a55d1f5a1d3ffcfd7bb03fe05ed9.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell84: { position: `relative`, flexGrow: 1, flexBasis: 44 },
  group25Outer: { position: `relative`, flexBasis: 39 },
  group25Body: shareStyles.fit,
  graph26Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/bb5712ad262ff4d3caa448635dfedf16.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell92: { position: `relative`, flexShrink: 0, minHeight: 25 },
  group21Outer: { position: `relative`, flexBasis: 5 },
  group21Body: shareStyles.fit,
  box22Body: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(232,232,232)`,
    borderRadius: `100px 100px 100px 100px`
  },
  flexCell94: { position: `relative`, flexShrink: 0, minHeight: 9 },
  group63Body: shareStyles.fit,
  group64Body: shareStyles.fit,
  box65Body: { width: `100%`, height: `100%`, borderRadius: `0px 0px 0px 0px` },
  BackgroundGroupFlexGroup100Body: shareStyles.fitFlex,
  flexCell101: { position: `relative`, flexShrink: 0, minWidth: 21 },
  group72Outer: { position: `relative`, flexBasis: 54 },
  group72Body: shareStyles.fit,
  text73Body: shareStyles.fitFlexCenter,
  text73Text: {
    color: `rgb(255,255,255)`,
    textAlign: `center`,
    lineHeight: `16.8px`,
    fontSize: 14,
    fontWeight: 600,
    fontStyle: `normal`,
    fontFamily: `"SFProText", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  text73Span0: {
    color: `#ffffffff`,
    lineHeight: `16.8px`,
    fontSize: 14,
    fontWeight: 600,
    fontStyle: `normal`,
    fontFamily: `"SFProText", Helvetica, Arial, serif`
  },
  text73Span1: {
    color: `#ffffffff`,
    lineHeight: `16.8px`,
    fontSize: 14,
    fontWeight: 600,
    fontStyle: `normal`,
    fontFamily: `"SFProText", Helvetica, Arial, serif`
  },
  flexCell103: {
    position: `relative`,
    flexGrow: 1,
    flexBasis: 218.66666666666612
  },
  graph71Outer: { position: `relative`, flexBasis: 17 },
  graph71Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/9f1b728a7eb09eedac90ff610897a6fa.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell105: {
    position: `relative`,
    flexShrink: 0,
    minWidth: 5.027060830983771
  },
  graph70Outer: { position: `relative`, flexBasis: 15.272376264937918 },
  graph70Body: {
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/42d954f8fa036185c0c72e2cf6e7ee73.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell107: {
    position: `relative`,
    flexShrink: 0,
    minWidth: 5.033896237412193
  },
  flexGroup111Outer: { position: `relative`, flexBasis: 25 },
  flexGroup111Body: shareStyles.fitFlex,
  CoverGroupGroup96Outer: { position: `relative`, flexBasis: 22 },
  CoverGroupGroup96Body: shareStyles.fit,
  box67Body: {
    width: `100%`,
    height: `100%`,
    opacity: 0.35,
    borderRadius: `2.666666746139526px 2.666666746139526px 2.666666746139526px 2.666666746139526px`,
    borderStyle: `solid`,
    borderColor: `rgb(255,255,255)`,
    borderWidth: 1
  },
  box69Body: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: `1.333333373069763px 1.333333373069763px 1.333333373069763px 1.333333373069763px`
  },
  flexCell113: { position: `relative`, flexShrink: 0, minWidth: 1 },
  graph68Outer: { position: `relative`, flexBasis: 2 },
  graph68Body: {
    width: `100%`,
    height: `100%`,
    opacity: 0.4,
    backgroundImage: `url(${require('assets/cb9d0b295292627404c01d733a644257.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexCell109: { position: `relative`, flexShrink: 0, minWidth: 14 }
});

const layouts = {
  graph31: {
    className: css(styles.graph31Body),
    isOffscreen: true,
    absolute: true,
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['0px', '211px', '569fr']
  },
  text62: {
    className: css(styles.text62Body),
    horizontal: ['31px', 'minmax(61px,max-content)', '283fr'],
    vertical: ['1fr', 'minmax(24px,max-content)', '1fr'],
    outerClassName: css(styles.text62Outer)
  },
  text61: {
    className: css(styles.text61Body),
    horizontal: ['31px', 'minmax(149px,max-content)', '195fr'],
    vertical: ['1fr', 'minmax(19px,max-content)', '1fr'],
    outerClassName: css(styles.text61Outer)
  },
  graph50: {
    className: css(styles.graph50Body),
    absolute: true,
    horizontal: ['35fr', 'minmax(0px, 257fr)', '23fr'],
    vertical: ['66px', 'minmax(134px,134fr)', '0fr']
  },
  graph51: {
    className: css(styles.graph51Body),
    absolute: true,
    horizontal: ['minmax(0px, 315fr)'],
    vertical: ['minmax(192px,192fr)']
  },
  graph53: {
    className: css(styles.graph53Body),
    horizontal: ['minmax(0px, 315fr)'],
    vertical: ['minmax(192px,192fr)']
  },
  group52: {
    className: css(styles.group52Body),
    absolute: true,
    horizontal: ['minmax(0px, 315fr)'],
    vertical: ['minmax(192px,192fr)']
  },
  text56: {
    className: css(styles.text56Body),
    horizontal: ['0px', 'minmax(auto,max-content)', '30fr'],
    vertical: ['1fr', 'minmax(29px,max-content)', '1fr'],
    outerClassName: css(styles.text56Outer)
  },
  graph60: {
    className: css(styles.graph60Body),
    horizontal: ['21px'],
    vertical: ['20px', '21px', '2fr'],
    outerClassName: css(styles.graph60Outer)
  },
  text57: {
    className: css(styles.text57Body),
    horizontal: ['0px', 'minmax(89px,max-content)', '1fr'],
    vertical: ['23px', 'minmax(19px,max-content)', '0px'],
    outerClassName: css(styles.text57Outer)
  },
  graph59: {
    className: css(styles.graph59Body),
    horizontal: ['0fr', '40px', '1fr'],
    vertical: ['0px', '40px', '1fr']
  },
  group58: {
    className: css(styles.group58Body),
    horizontal: ['minmax(0px, 41fr)'],
    vertical: ['0px', 'minmax(41px,41fr)', '1fr'],
    outerClassName: css(styles.group58Outer)
  },
  flexGroup238: {
    className: css(styles.flexGroup238Body),
    horizontal: ['minmax(0px, 275fr)'],
    vertical: ['minmax(42px,42fr)'],
    outerClassName: css(styles.flexGroup238Outer)
  },
  flexGroup219: {
    className: css(styles.flexGroup219Body),
    horizontal: ['23fr', 'minmax(0px, 275fr)', '17fr'],
    vertical: ['31px', 'minmax(145px,145fr)', '16px']
  },
  BackgroundGroupGroup122: {
    className: css(styles.BackgroundGroupGroup122Body),
    absolute: true,
    horizontal: ['minmax(0px, 315fr)'],
    vertical: ['minmax(192px,192fr)']
  },
  CoverGroupGroup118: {
    className: css(styles.CoverGroupGroup118Body),
    absolute: true,
    horizontal: ['minmax(0px, 315fr)'],
    vertical: ['0px', 'minmax(192px,192fr)', '8fr']
  },
  group138: {
    className: css(styles.group138Body),
    horizontal: ['minmax(0px, 315fr)'],
    vertical: ['minmax(200px,200fr)'],
    outerClassName: css(styles.group138Outer)
  },
  graph55: {
    className: css(styles.graph55Body),
    isOffscreen: true,
    horizontal: ['minmax(0px, 20fr)'],
    vertical: ['minmax(192px,192fr)']
  },
  group54: {
    className: css(styles.group54Body),
    horizontal: ['minmax(0px, 20fr)'],
    vertical: ['0px', 'minmax(192px,192fr)', '8fr'],
    outerClassName: css(styles.group54Outer)
  },
  flexGroup135: {
    className: css(styles.flexGroup135Body),
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['minmax(200px,200fr)'],
    outerClassName: css(styles.flexGroup135Outer)
  },
  text33: {
    className: css(styles.text33Body),
    horizontal: ['31px', 'minmax(71px,max-content)', '273fr'],
    vertical: ['1fr', 'minmax(24px,max-content)', '1fr'],
    outerClassName: css(styles.text33Outer)
  },
  text34: {
    className: css(styles.text34Body),
    horizontal: ['0px', 'minmax(155px,max-content)', '1fr'],
    vertical: ['1fr', 'minmax(19px,max-content)', '1fr'],
    outerClassName: css(styles.text34Outer)
  },
  text35: {
    className: css(styles.text35Body),
    horizontal: ['0px', 'minmax(54px,max-content)', '1fr'],
    vertical: ['1fr', 'minmax(19px,max-content)', '1fr'],
    outerClassName: css(styles.text35Outer)
  },
  flexGroup157: {
    className: css(styles.flexGroup157Body),
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['minmax(19px,19fr)'],
    outerClassName: css(styles.flexGroup157Outer)
  },
  graph38: {
    className: css(styles.graph38Body),
    horizontal: ['1px', 'minmax(0px, 90fr)', '2px'],
    vertical: ['minmax(0px, 90fr)'],
    outerClassName: css(styles.graph38Outer)
  },
  text39: {
    className: css(styles.text39Body),
    horizontal: ['minmax(0px, 92fr)'],
    vertical: ['1fr', 'minmax(34px,max-content)', '1fr'],
    outerClassName: css(styles.text39Outer)
  },
  text40: {
    className: css(styles.text40Body),
    horizontal: ['9fr', 'minmax(0px, 74fr)', '9fr'],
    vertical: ['1fr', 'minmax(26px,max-content)', '1fr'],
    outerClassName: css(styles.text40Outer)
  },
  flexGroup171: {
    className: css(styles.flexGroup171Body),
    horizontal: ['minmax(0px, 92fr)'],
    vertical: ['minmax(160px,160fr)'],
    outerClassName: css(styles.flexGroup171Outer)
  },
  graph46: {
    className: css(styles.graph46Body),
    horizontal: ['2px', 'minmax(0px, 90fr)', '2px'],
    vertical: ['minmax(0px, 90fr)'],
    outerClassName: css(styles.graph46Outer)
  },
  text47: {
    className: css(styles.text47Body),
    horizontal: ['minmax(0px, 94fr)'],
    vertical: ['1fr', 'minmax(34px,max-content)', '1fr'],
    outerClassName: css(styles.text47Outer)
  },
  text48: {
    className: css(styles.text48Body),
    horizontal: ['11fr', 'minmax(0px, 73fr)', '11fr'],
    vertical: ['1fr', 'minmax(26px,max-content)', '1fr'],
    outerClassName: css(styles.text48Outer)
  },
  flexGroup178: {
    className: css(styles.flexGroup178Body),
    horizontal: ['minmax(0px, 94fr)'],
    vertical: ['0px', 'minmax(160px,135fr)', '25px'],
    outerClassName: css(styles.flexGroup178Outer)
  },
  graph42: {
    className: css(styles.graph42Body),
    horizontal: ['minmax(0px, 90fr)'],
    vertical: ['minmax(0px, 90fr)'],
    outerClassName: css(styles.graph42Outer)
  },
  text43: {
    className: css(styles.text43Body),
    horizontal: ['9fr', 'minmax(0px, 73fr)', '8fr'],
    vertical: ['1fr', 'minmax(34px,max-content)', '1fr'],
    outerClassName: css(styles.text43Outer)
  },
  text44: {
    className: css(styles.text44Body),
    horizontal: ['20fr', 'minmax(0px, 52fr)', '18fr'],
    vertical: ['1fr', 'minmax(26px,max-content)', '1fr'],
    outerClassName: css(styles.text44Outer)
  },
  flexGroup185: {
    className: css(styles.flexGroup185Body),
    horizontal: ['0fr', 'minmax(0px, 90fr)', '1fr'],
    vertical: ['0px', 'minmax(160px,135fr)', '25px'],
    outerClassName: css(styles.flexGroup185Outer)
  },
  flexGroup164: {
    className: css(styles.flexGroup164Body),
    horizontal: ['24px', 'minmax(0px, 332fr)', '20px'],
    vertical: ['minmax(160px,160fr)'],
    outerClassName: css(styles.flexGroup164Outer)
  },
  flexGroup143: {
    className: css(styles.flexGroup143Body),
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['minmax(224px,224fr)'],
    outerClassName: css(styles.flexGroup143Outer)
  },
  text18: {
    className: css(styles.text18Body),
    horizontal: ['31px', 'minmax(153px,max-content)', '191fr'],
    vertical: ['1fr', 'minmax(24px,max-content)', '1fr'],
    outerClassName: css(styles.text18Outer)
  },
  box4: {
    className: css(styles.box4Body),
    absolute: true,
    horizontal: ['minmax(0px, 327fr)'],
    vertical: ['minmax(150px,150fr)']
  },
  graph11: {
    className: css(styles.graph11Body),
    horizontal: ['44px'],
    vertical: ['44px']
  },
  group10: {
    className: css(styles.group10Body),
    horizontal: ['minmax(0px, 44fr)'],
    vertical: ['0px', 'minmax(44px,44fr)', '3fr'],
    outerClassName: css(styles.group10Outer)
  },
  text7: {
    className: css(styles.text7Body),
    horizontal: ['0px', 'minmax(89px,max-content)', '1fr'],
    vertical: ['1fr', 'minmax(21px,max-content)', '1fr'],
    outerClassName: css(styles.text7Outer)
  },
  text8: {
    className: css(styles.text8Body),
    horizontal: ['0px', 'minmax(66px,max-content)', '23fr'],
    vertical: ['1fr', 'minmax(19px,max-content)', '1fr'],
    outerClassName: css(styles.text8Outer)
  },
  flexGroup226: {
    className: css(styles.flexGroup226Body),
    horizontal: ['minmax(0px, 89fr)'],
    vertical: ['minmax(47px,47fr)'],
    outerClassName: css(styles.flexGroup226Outer)
  },
  text9: {
    className: css(styles.text9Body),
    horizontal: ['1fr', 'minmax(19px,max-content)', '0px'],
    vertical: ['9px', 'minmax(15px,max-content)', '23fr'],
    outerClassName: css(styles.text9Outer)
  },
  flexGroup201: {
    className: css(styles.flexGroup201Body),
    horizontal: ['17px', 'minmax(0px, 295fr)', '15px'],
    vertical: ['minmax(47px,47fr)'],
    outerClassName: css(styles.flexGroup201Outer)
  },
  box5: {
    className: css(styles.box5Body),
    horizontal: ['15fr', 'minmax(0px, 297fr)', '15fr'],
    vertical: ['minmax(1px,1fr)'],
    outerClassName: css(styles.box5Outer)
  },
  graph17: {
    className: css(styles.graph17Body),
    horizontal: ['44px'],
    vertical: ['44px']
  },
  group16: {
    className: css(styles.group16Body),
    horizontal: ['minmax(0px, 44fr)'],
    vertical: ['0px', 'minmax(44px,44fr)', '3fr'],
    outerClassName: css(styles.group16Outer)
  },
  text13: {
    className: css(styles.text13Body),
    horizontal: ['0px', 'minmax(133px,max-content)', '1fr'],
    vertical: ['1fr', 'minmax(21px,max-content)', '1fr'],
    outerClassName: css(styles.text13Outer)
  },
  text14: {
    className: css(styles.text14Body),
    horizontal: ['0px', 'minmax(62px,max-content)', '71fr'],
    vertical: ['1fr', 'minmax(19px,max-content)', '1fr'],
    outerClassName: css(styles.text14Outer)
  },
  flexGroup232: {
    className: css(styles.flexGroup232Body),
    horizontal: ['minmax(0px, 133fr)'],
    vertical: ['minmax(47px,47fr)'],
    outerClassName: css(styles.flexGroup232Outer)
  },
  text15: {
    className: css(styles.text15Body),
    horizontal: ['1fr', 'minmax(32px,max-content)', '0px'],
    vertical: ['9px', 'minmax(15px,max-content)', '23fr'],
    outerClassName: css(styles.text15Outer)
  },
  flexGroup210: {
    className: css(styles.flexGroup210Body),
    horizontal: ['17px', 'minmax(0px, 295fr)', '15px'],
    vertical: ['minmax(47px,47fr)'],
    outerClassName: css(styles.flexGroup210Outer)
  },
  BackgroundGroupFlexGroup192: {
    className: css(styles.BackgroundGroupFlexGroup192Body),
    absolute: true,
    horizontal: ['minmax(0px, 327fr)'],
    vertical: ['minmax(150px,150fr)']
  },
  group3: {
    className: css(styles.group3Body),
    horizontal: ['24px', 'minmax(0px, 327fr)', '24px'],
    vertical: ['minmax(150px,150fr)'],
    outerClassName: css(styles.group3Outer)
  },
  flexGroup152: {
    className: css(styles.flexGroup152Body),
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['minmax(189px,189fr)'],
    outerClassName: css(styles.flexGroup152Outer)
  },
  flexGroup124: {
    className: css(styles.flexGroup124Body),
    absolute: true,
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['50px', 'minmax(730px,730fr)', '0px']
  },
  BodyGroup75: {
    className: css(styles.BodyGroup75Body),
    absolute: true,
    overflow: 'scroll',
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['0px', 'minmax(780px,780fr)', '32fr']
  },
  box20: {
    className: css(styles.box20Body),
    absolute: true,
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['minmax(82px,82fr)']
  },
  graph24: {
    className: css(styles.graph24Body),
    horizontal: ['10fr', '19px', '10fr'],
    vertical: ['10px', '20px', '10fr']
  },
  group23: {
    className: css(styles.group23Body),
    horizontal: ['minmax(0px, 40fr)'],
    vertical: ['1px', 'minmax(40px,40fr)', '0fr'],
    outerClassName: css(styles.group23Outer)
  },
  graph28: {
    className: css(styles.graph28Body),
    horizontal: ['10fr', '20px', '11fr'],
    vertical: ['10px', '20px', '10fr']
  },
  group27: {
    className: css(styles.group27Body),
    horizontal: ['minmax(0px, 41fr)'],
    vertical: ['1px', 'minmax(40px,40fr)', '0fr'],
    outerClassName: css(styles.group27Outer)
  },
  graph30: {
    className: css(styles.graph30Body),
    horizontal: ['11fr', '18px', '10fr'],
    vertical: ['10px', '17px', '10fr']
  },
  group29: {
    className: css(styles.group29Body),
    horizontal: ['minmax(0px, 39fr)'],
    vertical: ['2px', 'minmax(37px,37fr)', '2fr'],
    outerClassName: css(styles.group29Outer)
  },
  graph26: {
    className: css(styles.graph26Body),
    horizontal: ['10fr', '19px', '10fr'],
    vertical: ['10px', '21px', '10fr']
  },
  group25: {
    className: css(styles.group25Body),
    horizontal: ['minmax(0px, 39fr)'],
    vertical: ['minmax(41px,41fr)'],
    outerClassName: css(styles.group25Outer)
  },
  flexGroup78: {
    className: css(styles.flexGroup78Body),
    horizontal: ['43px', 'minmax(0px, 288fr)', '44px'],
    vertical: ['minmax(41px,41fr)'],
    outerClassName: css(styles.flexGroup78Outer)
  },
  box22: {
    className: css(styles.box22Body),
    horizontal: ['minmax(0px, 134fr)'],
    vertical: ['minmax(5px,5fr)']
  },
  group21: {
    className: css(styles.group21Body),
    horizontal: ['121fr', '134px', '120fr'],
    vertical: ['minmax(5px,5fr)'],
    outerClassName: css(styles.group21Outer)
  },
  BackgroundGroupFlexGroup89: {
    className: css(styles.BackgroundGroupFlexGroup89Body),
    absolute: true,
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['minmax(82px,82fr)']
  },
  group19: {
    className: css(styles.group19Body),
    absolute: true,
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['730fr', 'minmax(82px,82fr)', '0px']
  },
  box65: {
    className: css(styles.box65Body),
    absolute: true,
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['minmax(44px,44fr)']
  },
  text73: {
    className: css(styles.text73Body),
    horizontal: ['1fr', '54px', '1fr'],
    vertical: ['1fr', 'minmax(17px,max-content)', '1fr']
  },
  group72: {
    className: css(styles.group72Body),
    horizontal: ['minmax(0px, 54fr)'],
    vertical: ['15px', '18px', '11fr'],
    outerClassName: css(styles.group72Outer)
  },
  graph71: {
    className: css(styles.graph71Body),
    horizontal: ['17px'],
    vertical: ['18px', '11px', '16fr'],
    outerClassName: css(styles.graph71Outer)
  },
  graph70: {
    className: css(styles.graph70Body),
    horizontal: ['15px'],
    vertical: ['17px', '11px', '16fr'],
    outerClassName: css(styles.graph70Outer)
  },
  box67: {
    className: css(styles.box67Body),
    absolute: true,
    horizontal: ['minmax(0px, 22fr)'],
    vertical: ['minmax(11px,11fr)']
  },
  box69: {
    className: css(styles.box69Body),
    absolute: true,
    horizontal: ['2fr', 'minmax(0px, 18fr)', '2fr'],
    vertical: ['2px', '7px', '2fr']
  },
  CoverGroupGroup96: {
    className: css(styles.CoverGroupGroup96Body),
    horizontal: ['minmax(0px, 22fr)'],
    vertical: ['minmax(11px,11fr)'],
    outerClassName: css(styles.CoverGroupGroup96Outer)
  },
  graph68: {
    className: css(styles.graph68Body),
    horizontal: ['0fr', '1px', '1fr'],
    vertical: ['4px', '4px', '4fr'],
    outerClassName: css(styles.graph68Outer)
  },
  flexGroup111: {
    className: css(styles.flexGroup111Body),
    horizontal: ['minmax(0px, 25fr)'],
    vertical: ['17px', '12px', '15fr'],
    outerClassName: css(styles.flexGroup111Outer)
  },
  BackgroundGroupFlexGroup100: {
    className: css(styles.BackgroundGroupFlexGroup100Body),
    absolute: true,
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['minmax(44px,44fr)']
  },
  group64: {
    className: css(styles.group64Body),
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['minmax(44px,44fr)']
  },
  group63: {
    className: css(styles.group63Body),
    absolute: true,
    horizontal: ['minmax(0px, 375fr)'],
    vertical: ['0px', 'minmax(44px,44fr)', '768fr']
  },
  group1: {
    className: css(styles.group1Body),
    absolute: true,
    horizontal: ['1fr'],
    vertical: ['1fr']
  }
};
