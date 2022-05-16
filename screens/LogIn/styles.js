import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  edinLogo: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 40,
    alignItems: 'center',
  },
  signUpHeader: {
    marginTop: 30,
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    marginTop: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    marginLeft: 20,
  },
  logo: {
    position: 'absolute',
    right: 20,
    top: 14
  },
  buttonContainer: {
    marginTop: 30,
  },
  signUpButton: {
    alignItems: 'center',
    padding: 10,
    width: 290,
    backgroundColor: '#E8546D',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
  illustrationContainer: {
    marginTop: 50
  }
});

export default styles;