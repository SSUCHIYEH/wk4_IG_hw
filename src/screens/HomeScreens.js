import React from "react";
import {View, FlatList ,Image, Text ,ScrollView,StyleSheet} from "react-native"
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
            <View style={styles.tabbottom}>
                <Image
                style={styles.tabicon}
                source={{uri:"https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/home.png?raw=true"}}
                />
                <Image
                style={styles.tabicon}
                source={{uri:"https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/search.png?raw=true"}}
                />
                <Image
                style={styles.tabicon}
                source={{uri:"https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/plus.png?raw=true"}}
                />
                <Image
                style={styles.tabicon}
                source={{uri:"https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/like.png?raw=true"}}
                />
                <Image
                style={styles.tabicon}
                source={{uri:"https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/user.png?raw=true"}}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tabbottom:{
        width:360,
        height:48,
        backgroundColor:'#F8F8F8',
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingLeft:24,
        paddingTop:10
    },
    tabicon:{
        width:24,
        height:24,
        marginRight:48
    }
})

HomeScreen.navigationOptions = {
    title: '222'
}

export default HomeScreen;