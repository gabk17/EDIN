import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const styles = StyleSheet.create({
  androidHeader: {
    paddingTop: StatusBar.currentHeight + 40,
  },
  iosHeader: {
    paddingTop: StatusBar.currentHeight + 60,
  },
  edinLogo: {
    alignItems: 'center',
  },
  scoreContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  alignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreBox: {
    width: width - width / 5.5,
    height: height - height / 1.15,
    borderRadius: 20,
    justifyContent: 'center',
  },
  userTextContainer: {
    marginLeft: 40,
  },
  username: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  totalScore: {
    color: '#fff',
    fontSize: 18,
  },
  userScoreContainer: {
    marginRight: 60
  },
  scoreText: {
    color: '#fff',
    fontSize: 40,
  },
  scoreTextSmall: {
    fontSize: 35
  },
  helloMsgContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 30,
  },
  helloText: {
    fontSize: width / 14,
    color: '#393B40'
  },
  usernameText: {
    fontSize: width / 14,
    color: '#393B40',
    fontWeight: 'bold',
  },
  optionContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  optionBoxN1: {
    width: width / 2.5,
    height: height - height / 1.15,
    margin: 5,
    borderRadius: 10,
  },
  optionBoxN2: {
    width: width / 2.5,
    height: height - height / 1.15,
    margin: 5,
    borderRadius: 10,
    borderColor: '#E85486',
    borderWidth: 5,
    backgroundColor: '#fff',
  },
  optionBoxN3: {
    width: width / 2.5,
    height: height - height / 1.15,
    margin: 5,
    borderRadius: 10,
    borderColor: '#E75455',
    borderWidth: 5,
    backgroundColor: '#fff',
  },
  align: {
    flexDirection: 'row',
  },
  forwardButton: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  optionTextContainer: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  optionTextN1: {
    color: '#fff',
    fontSize: width / 22.5,
  },
  optionTextN2: {
    color: '#E85486',
    fontSize: width / 24,
  },
  optionTextOrder: {
    color: '#E75455',
    fontSize: width / 24,
  },
  suggestionBarContainer: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 30,
  },
  suggestionOption: {
    marginLeft: 12,
    fontSize: width / 24,
  },
  selectedOption: {
    color: '#393B40',
    fontWeight: 'bold',
  },
  notSelectedOption: {
    color: '#828999',
  },
  suggestionBarContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 30,
  },
  suggestionOption: {
    marginLeft: 12,
    fontSize: width / 26,
  },
  selectedOption: {
    color: '#393B40',
    fontWeight: 'bold',
  },
  notSelectedOption: {
    color: '#828999',
  },
  loadingIndicator: {
    margin: height / 10.5
  }

});

export default styles;