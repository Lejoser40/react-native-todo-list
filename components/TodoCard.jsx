import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function TodoCard({ todo, funcDelete, funcEdit, openModal }) {
  return (
    <Pressable
      style={{ backgroundColor: "black" }}
      onPress={() => openModal(true)}
    >
      <View style={styles.box}>
        <View style={{ display: "block", width: 200 }}>
          {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        </ScrollView> */}
          <Text style={{ margin: 10 }}>{todo.text}</Text>
        </View>
        <View style={styles.box2}>
          <Pressable
            style={({ pressed }) => [
              styles.buttom,
              { backgroundColor: pressed ? "#EAEAEA" : "#CDCDCD" },
            ]}
            onPress={() => funcEdit(todo.id)}
          >
            <Text>Edit</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.buttom,
              { backgroundColor: pressed ? "#EAEAEA" : "#CDCDCD" },
            ]}
            onPress={() => funcDelete(todo.id)}
          >
            <Text>Delete</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 50,
    width: 350,
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
  box2: {
    display: "block",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    right: 5,
  },
  buttom: {
    width: 50,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});
