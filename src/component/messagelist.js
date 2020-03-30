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
                <View>
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
        height: 72,
        paddingTop:16
    },
    thumbnailStyle: {
        height: 40,
        width: 40,
        marginLeft: 24,
        borderRadius:20
 
    },
    headerContainerStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 12,
        
    },
    messagename:{
        marginLeft: 24,
        fontSize:14
    },
    messagecomment:{
        marginLeft: 24,
        fontSize:12
    },
    accountnamestyle : {
        fontSize: 16
        
    },
    toolcolumnstyle:{
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 48,
        paddingLeft:16,
        paddingTop:12
    },
    tooliconstyle:{
        width:24,
        height:24,
        marginRight:24
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