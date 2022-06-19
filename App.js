import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./components/HomeScreen";
import Technical from './components/Technical'
import Science from './components/Science'
import Sports from './components/Sports'
import Entertainment from './components/Entertainment'
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: { backgroundColor: "#161717", alignItems: 'center' },
          headerShown: false,
          tabBarActiveTintColor: 'yellow',
        })}
      >


        <Tab.Screen
          name="General News"
          component={HomeScreen}
          options={{
            tabBarIcon: ()=> <Entypo name="home" size={24} color='white'/>
          }}
        />
        <Tab.Screen 
          name="Technical News" 
          component={Technical}
          options={{
            tabBarIcon: ()=> <FontAwesome5 name="laptop-code" size={24} color="white" />
          }}
        />
        <Tab.Screen 
          name="Science News" 
          component={Science}
          options={{
            tabBarIcon: ()=> <MaterialIcons name="science" size={24} color="white" />
          }}
        />
        <Tab.Screen 
          name="Sports News" 
          component={Sports}
          options={{
            tabBarIcon: ()=> <Entypo name="sports-club" size={24} color="white" />
          }}
        />
        <Tab.Screen 
          name="Entertainment" 
          component={Entertainment}
          options={{
            tabBarIcon: ()=> <Feather name="tv" size={24} color="white" />
          }}
        />

        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});