import React from "react";
import {StyleSheet,View, Text ,FlatList,Image} from "react-native"
import Messagelist from "../component/messagelist.js"
import MessageData from "../json/message.json"

const MessageScreen = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
            <View style={styles.searchsection}>
                <View style={styles.searchbar}>
                    <Image
                        style={{height:18,width:18,marginLeft:8,marginTop:8}}
                        source={{uri : "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/search.png?raw=true"}}
                    />
                <Text style={{marginLeft:10,marginTop:6,color:'#989898'}}>搜尋</Text>
                </View>
            </View>
            <View style={{paddingLeft:16,paddingTop:4,height:36}}>
                <Text style={{fontSize:16}}>訊息</Text></View>
            <FlatList 
                data = {MessageData.messageList}
                renderItem = {({item}) =>
            <Messagelist
                post = {item}
                navigation = {navigation}
            />}
            keyExtractor = {item => item.account}
            />

        <View style={styles.tabbottom}>
            <Image
                source={{uri :"https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/bluecamera.png?raw=true"}}
                style={styles.tabimg}
            />
            <Text style={{color:'#2389CA',marginLeft:12,marginTop:4,fontWeight:'bold'}}>相機</Text>
        </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    searchsection:{
        
        height:68
    },
    searchbar:{
        flexDirection:"row",
        justifyContent:"flex-start",
        borderColor: "#C8C8C8",
        borderWidth:1,
        marginLeft:16,
        marginTop:16,
        borderRadius:5,
        width:330,
        height:34
    },
    tabbottom:{
        flexDirection:"row",
        justifyContent:"flex-start",
        backgroundColor:'#FBFBFB',
        height:48,
        width:360,
        paddingLeft:143,
        paddingTop:12,
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 10},
        shadowOpacity: 1.0,
        elevation: 20
    },
    tabimg:{
        width:24,
        height:24
    }

})

export default MessageScreen;