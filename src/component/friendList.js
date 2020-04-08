import React from "react";
import {View, Image, Text, StyleSheet,TouchableOpacity} from "react-native";

const FriendList = ({post, navigation}) => {
    return (
        <View style={{flexDirection: "row",
        justifyContent: "flex-start",
        height: 95}}>
            <View>
                <Image
                    source={post.headphoto}
                    style={{height:66,width:66}}
                />
                <Text>{post.account}</Text>
           </View>
        </View>
)};

const styles = StyleSheet.create({
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 95
    },
    likesection:{ 
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    textsection:{
       paddingLeft:12,
       marginBottom:16
    },
    thumbnailStyle: {
        height: 32,
        width: 32,
        borderRadius:20,
        marginLeft:12,
        marginTop:12
    },
    likehead:{
        height:16,
        width:16
    },
    headerContainerStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 12,
        
    },
    accountnamestyle : {
        fontSize: 16
    },
    toolcolumnstyle:{
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 48,
        paddingLeft:12,
        paddingTop:12
    },
    tooliconstyle:{
        width:24,
        height:24,
        marginRight:19
    },
    thelasttooliconstyle:{
        width:30,
        height:29,
        marginLeft:160
    },
    imageStyle: {
        width: null,
        height: 300
        
    }
});

export default FriendList;