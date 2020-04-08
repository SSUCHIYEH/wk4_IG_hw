import React from "react";
import {View, Image, Text, StyleSheet,TouchableOpacity} from "react-native";

const PostDetail = ({post, navigation}) => {
    return (
        <View >
            <View style={styles.thumbnailContainerStyle}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{
                        uri: post.headphoto
                    }}
                />
                <View style={styles.headerContainerStyle}>
                <Text style={styles.accountnamestyle}>{post.account}</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <TouchableOpacity  onPress={()=>navigation.navigate('Direct')}>
                    <Image
                        style={styles.imageStyle}
                        source={{
                            uri: post.postphoto
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles.toolcolumnstyle ]}>
            <Image
                    style={styles.tooliconstyle}
                    source={{
                        uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/like.png?raw=true"
                    }}
            />
            <Image
                    style={styles.tooliconstyle}
                    source={{
                        uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/comment.png?raw=true"
                    }}
            />
            <Image
                    style={styles.tooliconstyle}
                    source={{
                        uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/Message.png?raw=true"
                    }}
            />
            <Image
                    style={[styles.tooliconstyle,styles.thelasttooliconstyle]}
                    source={{
                        uri: "https://github.com/tsaiyuyes7/wk4_IG_hw/blob/master/assets/icon/Tag.png?raw=true"
                    }}
            />
            </View>
            
            <View style={styles.textsection}>
                <Text style={{fontWeight:'bold'}}>{post.numberoflike}</Text>
                <Text style={{width:331}}>{post.account}{post.comment}</Text>
                
            </View>
            
        </View>
)};

const styles = StyleSheet.create({
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 56
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
        fontSize: 15,
        fontWeight:'800'
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
        marginLeft:180
    },
    imageStyle: {
        width: null,
        height: 300
        
    }
});

export default PostDetail;