import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const UniLoading = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color={Colors.light.tint} />
    </View>
  );
};

export default UniLoading;
