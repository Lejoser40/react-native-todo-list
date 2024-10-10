import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { React, useCallback } from "react";

const BottomSheet = ({
  modalVisible,
  setTask,
  textInput,
  click,
  task,
  setModalVisible,
}) => {
  const { height, width } = useWindowDimensions();

  // const getInputValue = () => {
  //   return textInput.current.value;
  // };

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="slide"
      presentationStyle="overFullScreen"
    >
      <View style={styles.modal}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={{
            height: height,
            width: width,
            backgroundColor: "transparent",
          }}
        ></Pressable>
        <View
          style={[
            styles.bottomSheet,
            { shadowOffset: { width: 0, height: -20 } },
            { width: width },
          ]}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              style={styles.textBox}
              placeholder="To do"
              // ref={textInput}
              onChangeText={setTask}
              value={task}
              autoFocus
            />
            <Pressable
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? "grey" : "black" },
              ]}
              onPress={click}
            >
              <Text style={styles.text}>Add</Text>
            </Pressable>
          </View>
          {/* <Button
          onPress={() => setModalVisible(false)}
          title="close"
        ></Button> */}
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: "white",
    height: "57%",
    borderRadius: 10,
    shadowColor: "lightgrey",
    shadowOpacity: 1,
    shadowRadius: 10,
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
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    lineHeight: 21,
    letterSpacing: 0.25,
  },
  modal: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 60,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    width: 350,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
