import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function welcome() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/warrior.jpeg")}
      style={styles.background}
    >
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.overlay}
      >
        <View style={styles.textWrap}>
          <Text style={styles.title}> Welcome To</Text>
          <Text style={styles.appName}>Daily Armour of God </Text>
          <Text style={styles.subtitle}>Devotional App</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(auth)/signup")}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40%",
  },
  textWrap:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "poppins",
    fontWeight: "400",
    textTransform: 'uppercase',
    flexWrap: "nowrap",
    color: "#fff",
    letterSpacing: 1
    
  },
  appName: {
    fontSize: 28,
    fontFamily: "poppins",
    fontWeight: "bold",
    color: "#f5f5f5",
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: "poppins",
    fontSize: 22,
    color: "#ddd",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff6600",
    paddingVertical: 16,
    paddingHorizontal: 110,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
