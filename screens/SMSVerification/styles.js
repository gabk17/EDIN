import { StyleSheet, StatusBar } from 'react-native';

export const CELL_SIZE = 45;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#EA6E6E';
export const ACTIVE_CELL_BG_COLOR = '#F8F8F8';

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  cell: {
    marginHorizontal: 8,
    height: 50,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#EA6E6E',
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  androidSmsHeader: {
    width: '100%',
    height: '62%',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },

  iosSmsHeader: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    marginTop: 30,
  },

  resendContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resendPhrase: {
    fontSize: 11,
  },
  resendWord: {
    fontSize: 11,
    color: '#E8546D'
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  continueButton: {
    alignItems: 'center',
    padding: 10,
    width: 290,
    backgroundColor: '#E8546D',
    borderRadius: 10,
  },
  continueButtonText: {
    textAlign: 'center',
    justifyContent: 'center',

    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 40,
  },
});

export default styles;
