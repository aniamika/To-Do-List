import * as React from "./node_modules/react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react-native";

import Home from "./screens/home";
import TasksList from "./screens/tasksList";
import LastScreen from "./screens/lastScreen";

const HomeStack = createStackNavigator();
const TasksListStack = createStackNavigator();
const LastScreenStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen: FC = () => {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Navigator>
  );
};

const TasksListStackScreen: FC = () => {
  return (
    <TasksListStack.Navigator>
      <TasksListStack.Screen name="TasksList" component={TasksList} />
    </TasksListStack.Navigator>
  );
};

const LastScreenStackScreen: FC = () => {
  return (
    <LastScreenStack.Navigator>
      <LastScreenStack.Screen name="LastScreen" component={LastScreen} />
    </LastScreenStack.Navigator>
  );
};

const App: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName =  "ios-home";
                } else if (route.name === "TasksList") {
                  iconName =  "ios-list-box";
                } else if (route.name === "LastScreen") {
                  iconName = "ios-trophy";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "#518AFF",
              inactiveTintColor: "#798291",
            }}
          >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="TasksList" component={TasksListStackScreen} />
        <Tab.Screen name="LastScreen" component={LastScreenStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;