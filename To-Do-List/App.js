import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.home}>
      <Text>Home screen</Text>
    </View>
  );
}

function TasksListScreen({ navigation }) {
  return (
    <View style={styles.tasksList}>
      <Text>Tasks List screen</Text>
      <Button title="Add Task +" onPress={() => navigation.navigate('NewTask')}/>
    </View>
  );
}

function LastScreen({ navigation }) {
  return (
    <View>
      <Text>Last screen</Text>
    </View>
  );
}

function NewTaskScreen() {
  return (
    <View style={styles.newTask}>
      <Text>Create new task</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const TasksListStack = createStackNavigator();

function TasksListStackScreen() {
  return (
    <TasksListStack.Navigator>
      <TasksListStack.Screen name="TasksList" component={TasksListScreen} />
      <TasksListStack.Screen name="NewTask" component={NewTaskScreen} />
    </TasksListStack.Navigator>
  );
}

function LastScreenStackScreen() {
  return (
    <LastScreenStack.Navigator>
      <LastScreenStack.Screen name="LastScreen" component={LastScreen} />
    </LastScreenStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="TasksList" component={TasksListStackScreen} />
        <Tab.Screen name="LastScreen" component={LastScreenStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'grey',
  },
  tasksList: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'beige',
  },
  newTask: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'pink',
  },
  addButton: {
    borderRadius: 50,
    color: 'red',
    backgroundColor: '#f9c2ff',
  },
})