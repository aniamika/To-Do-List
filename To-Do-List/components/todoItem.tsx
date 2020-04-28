import React from "react";
import { StyleSheet, FC, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F7FC",
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

const TodoItem: FC = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
};
export default TodoItem;