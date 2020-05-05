
import * as React from "react";
import { useState } from "react";
import { Text, FC, View, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
    homeBackground: {
        flex: 1,
        backgroundColor: "#518AFF",
    },
    header: {
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
    },
    main: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 90,
        marginRight: 80,
        alignSelf: "stretch",
        justifyContent: "flex-end",
        padding: 20,
        backgroundColor: "#F6F7FC",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderTopRightRadius: 50,
        zIndex: 2,
        position: "relative",
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        padding: 10,
        // borderWidth: 1,
        // borderColor: "#518AFF",
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 5,
    },
    iconsContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        width: 50,
        right: -45,
        top: 50,
        position: "absolute",
    },
    iconContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: 50,
        backgroundColor: "#F6F7FC",
        zIndex: 1,
        marginBottom: 7,
    },
});

const Home: FC = () => {
    const [name, setName] = useState("Ania");
    // setName- it is the function and will be use to update the name
    const [person, setPerson] = useState({surname: "Mika", age: 30 });

    return (
        <View style={styles.homeBackground}>
            <View style={styles.main}>
                <View style={styles.header}>
                    <Image source={require("../assets/person.jpg")} style={styles.image}/>
                    <Text style={styles.text}>Hello,</Text>
                    <Text style={styles.name}> {name} {person.surname}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name="flight" style={styles.icon} />
                        {/* <Icon name="location-city" style={styles.icon}/>
                        <Icon name="palette" style={styles.icon}/>
                        <Icon name="school" style={styles.icon}/>
                        <Icon name="spa" style={styles.icon}/>
                        <Icon name="train" style={styles.icon}/>
                        <Icon name="videogame-asset" style={styles.icon}/>
                        <Icon name="toys" style={styles.icon}/>
                        <Icon name="time-to-leave" style={styles.icon}/>
                        <Icon name="terrain" style={styles.icon}/>
                        <Icon name="store" style={styles.icon}/>
                        <Icon name="subway" style={styles.icon}/>
                        <Icon name="smoking-rooms" style={styles.icon}/>
                        <Icon name="snooze" style={styles.icon}/>
                        <Icon name="shopping-cart" style={styles.icon}/>
                        <Icon name="shopping-basket" style={styles.icon}/>
                        <Icon name="settings-phone" style={styles.icon}/>
                        <Icon name="sentiment-very-satisfied" style={styles.icon}/>
                        <Icon name="rowing" style={styles.icon}/>
                        <Icon name="restaurant" style={styles.icon}/>
                        <Icon name="print" style={styles.icon}/>
                        <Icon name="radio" style={styles.icon}/>
                        <Icon name="restaurant-menu" style={styles.icon}/> */}
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="directions-bike" style={styles.icon} />
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="format-paint" style={styles.icon}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="landscape" style={styles.icon}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="pool" style={styles.icon}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="pets" style={styles.icon}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="local-dining" style={styles.icon}/>
                    </View>
                    {/* <View style={styles.iconContainer}>
                        <Icon name="local-florist" style={styles.icon}/>
                    </View> */}
                </View>

            </View>
        </View>
    );
};
export default Home;

