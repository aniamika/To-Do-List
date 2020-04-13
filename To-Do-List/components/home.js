
import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
    const [name, setName] = useState('ania');
    // setName- it is the function and will be use to update the name
    const [person, setPerson] = useState({surname: 'mika', age: 30 });

    return (
        <View style={styles.home}>
            <Text>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#B5DDD1',
    },
})