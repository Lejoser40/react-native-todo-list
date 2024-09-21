import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";

const BottomSheet = ({
  width,
  modalVisible,
  setTask,
  textInput,
  click,
  task,
}) => {
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="slide"
      presentationStyle="overFullScreen"
    >
      <View style={styles.modal}>
        <View
          style={{
            backgroundColor: "white",
            height: "57%",
            width: width,
            borderRadius: 10,
            shadowColor: "lightgrey",
            shadowOffset: { width: 0, height: -20 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              style={styles.textBox}
              placeholder="To do"
              onChangeText={(text) => setTask(text)}
              ref={textInput}
              value={task}
              autoFocus
            />
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "grey" : "black",
                  width: 350,
                  height: 40,
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                },
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
});
