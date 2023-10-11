import { useRoute } from '@react-navigation/native'
import React from 'react'
import {View,Text,StyleSheet} from "react-native"
export const ProductDetail = () => {
    const route=useRoute()
    const {id}=route.params
  return (
    <View>
        <Text style={style.textView}>Chi tiết sản phẩm #{id}</Text>
    </View>
  )
}

const style=StyleSheet.create({
    textView:{
        marginTop:50
    }
})