import { Colors } from "@/constants/Colors";
import { getItem } from "@/utils/AsyncStorage";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { useEffect } from "react";
import { Appearance, useColorScheme, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Feather from "@expo/vector-icons/Feather";
import { Svg, Path } from "react-native-svg"; // Import SVG components

const AuthLayout = () => {
  const colorScheme = useColorScheme() ?? "light";

  useEffect(() => {
    const func = async () => {
      const theme: any = await getItem("wash-avengers-theme");
      Appearance.setColorScheme(theme);
    };

    func();
  }, []);

  const { loginDetails } = useSelector((state: any) => state.auth);
  if (!loginDetails) return <Redirect href="/(auth)/sign-in" />;

  const unreadMessages = 2; // Example unread messages count
  const styles = StyleSheet.create({
    badgeContainer: {
      position: "absolute",
      left: -6,
      top: -3,
      backgroundColor: '#3FA9F5',
      borderRadius: 6,
      width: 12,
      height: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    badgeText: {
      color: "white",
      fontSize: 8,
      fontWeight: "bold",
    },
  });
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.card,
        tabBarInactiveTintColor: "#B3B3B3",
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].primary,
          height: 60,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 500,
          bottom: 5,
        },
      }}
    >
      {/* Home Screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="home" color={color} />
          ),
        }}
      />

      {/* Messaging Screen with Badge */}
      <Tabs.Screen
        name="messaging"
        options={{
          title: "Messaging",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View>
              <Svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                <Path
                  d="M18.25 4.5H15.25V1.5C15.25 1.10218 15.092 0.720644 14.8107 0.43934C14.5294 0.158035 14.1478 0 13.75 0H1.75C1.35218 0 0.970644 0.158035 0.68934 0.43934C0.408035 0.720644 0.25 1.10218 0.25 1.5V13.5C0.25044 13.6411 0.290676 13.7792 0.366083 13.8985C0.441491 14.0177 0.549012 14.1133 0.676294 14.1742C0.803577 14.2351 0.945457 14.2589 1.08564 14.2428C1.22581 14.2266 1.3586 14.1713 1.46875 14.0831L4.75 11.4375V14.25C4.75 14.6478 4.90804 15.0294 5.18934 15.3107C5.47064 15.592 5.85218 15.75 6.25 15.75H15.0241L18.5312 18.5831C18.664 18.6905 18.8293 18.7493 19 18.75C19.1989 18.75 19.3897 18.671 19.5303 18.5303C19.671 18.3897 19.75 18.1989 19.75 18V12V6C19.75 5.60218 19.592 5.22064 19.3107 4.93934C19.0294 4.65804 18.6478 4.5 18.25 4.5ZM4.23906 9.91688L1.75 11.9297V1.5H13.75V9.75H4.71063C4.53897 9.75002 4.37252 9.80893 4.23906 9.91688ZM18.25 16.4297L15.7609 14.4169C15.6282 14.3095 15.4629 14.2507 15.2922 14.25H6.25V11.25H13.75C14.1478 11.25 14.5294 11.092 14.8107 10.8107C15.092 10.5294 15.25 10.1478 15.25 9.75V6H18.25V16.4297Z"
                  fill={color}
                />
              </Svg>
              {unreadMessages > 0 && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{unreadMessages}</Text>
                </View>
              )}
            </View>
          ),
        }}
      />

      {/* Tasks Screen */}
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path
                d="M2 17L12 22L22 17"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M2 12L12 17L22 12"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          ),
        }}
      />

      {/* Meetings Screen */}
      <Tabs.Screen
        name="meetings"
        options={{
          title: "Meetings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <Path
                d="M5.19565 14.2766H19.8043M12.5 14.2766V25M6.76087 11.7234V7.12766H5.53791C4.84299 7.12766 4.16782 7.35398 3.61881 7.77094C3.06979 8.1879 2.67814 8.77181 2.50557 9.43064L0.5 17.0851V17.3404H7.80435V18.8723C7.80435 20.4043 7.80435 21.4255 8.58696 22.9574C8.58696 22.9574 9.36957 24.4894 10.413 24.4894M18.2391 11.7234V7.12766H19.4621C20.157 7.12766 20.8322 7.35398 21.3812 7.77094C21.9302 8.1879 22.3219 8.77181 22.4944 9.43064L24.5 17.0851V17.3404H17.1957V18.8723C17.1957 20.4043 17.1957 21.4255 16.413 22.9574C16.413 22.9574 15.6304 24.4894 14.587 24.4894M6.60435 5.08511C6.60435 5.08511 4.93478 4.06383 4.93478 2.78723C4.93478 2.31377 5.12695 1.8597 5.46902 1.52491C5.81109 1.19012 6.27503 1.00204 6.75878 1.00204C7.24254 1.00204 7.70648 1.19012 8.04855 1.52491C8.39061 1.8597 8.58278 2.31377 8.58278 2.78723C8.58278 4.06383 6.91739 5.08511 6.91739 5.08511H6.60435ZM18.3957 5.08511C18.3957 5.08511 20.0652 4.06383 20.0652 2.78723C20.0652 2.31323 19.8728 1.85864 19.5304 1.52347C19.1879 1.1883 18.7234 1 18.2391 1C17.2311 1 16.4172 1.80068 16.4172 2.78723C16.4172 4.06383 18.0826 5.08511 18.0826 5.08511H18.3957Z"
                stroke={color}
              />
            </Svg>
          ),
        }}
      />
    </Tabs>
  );
};

// Styles for badge


export default AuthLayout;
