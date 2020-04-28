import * as React from "react";
import { Text, FC, View, StyleSheet } from "react-native";
import AddTodo from "../components/addTodo";

const styles = StyleSheet.create({
    newTask: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F7FC",
    },
});

const NewTask: FC = () => {
    return (
        <View style={styles.newTask}>
            <AddTodo />
        </View>
    );
}
export default NewTask;
