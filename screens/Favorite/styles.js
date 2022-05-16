import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
  },
  noFavorites: {
    width: 420,
    height: 440,
    marginTop: -200
  },
  pickerContainer: {
    width: width - 180,
    borderWidth: 2,
    borderColor: 'rgba(232, 84, 109, 0.8)',
    borderRadius: 16,
  }
});

export default styles;