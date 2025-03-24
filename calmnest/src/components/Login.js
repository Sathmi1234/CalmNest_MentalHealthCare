import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>

      <TextInput style={styles.input} placeholder="Nick Name" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
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
  forgotPassword: { 
    color: "blue", 
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

export default LoginScreen;
