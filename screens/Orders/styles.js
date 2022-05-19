import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
  },
  loadingIndicator: {
    marginTop: 300,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    height: 70,
    marginBottom: 5,
    borderColor: "rgba(255,255,255,0)",
    borderTopColor: "rgba(0, 0, 0, 0.2)",
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
  },
  rowTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
    marginBottom: 5,
    borderColor: "rgba(255,255,255,0)",
    borderTopColor: "rgba(0, 0, 0, 0.2)",
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
  },
  orderTimeAgo: {
    justifyContent: 'center',
    marginLeft: 40
  },
  rectangle: {
    height: '100%',
    width: 5,
    backgroundColor: '#E8546D'
  },
  timeAgoText: {
    color: '#393B40',
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 50,
  },
  modalContent: {
    height: '90%',
    borderRadius: 4,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  itemRowModal: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    height: 70,
    marginBottom: 5,
    borderColor: "rgba(255,255,255,0)",
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
    width: 4,
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
    marginLeft: width / 8,
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
    right: 80
  },
  priceText: {
    color: '#393B40',
    fontWeight: 'bold'
  },
  totalPrice: {
    position: 'absolute',
    right: 80
  },
  totalText: {
    color: '#393B40',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  noRecentFound: {
    width: 400,
    height: 420,
    marginBottom: 200
  }
});

export default styles;