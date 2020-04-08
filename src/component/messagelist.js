import React from "react";
import {View, Image, Text, StyleSheet,TouchableOpacity} from "react-native";

const MessageList = ({post, navigation}) => {
    return (
        <View >
            <View style={styles.thumbnailContainerStyle}>
                <Image
                     style={styles.thumbnailStyle}
                     source={{
                         uri: post.headphoto
                     }}
                />
                <View style={{width:246,height:57}}>
                    <Text style={styles.messagename}>{post.account}</Text>
                    <Text style={styles.messagecomment}>{post.comment}</Text>
                </View>
                <Image
                    style={styles.tooliconstyle}
                    source={{
                        uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/Camera.png?raw=true"
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 83,
        paddingTop:13,
        
    },
    thumbnailStyle: {
        height: 57,
        width: 57,
        marginLeft: 12,
        borderRadius:35
 
    },
    headerContainerStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 12,
        
    },
    messagename:{
        marginTop:10,
        marginLeft: 24,
        fontSize:14
    },
    messagecomment:{
        marginLeft: 24,
        fontSize:12,
        color:'#989898'
    },
    accountnamestyle : {
        fontSize: 16
        
    },
    toolcolumnstyle:{
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 48,
        paddingLeft:16,
        paddingTop:10
    },
    tooliconstyle:{
        width:26,
        height:26,
        marginRight:24,
        marginTop:15

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

export default MessageList;