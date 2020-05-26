
import * as React from "react";
import { useState } from "react";
import { Text, FC, View, ScrollView, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
    homeBackground: {
        flex: 1,
        backgroundColor: "#518AFF",
    },
    content: {
        paddingTop: 60,
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
        position: "absolute",
        backgroundColor: "#518AFF",
        borderRadius: 120/2,
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
        justifyContent: "center",
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
    iconPlane: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: "#D04261",
    },
    iconBike: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: "#E2CF7D",
    },
    iconPaint: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: "#FA9EAA",
    },
    iconLandscape: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: "#7DC4CA",
    },
    iconPool: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: "#FAC8BE",
    },
    iconPets: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: "#FAEEC8",
    },
    iconDinner: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: "#43888E",
    },
    iconsContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        width: 50,
        right: -50,
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
                <Image source={require("../assets/person.jpg")} style={styles.image}/>
                <View style={styles.content}>
                    <Text style={styles.text}>Hello,</Text>
                    <Text style={styles.name}> {name} {person.surname}</Text>
                    <ScrollView>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia faucibus metus, ac auctor metus porta nec. Nam efficitur vehicula consequat. Pellentesque maximus porttitor justo ac bibendum. Integer facilisis feugiat ipsum nec aliquam. Ut ultrices eros nec lorem blandit pulvinar. Curabitur tempus iaculis vestibulum. Nullam ut libero volutpat, ultrices lectus at, porttitor sapien. Duis rutrum egestas nunc, sed feugiat risus porta nec. Curabitur eu quam lectus. Maecenas id ornare ante, id viverra tellus. Vestibulum placerat vel sapien id condimentum. Integer imperdiet lacus sed arcu molestie, sit amet tristique mi consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sapien felis, convallis ut nisl vel, ullamcorper iaculis odio. Integer vel mauris laoreet, sodales lorem vel, elementum leo. Etiam tempus lacus id felis finibus, vitae condimentum est blandit.
                            Vivamus vitae condimentum tortor, et sollicitudin risus. Donec sagittis mauris a lorem tristique mattis ac a ligula. Vestibulum non lectus lectus. Cras molestie enim non nibh porttitor euismod. Fusce pellentesque urna risus, facilisis consequat dui porttitor a. Sed id condimentum nisi. Vestibulum non pellentesque metus, vel luctus ex. Maecenas mollis id nisl ut venenatis. Donec vulputate lacus mauris, ac tempus ante pretium quis. Praesent lobortis turpis cursus, imperdiet massa vel, placerat sapien. Ut nec neque id tellus pellentesque cursus. Nunc dapibus luctus porttito
                        </Text>
                    </ScrollView>
                </View>

                <View style={styles.iconsContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name="flight" style={styles.iconPlane} />
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="directions-bike" style={styles.iconBike} />
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="format-paint" style={styles.iconPaint}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="landscape" style={styles.iconLandscape}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="pool" style={styles.iconPool}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="pets" style={styles.iconPets}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="local-dining" style={styles.iconDinner}/>
                    </View>
                </View>

            </View>
        </View>
    );
};
export default Home;

