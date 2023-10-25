import React from 'react'
import {View,Image,TextInput,StyleSheet,Text} from "react-native"
export const ChatChit = () => {
  return (
    <View style={style.chatContainer}>
        <Image source={require("../../assets/SampleChating.png")}></Image>
        <View style={style.buttonChat}>
            <TextInput style={style.textMessage} placeholder='Okay Im waiting'></TextInput>
            <Image source={require("../../assets/Vector_1.png")}></Image>
        </View>
    </View>
  )
}

const style=StyleSheet.create({
    chatContainer:{
        marginTop:25
    },
    buttonChat:{
        position:"absolute",
        bottom:-250,
        height:50,
        width:321,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:"center",
        gap:6,
        borderRadius:10
    },
    textMessage:{
        width:270,
        paddingLeft:5,
    }
})