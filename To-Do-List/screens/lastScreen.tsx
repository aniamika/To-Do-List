import * as React from "react";
import { Text, FC, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    lastScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F7FC",
    },
})

const LastScreen: FC = ({ navigation }) => {
    return (
        <View style={styles.lastScreen}>
        <Text>Last screen</Text>
        </View>
    );
}
export default LastScreen;
