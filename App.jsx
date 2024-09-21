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
  Modal,
  Button,
} from "react-native";
import TodoCard from "./components/TodoCard";
import BottomSheet from "./components/BottomSheet";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [prueba, setPrueba] = useState(0);
  const textInput = useRef(null);
  const [editIndex, setIndex] = useState(-1);

  const [modalVisible, setModalVisible] = useState(false);

  const handdleClick = () => {
    // console.log(editIndex);
    setModalVisible(false);
    if (!task) return;
    if (editIndex === -1) {
      addTodo();
      return;
    }
    editTodo();
  };

  const addTodo = () => {
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

  const editTodo = () => {
    const update = tasks;
    // console.log(update);
    update[editIndex].text = task;
    setTasks(update);
    setTask("");
    setIndex(-1);
    clearInput();
  };

  const clearInput = () => {
    if (textInput.current) {
      textInput.current.clear();
      textInput.current.blur();
    }
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

  const setTodoForEdit = async (todoId) => {
    await setModalVisible(true);
    const index = tasks.findIndex((item) => item.id === todoId);
    setIndex(index);
    const updateTa = tasks[index];
    setTask(updateTa.text);
    // input.current.setNativeProps({ text: `${updateTa.text}` });

    // console.log(editIndex);
  };

  return (
    <>
      <StatusBar barStyle={"default"} backgroundColor={"#fff"} />
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>To-do App</Text>
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
                  funcEdit={setTodoForEdit}
                ></TodoCard>
              )}
              showsVerticalScrollIndicator={false}
            ></FlatList>
          </View>
          <Button
            onPress={() => setModalVisible(true)}
            title="Agregar"
          ></Button>
        </View>
        <BottomSheet
          width={width}
          modalVisible={modalVisible}
          setTask={setTask}
          TextInput={textInput}
          click={handdleClick}
          task={task}
        ></BottomSheet>
      </SafeAreaView>
    </>
  );
}

const { height, width } = Dimensions.get("window");

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
    width: 350,
    paddingHorizontal: 32,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 10,
    borderRadius: 4,
  },
  Button: {
    width: 350,
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
