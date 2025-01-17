import { View, Text, useColorScheme, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Path, Svg } from "react-native-svg";

const HomeCard = ({
  img,
  title,
  fDate,
  lDate,
}: {
  img: any;
  title: string;
  fDate: string;
  lDate: string;
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const styles = StyleSheet.create({
    card: {
      backgroundColor: Colors[colorScheme].card,
      padding: 8,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#E1E1E1",
     marginRight:16
    },
    text: {
      fontWeight: "500",
      fontSize: 14,
      color: Colors[colorScheme].text_1,
      marginBottom: 8,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    otherUsers: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors[colorScheme].bg_2,
      right: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const users = [
    { id: 1, avatar: require("../../assets/images/user1.png") },
    { id: 2, avatar: require("../../assets/images/user2.png") },
    { id: 3, avatar: require("../../assets/images/user3.png") },
  ];

  const additionalUsers = users.length > 3 ? users.length - 3 : 0;

  return (
    <View style={styles.card}>
      <Image
        source={img}
        style={{ height: 120, width: 180, marginBottom: 10 }}
      />
      <Text style={styles.text}>{title} </Text>
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            x="http://www.w3.org/2000/svg"
          >
            <Path
              d="M11.9997 1.66659H9.99967V0.666585C9.99967 0.57818 9.96456 0.493395 9.90204 0.430883C9.83953 0.368371 9.75475 0.333252 9.66634 0.333252C9.57794 0.333252 9.49315 0.368371 9.43064 0.430883C9.36813 0.493395 9.33301 0.57818 9.33301 0.666585V1.66659H4.66634V0.666585C4.66634 0.57818 4.63122 0.493395 4.56871 0.430883C4.5062 0.368371 4.42141 0.333252 4.33301 0.333252C4.2446 0.333252 4.15982 0.368371 4.09731 0.430883C4.03479 0.493395 3.99967 0.57818 3.99967 0.666585V1.66659H1.99967C1.55781 1.66711 1.13419 1.84288 0.821748 2.15533C0.509302 2.46777 0.333537 2.89139 0.333008 3.33325V11.9999C0.333537 12.4418 0.509302 12.8654 0.821748 13.1778C1.13419 13.4903 1.55781 13.6661 1.99967 13.6666H11.9997C12.4417 13.6666 12.8656 13.491 13.1782 13.1784C13.4907 12.8659 13.6663 12.4419 13.6663 11.9999V3.33325C13.6663 2.89122 13.4907 2.4673 13.1782 2.15474C12.8656 1.84218 12.4417 1.66659 11.9997 1.66659ZM12.9997 11.9999C12.9997 12.2651 12.8943 12.5195 12.7068 12.707C12.5192 12.8946 12.2649 12.9999 11.9997 12.9999H1.99967C1.73446 12.9999 1.4801 12.8946 1.29257 12.707C1.10503 12.5195 0.999674 12.2651 0.999674 11.9999V6.33325H12.9997V11.9999ZM12.9997 5.66659H0.999674V3.33325C0.999674 2.78125 1.44634 2.33325 1.99967 2.33325H3.99967V3.33325C3.99967 3.42166 4.03479 3.50644 4.09731 3.56895C4.15982 3.63147 4.2446 3.66659 4.33301 3.66659C4.42141 3.66659 4.5062 3.63147 4.56871 3.56895C4.63122 3.50644 4.66634 3.42166 4.66634 3.33325V2.33325H9.33301V3.33325C9.33301 3.42166 9.36813 3.50644 9.43064 3.56895C9.49315 3.63147 9.57794 3.66659 9.66634 3.66659C9.75475 3.66659 9.83953 3.63147 9.90204 3.56895C9.96456 3.50644 9.99967 3.42166 9.99967 3.33325V2.33325H11.9997C12.2649 2.33325 12.5192 2.43861 12.7068 2.62615C12.8943 2.81368 12.9997 3.06804 12.9997 3.33325V5.66659Z"
              fill="#1263E5"
            />
          </Svg>
          <Text style={{ color: "#1263E5", fontWeight: 400, fontSize: 10 }}>
            {fDate}
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
          <Svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            x="http://www.w3.org/2000/svg"
          >
            <Path
              d="M11.9997 1.66659H9.99967V0.666585C9.99967 0.57818 9.96456 0.493395 9.90204 0.430883C9.83953 0.368371 9.75475 0.333252 9.66634 0.333252C9.57794 0.333252 9.49315 0.368371 9.43064 0.430883C9.36813 0.493395 9.33301 0.57818 9.33301 0.666585V1.66659H4.66634V0.666585C4.66634 0.57818 4.63122 0.493395 4.56871 0.430883C4.5062 0.368371 4.42141 0.333252 4.33301 0.333252C4.2446 0.333252 4.15982 0.368371 4.09731 0.430883C4.03479 0.493395 3.99967 0.57818 3.99967 0.666585V1.66659H1.99967C1.55781 1.66711 1.13419 1.84288 0.821748 2.15533C0.509302 2.46777 0.333537 2.89139 0.333008 3.33325V11.9999C0.333537 12.4418 0.509302 12.8654 0.821748 13.1778C1.13419 13.4903 1.55781 13.6661 1.99967 13.6666H11.9997C12.4417 13.6666 12.8656 13.491 13.1782 13.1784C13.4907 12.8659 13.6663 12.4419 13.6663 11.9999V3.33325C13.6663 2.89122 13.4907 2.4673 13.1782 2.15474C12.8656 1.84218 12.4417 1.66659 11.9997 1.66659ZM12.9997 11.9999C12.9997 12.2651 12.8943 12.5195 12.7068 12.707C12.5192 12.8946 12.2649 12.9999 11.9997 12.9999H1.99967C1.73446 12.9999 1.4801 12.8946 1.29257 12.707C1.10503 12.5195 0.999674 12.2651 0.999674 11.9999V6.33325H12.9997V11.9999ZM12.9997 5.66659H0.999674V3.33325C0.999674 2.78125 1.44634 2.33325 1.99967 2.33325H3.99967V3.33325C3.99967 3.42166 4.03479 3.50644 4.09731 3.56895C4.15982 3.63147 4.2446 3.66659 4.33301 3.66659C4.42141 3.66659 4.5062 3.63147 4.56871 3.56895C4.63122 3.50644 4.66634 3.42166 4.66634 3.33325V2.33325H9.33301V3.33325C9.33301 3.42166 9.36813 3.50644 9.43064 3.56895C9.49315 3.63147 9.57794 3.66659 9.66634 3.66659C9.75475 3.66659 9.83953 3.63147 9.90204 3.56895C9.96456 3.50644 9.99967 3.42166 9.99967 3.33325V2.33325H11.9997C12.2649 2.33325 12.5192 2.43861 12.7068 2.62615C12.8943 2.81368 12.9997 3.06804 12.9997 3.33325V5.66659Z"
              fill="#F22A2A"
            />
          </Svg>
          <Text style={{ color: "#F22A2A", fontWeight: 400, fontSize: 10 }}>
            {lDate}
          </Text>
        </View>
        <View style={{ flexDirection: "row", left: 10 }}>
          {users?.length > 0 &&
            users.slice(0, 3).map((user: any, idx: number) => {
              return (
                <Image
                  source={user.avatar}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    left: idx === 0 ? 20 : idx === 1 ? 10 : 0,
                  }}
                />
              );
            })}

          <View style={styles.otherUsers}>
            <Text style={{ fontSize: 10, fontWeight: 500 }}>+4</Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default HomeCard;
