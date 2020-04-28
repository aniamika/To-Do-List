import React, { useState } from "react";
import { TextInput, FC, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    input: {
        display: "flex",
        width: 90,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        padding: 16,
        margin: 8,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    }
});

const AddTodo: FC = () => {

    // the text what uset typed in field
    const [text, setText] = useState("");

    const changeHandler = (value) => {
        setText();
    };

    return (
        <View>
            <TextInput
                style={StyleSheet.input}
                placeholder="new task"
                onChangeText={(value) => changeHandler}
            />
        </View>
    )
};
export default AddTodo;