import React, { useState } from "react";
import { TouchableHighlight, Text, TextInput, FC, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    input: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#518AFF",
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#518AFF",
        padding: 16,
        margin: 8,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: "#F6F7FC",
    }
});

const AddTodo: FC = ({ submitHandler }) => {

    // the text what uset typed in field
    const [text, setText] = useState("");

    const changeHandler = (value) => {
        setText(value);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="add new task"
                onChangeText={changeHandler}
            />
            <TouchableHighlight onPress={() => submitHandler(text)} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
        </View>
    );
};
export default AddTodo;