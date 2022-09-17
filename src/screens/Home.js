import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Homepage = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/background.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.header}>
            <Text style={styles.heading}>Dabo Dabo</Text>
            <Text style={styles.heading2}>SPIN and WIN </Text>
          </View>
          <View style={styles.inputs}>
            <View style={styles.input1}>
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor="#F5F5F5"
                style={{ color: "#F5F5F5", fontSize: 20 }}
              />
            </View>
            <View style={styles.input2}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#F5F5F5"
                style={{ color: "#F5F5F5", fontSize: 20 }}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => alert("login")}
                style={styles.loginBtn}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    justifyContent: "center",
    // marginTop: 30,
    // paddingBottom: 90,
    alignItems: "center",
  },
  heading: {
    fontSize: 50,
    borderRadius: 7,

    fontWeight: "700",
    fontStyle: "italic",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  heading2: {
    color: "white",
    fontSize: 30,
  },
  inputs: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 80,
  },
  loginBtn: {
    height: 48,
    backgroundColor: "#134389",
    width: 300,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    fontSize: 30,
    color: "white",
    fontWeight: "600",
  },
  input1: {
    height: 48,
    backgroundColor: "#134389",
    width: 300,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input2: {
    marginTop: 20,
    justifyContent: "center",
    height: 48,
    alignItems: "center",
    backgroundColor: "#134389",
    width: 300,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Homepage;
