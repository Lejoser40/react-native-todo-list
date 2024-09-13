import { useRef, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import TodoCard from "./components/TodoCard";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [prueba, setPrueba] = useState(0);
  const textInput = useRef(null);
  const [editIndex, setIndex] = useState(-1);

  const addTodo = () => {
    // console.log(editIndex);
    if (!task) return;
    if (editIndex === -1) {
      addMode();
      return;
    }
    editMode();
  };

  const addMode = () => {
    setTasks([
      ...tasks,
      {
        id: prueba,
        text: task,
      },
    ]);
    setTask("");
    setPrueba(prueba + 1);
    // console.log(prueba);
    clearInput();
  };

  const editMode = () => {
    const update = tasks;
    // console.log(update);
    update[editIndex].text = task;
    setTasks(update);
    setIndex(-1);
    clearInput();
  };

  const clearInput = () => {
    textInput.current.blur();
    textInput.current.clear();
  };

  const deleteTodo = (todoId) => {
    setTasks((updateTa) => updateTa.filter((item) => item.id !== todoId));

    //aaaa
    // let ta = [...tasks];
    // console.log(ta);
    // ta = ta.filter((item) => item.id !== todoId);
    // console.log(ta);
    // setTasks(ta);
  };

  const editTodo = (todoId) => {
    const index = tasks.findIndex((item) => item.id === todoId);
    const updateTa = tasks[index];
    textInput.current.setNativeProps({ text: `${updateTa.text}` });
    // setTask(updateTa.text);
    setIndex(index);
    // console.log(editIndex);
  };

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>To-do App</Text>
          <TextInput
            style={styles.textBox}
            placeholder="To do"
            onChangeText={(text) => setTask(text)}
            ref={textInput}
          />
          <View>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "grey" : "black",
                  width: 300,
                  height: 40,
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              onPress={addTodo}
            >
              <Text style={styles.text}>Add</Text>
            </Pressable>
          </View>
          <View
            style={{
              height: height * 0.6,
              justifyContent: "space-between",
              backgroundColor: "#fff",
              margin: 10,
            }}
          >
            <FlatList
              data={tasks}
              keyExtractor={(ta) => ta.id}
              renderItem={({ item }) => (
                <TodoCard
                  todo={item}
                  funcDelete={deleteTodo}
                  funcEdit={editTodo}
                ></TodoCard>
              )}
              showsVerticalScrollIndicator={false}
            ></FlatList>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
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
  todos: {
    marginTop: 10,
  },
});
