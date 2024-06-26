import { Pressable, Text, StyleSheet, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";

type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
};

export default function CustomButton({
  title,
  rightIcon,
  onPress,
}: CustomButton) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
