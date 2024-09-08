import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TodoCard({ todo }) {
  return (
    <View style={styles.box}>
      <Text>{todo.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 300,
    backgroundColor: "white",
    margin: 10,
    justifyContent: "center",
    borderBottomColor: "black",
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    // shadowColor: "grey",
    // shadowOffset: { width: 0, height: 10 },
    // shadowOpacity: 1,
    // shadowRadius: 6,
  },
});
