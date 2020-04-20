import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet, FlatList } from "react-native";
import Header from "../components/header";
import TodoItem from "../components/todoItem";

export default function TasksList({ navigation }) {

    const createNewTask = () => {
        navigation.navigate("NewTask");
    };

    const [todos, setTodos] = useState([
        { text: "buy coffee", key: "1" },
        { text: "create an app", key: "2" },
        { text: "play on the switch", key: "3" },
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        })
    }

    return (
        <View style={styles.tasksList}>
            <Header />
            <View style={styles.list}>
                <FlatList
                    data={todos}
                    renderItem={( {item } ) => (
                        <TodoItem item={item} pressHandler={pressHandler}/>
                    )}
                />
            </View>
            <TouchableOpacity onPress={createNewTask} style={styles.buttonContainer}>
                <Text style={styles.button}>+</Text>
            </TouchableOpacity>
        </View>
    );

}

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


