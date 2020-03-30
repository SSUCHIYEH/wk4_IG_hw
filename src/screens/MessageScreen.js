import React from "react";
import {View, Text ,FlatList} from "react-native"
import Messagelist from "../component/messagelist.js"
import MessageData from "../json/message.json"

const MessageScreen = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <FlatList 
                data = {MessageData.messageList}
                renderItem = {({item}) =>
            <Messagelist
                post = {item}
                navigation = {navigation}
            />}
            keyExtractor = {item => item.account}
            />
        </View>
    );
};

export default MessageScreen;