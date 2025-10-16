import React from "react";
import styles from "../styles/login/login.styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function LoginForm() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Welcome back</Text>
          <Text style={styles.cardDescription}>
            Login with your Apple or Google account
          </Text>
        </View>
        <View style={styles.cardContent}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="logo-apple" size={24} color="black" />
            <Text style={styles.buttonText}>Login with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="logo-google" size={24} color="black" />
            <Text style={styles.buttonText}>Login with Google</Text>
          </TouchableOpacity>
          <Text style={styles.separator}>Or continue with</Text>
          
          <TextInput style={styles.input} placeholder="m@example.com" keyboardType="email-address" />
          
          <View style={styles.passwordContainer}>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
          </View>
          
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Login</Text>
          </TouchableOpacity>
          
          <Text style={styles.signUpText}>
            Don&apos;t have an account? <Text style={styles.link}>Sign up</Text>
          </Text>
        </View>
      </View>
      
      <Text style={styles.termsText}>
        By clicking continue, you agree to our <Text style={styles.link}>Terms of Service</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </View>
  );
}
