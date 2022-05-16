import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  androidHeader: {
    flex: 1.2,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  iosHeader: {
    padding: 40,
    alignItems: 'center',
  },
  androidLoginHeader: {
    flex: 0.7,
    alignItems: 'center',
  },
  iosLoginHeader: {
    flex: 1,
    alignItems: 'center',
  },

  loginFooter: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    width: 220,
    borderRadius: 10,
    padding: 5,
  },
  extension: {
    width: 60,
    height: 40,
    marginRight: 10,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  extensionText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1
  },
  continueButton: {
    alignItems: 'center',
    padding: 10,
    width: 290,
    backgroundColor: '#E8546D',
    borderRadius: 10,
  },
  continueButtonText: {
    color: '#fff',
  },
  orButtonsContainer: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 20,
  },
  googleIcon: {
    marginRight: 20,
  },
  recaptcha: {
    width: width,
    height: 50,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1
  }

});

export default styles;