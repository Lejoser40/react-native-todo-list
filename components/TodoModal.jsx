import {
  Modal,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Editmodal({
  visible,
  closeModal,
  task,
  setTask,
  funcDelete,
  funcEdit,
}) {
  const [chosenDate, setChosenDate] = useState(new Date());

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <GestureRecognizer style={{}} onSwipeDown={() => closeModal()}>
        <Modal
          visible={visible}
          animationType="slide"
          presentationStyle="formSheet"
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Pressable onPress={() => closeModal()}>
              <Text
                style={{
                  fontSize: 20,
                  width: 100,
                  height: 1,
                  borderStyle: "solid",
                  borderWidth: 1,
                  marginTop: 15,
                }}
              ></Text>
            </Pressable>
            <TextInput
              placeholder="todo"
              value={task}
              onChangeText={setTask}
              style={{
                height: 50,
                width: 350,
                paddingHorizontal: 32,
                borderStyle: "solid",
                borderWidth: 1,
                margin: 10,
                borderRadius: 4,
                marginTop: 30,
              }}
            ></TextInput>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "",
                margin: 10,
              }}
            >
              <Pressable
                style={({ pressed }) => [
                  styles.buttom,
                  { backgroundColor: pressed ? "#EAEAEA" : "#CDCDCD" },
                ]}
                onPress={() => funcDelete()}
              >
                <Text>Eliminar</Text>
              </Pressable>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "",
                margin: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "",
                  margin: 5,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Time:</Text>
                <DateTimePicker value={chosenDate} mode="time"></DateTimePicker>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "",
                  margin: 5,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Date:</Text>
                <DateTimePicker value={chosenDate} mode="date"></DateTimePicker>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                position: "",
                margin: 5,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginRight: 20 }}
              >
                Reminder:
              </Text>
              <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
              ></Switch>
            </View>
          </View>
        </Modal>
      </GestureRecognizer>
    </>
  );
}

const styles = StyleSheet.create({
  buttom: {
    width: 150,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});
