import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: width,
    height: height,
  },
  alignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationContainer: {
    marginBottom: 10
  },
  locationBox: {
    width: width - width / 2.5,
    height: height - height / 1.1,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  locationTextContainer: {
    marginLeft: 40,
  },
  placeName: {
    fontWeight: 'bold',
    color: '#E75455',
    fontSize: 18,
  },
  rating: {
    fontWeight: 'bold',
    color: '#393B40',
    fontSize: 18,
  },
  locationLookupIcon: {
    marginRight: 40,
    marginTop: 10,
  },
  markerLocationContainer: {
    position: 'absolute',
    top: 20,
  },
  markerLocationText: {
    position: 'absolute',
    top: height / 4.4,
    left: width / 4,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  alignment: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alignmentMarker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  suggestionContainer: {
    margin: 6,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  suggestionBoxTop: {
    width: width - width / 2.5,
    height: height - height / 1.1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#E755',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: '#000',
    overflow: 'hidden'
  },
  suggestionBoxBottom: {
    width: width - width / 2.5,
    height: height - height / 1.1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: '#000'
  },

  suggestionLookupIcon: {
    marginRight: 40,
    marginTop: 10,
  },
});

export default styles;