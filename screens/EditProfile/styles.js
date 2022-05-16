
import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
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
  editButtonContainer: {
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
    width: 290,
    backgroundColor: '#E8546D',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default styles;