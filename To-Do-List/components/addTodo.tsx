import React, { useState } from "react";
import { TextInput, FC, StyleSheet, View, Button } from "react-native";

const styles = StyleSheet.create({
    input: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#518AFF",
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
            <Button onPress={() => submitHandler(text)} title="submit" color="#518AFF" />
        </View>
    );
};
export default AddTodo;