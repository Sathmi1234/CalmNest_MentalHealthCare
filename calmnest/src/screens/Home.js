import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.greeting}>Hello, Daniel</Text>
        <TouchableOpacity onPress={() => alert("Notifications clicked!")}> 
          <Icon name="notifications-outline" size={28} color="purple" />
        </TouchableOpacity>
      </View>
      
      {/* AI Chat Section */}
      <View style={styles.chatContainer}>
        <Text style={styles.chatTitle}>Ready to check your mentality today?</Text>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Let's Go!</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.chatContainer}>
        <Text style={styles.chatTitle}>Here your professional counselor is waiting for you!</Text>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Good Luck Buddy!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#E6F7FF" 
  },
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: 20, 
    backgroundColor: "#fff" 
  },
  greeting: { 
    fontSize: 24, 
    fontWeight: "bold" 
  },
  chatContainer: { 
    padding: 20, 
    backgroundColor: "#fff", 
    marginTop: 10, 
    borderRadius: 10, 
    alignItems: "center"
  },
  chatTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "center"
  },
  chatButton: {
    marginTop: 10, 
    padding: 15, 
    backgroundColor: "#246BFD", 
    borderRadius: 8, 
    alignItems: "center" 
  },
  chatButtonText: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "bold" 
  }
});

export default HomeScreen;
