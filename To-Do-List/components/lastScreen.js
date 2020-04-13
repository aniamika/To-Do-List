import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default  function LastScreen({ navigation }) {
    return (
        <View style={styles.lastScreen}>
        <Text>Last screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    lastScreen: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#F99A9C',
    },
})