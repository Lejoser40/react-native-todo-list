import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { React, useState } from "react";
import Checkbox from "expo-checkbox";

export default function TodoCard({ todo, openModal, changeCompletedTodo }) {
  // const [isChecked, setChecked] = useState(false);

  return (
    <Pressable onPress={() => openModal(todo.id)}>
      <View style={styles.box}>
        <View
          style={{
            display: "block",
            width: 200,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Checkbox
            color={"black"}
            style={{
              height: 23,
              width: 23,
              borderRadius: 8,
              borderColor: "black",
            }}
            value={todo.completed}
            onValueChange={() => changeCompletedTodo(todo.id)}
          />
          <Text
            style={{
              fontSize: 17,
              letterSpacing: 3,
              marginLeft: 30,
              color: todo.completed ? "lightgrey" : "black",
              textDecorationLine: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </Text>
        </View>
        <View style={styles.box2}></View>
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
