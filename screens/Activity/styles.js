import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  header: {
    textAlign: 'left',
    fontSize: 18,
    marginTop: 30,
  },
  activityHeader: {
    marginTop: 30,
  },
  loadingIndicator: {
    marginTop: 70
  }
});

export default styles;