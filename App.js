import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>To-do App</Text>
        <TextInput
          style={styles.textBox}
          placeholder="To do"
          onChangeText={(text) => setTask(text)}
        />
        <View>
          <Pressable style={styles.Button}>
            <Text style={styles.text}>Add</Text>
          </Pressable>
        </View>
        <Text>{task}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  box: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textBox: {
    height: 50,
    width: 300,
    paddingHorizontal: 32,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 10,
    borderRadius: 4,
  },
  Button: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});
