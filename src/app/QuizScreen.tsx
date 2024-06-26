import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import QuestionCard from "../components/QuestionCard";
import { FontAwesome6 } from "@expo/vector-icons";

import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
const question = questions[2];

const QuizScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* Body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>Time: 10s</Text>
          </View>
        ) : (
          <Card title="Well done!">
            <Text>Correct answers: 3/5</Text>
            <Text>Best score: 10 </Text>
          </Card>
        )}

        {/* Footer */}
        <CustomButton
          title="Next"
          onPress={() => console.warn("Custom button pressed")}
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="#fff" />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FDFEF4",
    padding: 30,
  },
  container: {
    flex: 1,

    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    color: "#005055",
    fontWeight: "bold",
  },
  time: {
    textAlign: "center",
    color: "#005055",
    marginTop: 20,
    fontWeight: "bold",
  },
});

export default QuizScreen;
