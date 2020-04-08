import React from "react";
import {View, FlatList ,Image, Text ,ScrollView} from "react-native"
import PostDetail from "../component/postlist.js"
import PostData from "../json/post.json"

const HomeScreen = ({navigation}) => {
    
    return (
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
            
            <FlatList 
                data = {PostData.postList}
                renderItem = {({item}) =>
            <PostDetail
                post = {item}
                navigation = {navigation}
            />}
            keyExtractor = {item => item.account}
            />
        </View>
    );
};

HomeScreen.navigationOptions = {
    title: '222'
}

export default HomeScreen;