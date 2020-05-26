import React, { useState } from "react";
import { FC, View, StyleSheet, FlatList, Alert } from "react-native";
import Header from "../components/header";
import TodoItem from "../components/todoItem";
import AddTodo from "../components/addTodo";

const styles = StyleSheet.create({
    tasksList: {
        flex: 1,
        backgroundColor: "#F6F7FC",
    },
    buttonContainer: {
        width: 60,
        height: 60,
        borderRadius: 100/2,
        backgroundColor: "#518AFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        margin: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    button: {
        color: "#F6F7FC",
        fontSize: 28,
    },
    list: {
        padding: 20,
    },
});

const TasksList: FC = ({ navigation }) => {

    const createNewTask = () => {
        navigation.navigate("NewTask");
    };

    const showCreateNewTask = () => {

    };

    const [todos, setTodos] = useState([
        { text: "task1", key: "1" },
        { text: "task2", key: "2" },
        { text: "task3", key: "3" },
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key !== key);
        });
    };

    const submitHandler = (text) => {

        if(text.length > 2) {
            setTodos((prevTodos) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos
                ];
            });
        } else {
            Alert.alert("OOPS!", "Todos must be over 2 chars long", [
                {text: "Understood", onPress: () => console.log("alert closed")}
            ]);
        };

    };

    return (
        <View style={styles.tasksList}>
            <Header />
            <View style={styles.list}>
                <AddTodo submitHandler={submitHandler}/>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <TodoItem item={item} pressHandler={pressHandler}/>
                    )}
                />
            </View>
        </View>
    );

};
export default TasksList;