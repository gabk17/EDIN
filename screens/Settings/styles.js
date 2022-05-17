import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  androidHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 0,
    paddingTop: StatusBar.currentHeight + 40,
  },
  edinLogo: {
    width: width,
    alignItems: 'center'
  },
  iosHeader: {
    flexDirection: 'row',
    marginRight: 0,
    paddingTop: StatusBar.currentHeight + 60,
  },
  sidebarIcon: {
    height: 40,
    marginLeft: width / 35,
    marginRight: width / 3.2
  },
  settingsHeader: {
    marginTop: 30,
    alignItems: 'center',
  },
  settingsContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 60,
    marginTop: 10,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  settingsText: {
    marginLeft: 50,
    fontSize: 16,
  },
  logo: {
    position: 'absolute',
    left: 20,
    top: 20
  },
  settingsOptionContainer: {
    marginTop: 20,
    marginBottom: '100%',
    alignItems: 'center',
  },
  switch: {
    position: 'absolute',
    right: 20,
  },
  forwardIcon: {
    position: 'absolute',
    right: 20,
  }
});

export default styles;