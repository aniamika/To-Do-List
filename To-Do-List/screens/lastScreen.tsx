import * as React from "react";
import { Text, FC, View, StyleSheet, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
    lastScreen: {
        display: "flex",
        width: "100%",
        padding: 10,
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginBottom: 5,
        padding: 10,
        borderWidth: 3,
        borderColor: "#518AFF",
        backgroundColor: "#F6F7FC",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    iconsContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
    },
    iconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F7FC",
        padding: 25,
        margin: 8,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});

const LastScreen: FC = ({ navigation }) => {
    return (
        <View style={styles.lastScreen}>
            <ScrollView>
                <View style={styles.iconsContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name="location-city" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="palette" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="school" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="spa" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="train" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="videogame-asset" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="toys" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="time-to-leave" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="terrain" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="store" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="subway" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="smoking-rooms" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="snooze" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="shopping-cart" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="shopping-basket" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="settings-phone" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="sentiment-very-satisfied" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="rowing" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="restaurant" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="print" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="radio" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="restaurant-menu" style={styles.icon}/>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce blandit eros id odio vestibulum, nec sollicitudin mi sagittis.
                            Nulla sit amet enim vitae ipsum interdum tempus nec sit amet elit.
                        </Text>
                    </View>

                </View>
            </ScrollView>

        </View>
    );
};
export default LastScreen;
