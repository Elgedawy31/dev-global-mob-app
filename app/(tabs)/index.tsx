import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  useColorScheme,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { Avatar, Divider } from "react-native-paper";
import HeadText from "@/components/HeadText";
import { router } from "expo-router";
import HomeHeader from "@/components/home/HomeHeader";
import { Shadows } from "@/constants/Shadows";
import HomeCard from "@/components/home/HomeCard";
export default function Home() {
  const colorScheme = useColorScheme() ?? "light";
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors[colorScheme].bg,
      flex: 1,
    },

    header: {
      backgroundColor: Colors[colorScheme].card,
      padding: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    flex: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    text: {
      color: Colors[colorScheme].text_1,
      fontWeight: "500",
      fontSize: 14,
    },
    eventsCard: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: Colors[colorScheme].secondary,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const AddNewProject = () => {
    router.push("/screens/newProject");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={colorScheme === "light" ? "dark" : "light"}
        backgroundColor={Colors[colorScheme].card}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.header, { ...Shadows }]}>
          <View style={styles.flex}>
            <Avatar.Image
              size={36}
              source={require("../../assets/images/avatar.png")}
            />
            <Text style={styles.text}>Hello Gedawy !</Text>
          </View>
          <TouchableOpacity style={styles.eventsCard}>
            <Image source={require("../../assets/images/events.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 16, marginVertical: 12 }}>
          {/* Projects overView Header */}
          <HomeHeader title="Projects Overview" onPress={AddNewProject} />
          {/* Projects overView  */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            
            contentContainerStyle={{ marginTop: 12 }}
          >
            <HomeCard img={require('../../assets/images/web.png')} title="Landing Page Project" fDate="14Sep" lDate="19Sep" />
            <HomeCard img={require('../../assets/images/Inovative.png')} title="Inovative Project" fDate="14Sep" lDate="19Sep" />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
