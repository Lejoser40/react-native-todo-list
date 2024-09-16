import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function TodoCard({ todo, funcDelete, funcEdit }) {
  return (
    <View style={styles.box}>
      <View style={{ display: "block", width: 200 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={{ margin: 10 }}>{todo.text}</Text>
        </ScrollView>
      </View>
      <View
        style={{
          display: "block",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          right: 5,
        }}
      >
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#EAEAEA" : "#CDCDCD",
              width: 50,
              height: 40,
              borderRadius: 4,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 5,
            },
          ]}
          onPress={() => funcEdit(todo.id)}
        >
          <Text>Edit</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#EAEAEA" : "#CDCDCD",
              width: 50,
              height: 40,
              borderRadius: 4,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 5,
            },
          ]}
          onPress={() => funcDelete(todo.id)}
        >
          <Text>Delete</Text>
        </Pressable>
      </View>
    </View>
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
});
