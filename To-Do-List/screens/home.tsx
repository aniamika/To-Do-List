
import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Home() {
    const [name, setName] = useState("Ania");
    // setName- it is the function and will be use to update the name
    const [person, setPerson] = useState({surname: "Mika", age: 30 });

    return (
        <View style={styles.homeBackground}>
            <View style={styles.home}>
            <Image source={{uri: "https://avatars0.githubusercontent.com/u/28620350?s=400&amp;u=dd43553660c4e14f54435662661ec987ee17363c&amp;v=4" }} style={styles.image}/>
                <Text style={styles.text}>Hello,</Text>
                <Text style={styles.name}> {name} {person.surname}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homeBackground: {
        flex: 1,
        backgroundColor: "#518AFF",
    },
    home: {
        flex: 1,
        marginTop: 90,
        marginRight: 40,
        alignSelf: "stretch",
        padding: 20,
        backgroundColor: "#F6F7FC",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderTopRightRadius: 30,
    },
    text: {
        color: "#798291",
        fontSize: 40,
        fontWeight: "900",
    },
    name: {
        color: "#518AFF",
        fontSize: 20,
        fontWeight: "900",
    },
    image: {
        width: 120,
        height: 120,
        alignSelf: "center",
        top: -50,
        borderRadius: 120/2,
        backgroundColor: "#518AFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    }
})
