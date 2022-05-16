import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  edinLogo: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 60,
    alignItems: 'center',
  },
  choiceContainer: {
    width: width,
    height: height / 2.6,
    backgroundColor: '#E8546D',
    position: 'absolute',
    bottom: 0,
    borderRadius: 16
  },
  choiceImage: {
    width: width,
    height: height / 2.4,
    position: 'absolute',
    bottom: height / 2.8,
  },
  titleContainer: {
    marginTop: 40,
    marginLeft: 40,
  },
  LogInButtonContainer: {
    alignItems: 'center',
  },
  LogInButton: {
    alignItems: 'center',
    padding: 15,
    width: 290,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  LogInButtonText: {
    color: '#E8546D',
    fontWeight: 'bold',
  },
  signUpButtonContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  signUpButton: {
    alignItems: 'center',
    padding: 15,
    width: 290,
    backgroundColor: '#E8546D',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff'
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;