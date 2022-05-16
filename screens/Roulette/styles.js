import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight + 40,
  },
  wheelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 40
  },
  wheel: {
    width: 400,
    height: 400,
    backgroundColor: '#393B40',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheelMarker: {
    zIndex: 2,
    position: 'absolute',
    alignItems: 'center',
    top: 10
  },
  edinLogo: {
    alignItems: 'center'
  },
  rouletteHeader: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 30,
  },
  spinButton: {
    alignItems: 'center',
    padding: 10,
    width: 290,
    backgroundColor: '#E8546D',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default styles;