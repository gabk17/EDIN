import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  edinLogo: {
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight + 40,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  topContainer: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
    backgroundColor: '#fff'
  },
  bottomContainer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff'
  },
  scannerHeader: {
    marginTop: 30,
    marginBottom: '100%',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80
  },
  qrText: {
    color: '#393B40',
    fontSize: 16,
  },
});

export default styles;