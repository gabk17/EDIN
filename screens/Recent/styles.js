import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
  },
  loadingIndicator: {
    marginTop: 300,
  },
  recentContainer: {
    marginBottom: 100
  },
  recentTitle: {
    margin: 20,
  },
  recentTitleText: {
    fontSize: width / 22.5,
    color: '#393B40',
    fontWeight: 'bold'
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    height: 70,
    marginBottom: 5,
    borderTopColor: "rgba(0, 0, 0, 0.2)",
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
  },
  itemQuantity: {
    justifyContent: 'center',
    marginLeft: 40
  },
  rectangle: {
    height: '100%',
    width: 5,
    backgroundColor: '#E85486'
  },
  quantityText: {
    color: '#393B40',
    fontWeight: 'bold'
  },
  itemTitle: {
    marginLeft: width / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#E85486',
    fontWeight: 'bold'
  },
  totalContainer: {
    marginLeft: width / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalTitle: {
    color: '#E85486',
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemPrice: {
    position: 'absolute',
    right: 50
  },
  priceText: {
    color: '#393B40',
    fontWeight: 'bold'
  },
  totalPrice: {
    position: 'absolute',
    right: 50
  },
  totalText: {
    color: '#393B40',
    fontSize: 18,
    fontWeight: 'bold'
  },
  noRecentFound: {
    width: 400,
    height: 420,
    marginBottom: 200
  }
});

export default styles;