import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View,Image ,TouchableOpacity } from 'react-native';
import HomeScreen from './src/screens/HomeScreens.js';
import MessageScreen from './src/screens/MessageScreen.js';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

function LogoTitle() {
  return (
    <Image
      style={styles.HomeHeaderLogo}
      source={{uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/Instagram.png?raw=true"}}
    />
  );
}
function LeftTitle() {
  return (
    <Image
      style={styles.HomeLeftLogo}
      source={{uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/Camera.png?raw=true"}}
    />
  );
}

//儲存參與stack導覽的頁面
const Stack = createStackNavigator();
const stackref = React.createRef();

function App() {
  return (
   <NavigationContainer ref={stackref}>
     <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component = {HomeScreen} 
        options={{ 
          headerLeft: props => <LeftTitle {...props} /> ,
          headerTitle: props => <LogoTitle {...props} /> ,
          headerRight: () => (
            <TouchableOpacity  
            onPress={()=>stackref.current?.navigate('Direct')}>
                    <Image
                        style={styles.HeaderRightStyle}
                        source={{
                            uri:"https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/Message.png?raw=true" 
                        }}
                    />
            </TouchableOpacity>
            )
        }} 
      />
      <Stack.Screen name="Direct" component = {MessageScreen}/>
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
  HomeHeaderLogo: {
    height: 42,
    width: 109
  },
  HomeLeftLogo: {
    height: 24,
    width: 24,
    paddingRight: -16
  },
  HeaderRightStyle: {
    height: 24,
    width: 24,
    marginRight: 16
  }
});

export default App;
