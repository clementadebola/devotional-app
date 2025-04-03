import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

export default function signup() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.purpleSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Create your Account</Text>
      </View>

      <View style={styles.whiteSection}>
        <Text style={styles.label}>Your Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" placeholderTextColor="gray" />
        
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry placeholderTextColor="gray" />


        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginCont}>
          <Text style={styles.normalText}>already have an account?
          <Text style={styles.login} onPress={()=> router.push('/(auth)/login')}> {''} Login</Text>
          </Text>
          
        </View>

        <Text style={styles.orText}>Or sign up with</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  purpleSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  whiteSection: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 35,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 16,
    backgroundColor: "#ff6600",
    padding: 8,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "black",
  },
  signupButton: {
    backgroundColor: "#ff6600",
    padding: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 14,
    marginBottom: 15,
  },
  loginCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  normalText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'poppins',
    gap: 10,
  },
  login: {
    fontSize: 16,
    color: "blue",
    marginBottom: 20,
    marginLeft: 8

  },
  socialButtonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  socialButton: {
    backgroundColor: "#4285F4",
    padding: 10,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 50,
  },
});