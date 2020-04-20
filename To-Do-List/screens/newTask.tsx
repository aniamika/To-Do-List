import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function NewTask() {
    return (
        <View style={styles.newTask}>
            <Text>Create new task</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    newTask: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F7FC",
    },
})
