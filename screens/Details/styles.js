import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 420,
    height: 500,
  },
  background: {
    backgroundColor: "#000",
    opacity: 0.3
  },
  infoContainer: {
    backgroundColor: "#fff",
    // top: height * 0.5,
    padding: 20,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  rating: {
    fontWeight: 'bold',
    color: '#393B40',
    fontSize: 18,
  },
  separator: {
    width: width * 0.9,
    height: 5,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  ratingContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  backButton: {
    marginTop: 14
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  callButton: {
    alignItems: 'center',
    padding: 10,
    width: 290,
    backgroundColor: '#E8546D',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
  bannerContainer: color => ({
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: color
  }),
  banner: scrollA => ({
    height: 400,
    width: '100%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-400, 0, 400, 400 + 1],
          outputRange: [-400 / 2, 0, 400 * 0.75, 400 * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-400, 0, 400, 400 + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
  text: {
    margin: 24,
    fontSize: 16,
  },
});

export default styles;