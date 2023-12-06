import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import SettingScreen from './screens/SettingScreen/SettingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';
import Tasks from './tabs/Tasks';
import Settings from './tabs/Settings';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import TaskDetails from './screens/TaskDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'black',
            height: 80,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          tabBarLabelStyle: {
            position: 'relative',
            top: -15,
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'black',
            height: 80,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          tabBarLabelStyle: {
            position: 'relative',
            top: -15,
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="profile" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'black',
            height: 80,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          tabBarLabelStyle: {
            position: 'relative',
            top: -15,
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="setting" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskDetails"
          component={TaskDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
