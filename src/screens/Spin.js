import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SpinAndWin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <View style={styles.accountContainer}>
          <Text style={styles.texts}>Account</Text>
          <Text style={styles.texts}>KES 1000</Text>
        </View>
      </View>
      <View style={styles.spinnerContainer}>
        <View style={styles.spinner}>
          <Text>Spinner here</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.amountBtn}>
          <Text>AMOUNT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spinBtn}>
          <Text>SPIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A8EB7",
  },
  account: {
    paddingLeft: "80%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  accountContainer: {
    backgroundColor: "#134389",
    alignItems: "right",
    height: 60,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  texts: {
    color: "whitesmoke",
    fontSize: 18,
  },
  spinnerContainer: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    height: 180,
    width: 180,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 180,
    backgroundColor: "green",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
  },
  amountBtn: {
    backgroundColor: "#FF3838",
    padding: 5,
  },
  spinBtn: {
    backgroundColor: "#17E444",
    padding: 5,
  },
});

export default SpinAndWin;
