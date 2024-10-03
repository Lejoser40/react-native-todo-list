import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const floatingBottom = ({ modalVisible }) => {
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "grey" : "black" },
        ]}
        onPress={() => modalVisible(true)}
      >
        <Text style={styles.cros}>+</Text>
      </Pressable>
    </>
  );
};

export default floatingBottom;

const styles = StyleSheet.create({
  cros: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    bottom: 27,
    right: 20,
    height: 70,
    width: 70,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "lightgrey",
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
