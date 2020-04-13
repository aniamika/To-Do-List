import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function TasksList({ navigation }) {

    const createNewTask = () => {
        navigation.navigate('NewTask');
    }

    return (
        <View style={styles.tasksList}>
            <Text>Tasks List screen</Text>
            <View style={styles.buttonContainer}>
                <Button title='+' onPress={createNewTask} color='#D7E7A9' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tasksList: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#D3C0F9',
    },
    buttonContainer: {
        width: 60,
        height: 60,
        borderRadius: 100/2,
        backgroundColor: '#D7E7A9',
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 25,
        alignItems: 'center',
    },
})

