import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
  ActivityIndicatorBase,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logintReducer, reset } from "../(redux)/AuthSlice";
import { router } from "expo-router";
import Toast, { ErrorToast } from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";
import { getItem } from "@/utils/AsyncStorage";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email Is Required"),
  password: Yup.string()
    .min(6, "Password too short!")
    .required("Password Is Required"),
});

export default function SignIn() {
  const { loading, error, isLogined } = useSelector((state: any) => state.auth);
  const colorScheme = useColorScheme() ?? "light";

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch(reset());
    }
  }, [error]);

  useEffect(() => {
    const func = async () => {
      const data: any = await getItem("user");
      if (data) {
        dispatch(logintReducer(data));
        router.push("/(tabs)");
      }
    };
    func();
  }, []);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors[colorScheme].background,
      flex: 1,
      paddingHorizontal: 16,
    },
    innerContainer: {
      marginTop: Platform.OS === "android" ? 25 : 0,
      flex: 1,
      justifyContent: "center",
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
      color: Colors[colorScheme].text,
    },
    input: {
      height: 40,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      color: Colors[colorScheme].text,
    },
    error: {
      color: "red",
      fontSize: 12,
      marginBottom: 10,
    },
    button: {
      backgroundColor: Colors[colorScheme].tint,
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginBottom: 10,
    },
    buttonText: {
      color: Colors[colorScheme].background,
      fontWeight: "bold",
    },
    registerText: {
      color: Colors[colorScheme].tint,
      textAlign: "center",
      marginTop: 10,
    },
    showPasswordStyle: {
      position: "absolute",
      right: 10,
      top: 9,
    },
  });
  const toastConfig = {
    error: (props: any) => (
      <ErrorToast
        {...props}
        contentContainerStyle={{
          backgroundColor: Colors[colorScheme].background,
          shadowColor: Colors[colorScheme].shadowColor,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.17,
          shadowRadius: 2.54,
          elevation:3
        }}
        text1Style={{ color: Colors[colorScheme].text }}
      />
    ),
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={colorScheme === "light" ? "dark" : "light"}
        backgroundColor={Colors[colorScheme].background}
      />
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/images/logo.png")} // Replace with the actual path to your image
          style={styles.image}
          resizeMode="contain"
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            dispatch(loginAction(values));
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
              {/* <Text style={styles.loginText}>Please Login</Text> */}
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={Colors[colorScheme].icon}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <Text style={styles.error}>{errors.email}</Text>
              ) : null}
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={Colors[colorScheme].icon}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={showPassword ? false : true}
                />

                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.showPasswordStyle}
                >
                  <Ionicons
                    name={!showPassword ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    color="#ccc"
                  />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password ? (
                <Text style={styles.error}>{errors.password}</Text>
              ) : null}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                {loading ? (
                  <ActivityIndicator
                    size="small"
                    color={Colors[colorScheme].background}
                  />
                ) : (
                  <Text style={styles.buttonText}>Sign In</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <Toast config={toastConfig} position="top"  />
      </View>
    </SafeAreaView>
  );
}
