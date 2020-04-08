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
      style={styles.HomeLeftLogo}
      source={{uri: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MTInIGhlaWdo%0D%0AdD0nNTEyJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHRpdGxlPmlvbmljb25zLXY1LWE8L3RpdGxl%0D%0APjxwb2x5bGluZSBwb2ludHM9JzI0NCA0MDAgMTAwIDI1NiAyNDQgMTEyJyBzdHlsZT0nZmlsbDpu%0D%0Ab25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3Vu%0D%0AZDtzdHJva2Utd2lkdGg6NDhweCcvPjxsaW5lIHgxPScxMjAnIHkxPScyNTYnIHgyPSc0MTInIHky%0D%0APScyNTYnIHN0eWxlPSdmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7%0D%0Ac3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo0OHB4Jy8+PC9zdmc+"}}
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
         style={{height:30,width:28,marginRight:24}}
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
  HeaderRightStyle: {
    height: 24, 
    width: 24,
    marginRight: 12
  }
});

export default App;
