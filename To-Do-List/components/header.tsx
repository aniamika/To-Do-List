import * as React from "react";
import { StyleSheet, FC, Text, View } from "react-native";

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#518AFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    title: {
        color: "#F6F7FC",
        fontSize: 20,
        fontWeight: "800",
    },
});

const Header: FC = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
};
export default Header;
