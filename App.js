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
      source={{uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/ig.jpg?raw=true"}}
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
function Backarrow() {
  return (
    <Image
      style={styles.backarrow}
      source={{uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/left-arrow.png?raw=true"}}
    />
  );
}
function DirectRight() {
  return(
    <View style={{flexDirection: "row",
                  justifyContent: "flex-start"
          }}
    >
      <Image
         style={{height:28,width:28,marginRight:24}}
         source={{uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/film.png?raw=true"}}
      />
      <Image
        style={{height:25,width:25,marginRight:12}}
        source={{uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/edit.png?raw=true"}}
      />
    </View>
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
          headerStyle: {height:80,backgroundColor:'#F8F8F8'},
          HeaderLeftStyle : {marginRight:0},
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
      <Stack.Screen name="Direct" component = {MessageScreen}
                    options={{
                      headerRight: props => <DirectRight {...props}/>,
                      headerStyle: {height:80,backgroundColor:'#F2F2F2'},
                      headerTitleStyle:{marginLeft:-12},
                      headerBackImage: props => <Backarrow {...props}/>
                    }}
      />
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
    height: 26,
    width: 90,
    marginLeft:-24,
    marginTop:5
  },
  HomeLeftLogo: {
    height: 24,
    width: 24,
    marginLeft:12
  },
  backarrow: {
    height: 24,
    width: 24,
  },
  HeaderRightStyle: {
    height: 24, 
    width: 24,
    marginRight: 12
  }
});

export default App;
