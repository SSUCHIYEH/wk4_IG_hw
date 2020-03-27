import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreens.js';
import MessageScreen from './src/screens/MessageScreen.js';


//儲存參與stack導覽的頁面
const Stack = createStackNavigator();

function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component = {HomeScreen}/>
      <Stack.Screen name="Message" component = {MessageScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
