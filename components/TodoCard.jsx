import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TodoCard({ todo, func }) {
  return (
    <View style={styles.box}>
      <Text style={{ margin: 15 }}>{todo.text}</Text>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#EAEAEA" : "#CDCDCD",
            width: 60,
            height: 40,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          },
        ]}
        onPress={() => func(todo.id)}
      >
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
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
    justifyContent: "space-between",
    flexDirection: "row",
    // shadowColor: "grey",
    // shadowOffset: { width: 0, height: 10 },
    // shadowOpacity: 1,
    // shadowRadius: 6,
  },
});
