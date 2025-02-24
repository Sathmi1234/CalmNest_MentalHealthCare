import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions, Animated } from "react-native";

const { width } = Dimensions.get("window");

const LandingScreen = () => {
  // Animation values
  const logoOpacity = new Animated.Value(0);
  const welcomeSlideUp = new Animated.Value(50);
  const textOpacity = new Animated.Value(0);

  // Run animations when component mounts
  useEffect(() => {
    // Logo fade in
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    
    // Welcome container slide up
    Animated.timing(welcomeSlideUp, {
      toValue: 0,
      duration: 800,
      delay: 500,
      useNativeDriver: true,
    }).start();
    
    // Text fade in
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 800,
      delay: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: logoOpacity }]}>
        <Image
          source={require("../../assets/calm_nest_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
      
      <Animated.View 
        style={[
          styles.welcomeContainer, 
          { 
            transform: [{ translateY: welcomeSlideUp }],
          }
        ]}
      >
        <Animated.Text style={[styles.welcomeText, styles.welcomeTitle, { opacity: textOpacity }]}>
          Welcome to
        </Animated.Text>
        <Animated.Text style={[styles.welcomeText, styles.appName, { opacity: textOpacity }]}>
          Calm Nest!
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
  },
  logo: {
    width: width * 1.5,
    height: width * 1.5,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: "#246BFD",
    width: "100%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  welcomeText: {
    color: "white",
    textAlign: "center",
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 8,
    fontFamily: "System",
  },
  appName: {
    fontSize: 36,
    fontWeight: "700",
    letterSpacing: 1,
    fontFamily: "System",
  },
});

export default LandingScreen;