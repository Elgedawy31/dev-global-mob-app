import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginAction, successLogin } from "../(redux)/AuthSlice";
import { router } from "expo-router";

const LoginSchema = Yup.object().shape({
  userName: Yup.string().required("UserName Is Required"),
  fullName: Yup.string().required("FullName Is Required"),
  email: Yup.string().email("Invalid email").required("Email Is Required"),
  password: Yup.string()
    .min(6, "Password too short!")
    .required("Password Is Required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

export default function SignIn() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="dark" backgroundColor={Colors.light.background} />
      <View style={styles.innerContainer}>
        <ScrollView contentContainerStyle={{paddingBottom:16 }} showsVerticalScrollIndicator={false}>
          <Image
            source={require("../../assets/images/logo.png")} // Replace with the actual path to your image
            style={styles.image}
            resizeMode="contain"
          />
          <Formik
            initialValues={{
              email: "",
              password: "",
              userName: "",
              fullName: "",
              confirmPassword: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              dispatch(successLogin());
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                {/* <Text style={styles.loginText}>Please Register</Text> */}
                <TextInput
                  style={styles.input}
                  placeholder="fullName"
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                  keyboardType="default"
                />
                {errors.fullName && touched.fullName ? (
                  <Text style={styles.error}>{errors.fullName}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="userName"
                  onChangeText={handleChange("userName")}
                  onBlur={handleBlur("userName")}
                  value={values.userName}
                  keyboardType="default"
                />
                {errors.userName && touched.userName ? (
                  <Text style={styles.error}>{errors.userName}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="confirmPassword"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <Text style={styles.error}>{errors.confirmPassword}</Text>
                ) : null}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.push("/(auth)/sign-in")}
                >
                  <Text style={styles.registerText}>
                    Do You have an account? Login here
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
    paddingHorizontal: 16,
  },
  innerContainer: {
    // marginTop: Platform.OS === 'android' ? 25 : 0,
    flex: 1,
    display:'flex' ,
    flexDirection:'row',
    alignItems:'center',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    alignSelf: "center",
    marginBottom: 24,
  },
  loginText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: Colors.light.text,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  registerText: {
    color: Colors.light.tint,
    textAlign: "center",
    marginTop: 10,
  },
});
