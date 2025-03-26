import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/robo.png")} style={styles.image} />
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput style={styles.input} placeholder="Nick Name" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Already registered? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    padding: 20 
},
image: {
  width: 100,  // Adjust width (make smaller)
  height: 100, // Adjust height (make smaller)
  marginBottom: 20, // Space below the image
},
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 20 
},
  input: { 
    width: "100%", 
    padding: 15, 
    borderWidth: 1, 
    borderRadius: 8, 
    marginBottom: 10 
},
  button: { 
    backgroundColor: "#246BFD", 
    padding: 15, 
    borderRadius: 8, 
    width: "100%", 
    alignItems: "center" 
},
  buttonText: { 
    color: "white", 
    fontSize: 18 
},
  link: { 
    marginTop: 10, 
    color: "blue" 
},
});

export default SignupScreen;
