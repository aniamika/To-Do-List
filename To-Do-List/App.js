import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/home';
import TasksList from './components/tasksList';
import LastScreen from './components/lastScreen';
import NewTask from './components/newTask';

const HomeStack = createStackNavigator();
const TasksListStack = createStackNavigator();
const LastScreenStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Navigator>
  );
}

function TasksListStackScreen() {
  return (
    <TasksListStack.Navigator>
      <TasksListStack.Screen name="TasksList" component={TasksList} />
      <TasksListStack.Screen name="NewTask" component={NewTask} />
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