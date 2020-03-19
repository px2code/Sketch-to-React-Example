import { StyleSheet } from 'aphrodite/no-important';

// version v0.10

export const config = {
  anchorScrollOffset: 100,
  enableOptimize: true,
  debug: false,
};

export const modalStyles = {
  desktop: {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },

    content: {
      overflow: 'hidden',
      margin: '0 auto',
      width: '80%',
      height: 'fit-content',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: 0,
      padding: 0
    }
  },

  tablet: {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },

    content: {
      overflow: 'hidden',
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
      margin: '0 auto',
      width: '80%',
      height: 'fit-content',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: 0,
      padding: 0
    }
  },

  mobile: {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },

    content: {
      overflow: 'hidden',
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
      margin: '0 auto',
      width: '90%',
      height: 'fit-content',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: 0,
      padding: 0
    }
  }
};

export const shareStyles = {
  fit: {
    width: '100%',
    height: '100%'
  },

  fitFlex: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },

  fitFlexCenter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },

  fitFlex2Center: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  fitFlexCenterHidden: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  fitFlex2CenterHidden: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  fitFlexColumn: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  imageContain: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  imageFill: {
    width: '100%',
    height: '100%',
    resizeMode: 'fill'
  },

  imageCover: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  flex2Center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  flexLeftCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  flexRightCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
};

export const commonStyles = StyleSheet.create({
  anchor: {
    cursor: 'pointer',
    textDecoration: 'none',

    ':visited': { textDecoration: 'underline' },

    ':hover': {
      opacity: 0.7,
      textDecoration: 'underline'
    }
  },

  clickable: {
    cursor: 'pointer',
    userSelect: 'none',
    ':hover': { opacity: 0.7 }
  },

  textInput: {
    border: 0,
    padding: 0,
    width: '100%',
    verticalAlign: 'top',
    backgroundColor: 'transparent',
    ':focus': { outline: 'none' }
  }
});
