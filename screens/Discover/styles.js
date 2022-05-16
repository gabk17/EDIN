import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  androidHeader: {
    paddingTop: StatusBar.currentHeight + 40,
  },
  iosHeader: {
    paddingTop: StatusBar.currentHeight + 60,
  },
  edinLogo: {
    alignItems: 'center'
  },
  sidebarIcon: {
    height: 40,
    marginLeft: width / 35,
    marginRight: width / 3.2
  },
  discoverHeader: {
    marginTop: 30,
    marginBottom: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    marginTop: 30,
    marginBottom: 10,
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
  searchIconContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchIcon: {
    height: 350,
  },
  image: {
    width: '100%',
    height: '140%',
    resizeMode: 'cover',
  },
  alignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    marginBottom: 160,
  },
  suggestionContainer: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  suggestionBoxTop: {
    width: width - width / 1.2,
    height: height - height / 1.11,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#E755',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: '#000',
    overflow: 'hidden'
  },
  suggestionBoxBottom: {
    width: width - width / 2.8,
    height: height - height / 1.11,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: '#000'
  },
  suggestionTextContainer: {
    marginLeft: 40,
  },
  placeName: {
    fontWeight: 'bold',
    color: '#E8546D',
    fontSize: 18,
  },
  rating: {
    fontWeight: 'bold',
    color: '#393B40',
    fontSize: 18,
  },
  suggestionLookupIcon: {
    marginRight: 40,
  },
});

export default styles;