import * as React from "react";
import { FC, View, StyleSheet } from "react-native";
import AddTodo from "../components/addTodo";
import TasksList from "./tasksList";

const styles = StyleSheet.create({
    newTask: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F7FC",
    },
});

const NewTask: FC = ({ submitHandler }) => {

    return (
        <View style={styles.newTask}>
            <AddTodo submitHandler={submitHandler}/>
        </View>
    );
}
export default NewTask;
