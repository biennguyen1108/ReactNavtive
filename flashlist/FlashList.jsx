import React, { useEffect, useState } from 'react'
import { View,Text,FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native'

export const FlashList = ({navigation}) => {
  const [product,setProduct]=useState([])

  useEffect(()=>{
    fetch("https://63a572342a73744b008e2ce7.mockapi.io/API/Type_product",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      setProduct(data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  const renderItem=({item})=>{
    return(
    <View style={styles.flashListContainer}>
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetail",{id:item.id})}>
      <View style={styles.viewProduct}>
      <Image source={{uri:`${item.image}`}} style={styles.imageProduct}></Image>
      <Text>{item.title}</Text>
      <Text>{item.new_price}</Text>
      </View>
    </TouchableOpacity>
    </View>
    )
  }
  return (
    <View style={styles.viewContainer}>
      <FlatList
      data={product}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id.toString()}
      numColumns={2}
      >
      </FlatList>
    </View>
  )
}

const styles=StyleSheet.create({
  flashListContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:8,
    marginHorizontal:16
  },
  imageProduct:{
    width:100,
    height:60
  },
  viewContainer:{
    marginTop:30
  },
  viewProduct:{
    backgroundColor:"#DDDDDD"
  }
})