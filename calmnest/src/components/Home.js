import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Daniel</Text>
      </View>
      
      {/* AI Chat Section */}
      <View style={styles.chatContainer}>
        <Text style={styles.chatTitle}>AI Chat</Text>
        <View style={styles.chatBox}>
          <Text style={styles.chatText}>Hi, Daniel!</Text>
          <Text style={styles.chatText}>Nice to meet you, how can I help you?</Text>
        </View>
      </View>
      
      {/* Mood Tracker Section */}
      <View style={styles.moodTracker}>
        <Text style={styles.moodTitle}>Mood Tracker</Text>
        <TouchableOpacity style={styles.checkInButton}>
          <Text style={styles.checkInText}>Check in your mood</Text>
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
    borderRadius: 10 
},
  chatTitle: { 
    fontSize: 18, 
    fontWeight: "bold" 
},
  chatBox: { 
    marginTop: 10, 
    padding: 10, 
    backgroundColor: "#F0F0F0", 
    borderRadius: 8 
},
  chatText: { 
    fontSize: 16, 
    marginBottom: 5 
},
  moodTracker: { 
    padding: 20, 
    marginTop: 10, 
    backgroundColor: "#fff", 
    borderRadius: 10 
},
  moodTitle: { 
    fontSize: 18, 
    fontWeight: "bold" 
},
  checkInButton: { 
    marginTop: 10, 
    padding: 15, 
    backgroundColor: "#246BFD", 
    borderRadius: 8, 
    alignItems: "center" 
},
  checkInText: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "bold" 
}
});

export default HomeScreen;
