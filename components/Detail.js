import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

export const Detail = ({navigation}) => {
  const route =useRoute()
  const {id}=route.params
  const [detail,setDetail]=useState("")
  useEffect(()=>{
    fetch(`https://63a572342a73744b008e2ce7.mockapi.io/API/Type_product/${id}`,{
      method:"GET",
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      setDetail(data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[id])
  return (
    <View style={styles.detailContainer}>
      <View style={styles.searchInput}>
        <TextInput
          style={styles.search}
          placeholder="Tìm kiếm sản phẩm"
        ></TextInput>
      </View>
      <View style={styles.productContainer}>
          <Image style={styles.imageProduct} source={{uri:`${detail.image}`}}></Image>
        <View style={styles.infoDetail}>
          <View style={styles.textDetail}>
            <Text>Tên sản phẩm:{detail.title} </Text>
            <Text>Số lượng đã bán:30</Text>
            <Text>Số lượng còn:16</Text>
            <Text>Giá: {detail.new_price}</Text>
            <Text style={{color:"red", textDecorationLine:"line-through"}}>Giá cũ: {detail.old_price}</Text>
            <Text>Mô tả: Rất ngon và phù hợp cho nhưng bạn đang có những tâm trạng buồn bã để có thể thưởng thức món này. {"\n"}Đặc biệt là: Ăn vào sẽ có
            người yêu liền đừng lo về vấn đề ế, lo sợ không có người yêu khi mua hàng của chúng tôi.</Text>
          </View>
          <View style={styles.payButton}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("CheckOut",{id:detail.id})}>
              <Text style={{ color: "#fff", fontWeight: 700 }}>Mua ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: "#25D1B2",
  },
  searchInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  search: {
    width: 200,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 10,
  },
  productContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    marginTop: 40,
  },
  imageProduct: {
    width: 325,
    height: 250,
    borderRadius: 10,
  },
  infoDetail: {
    width: 325,
    height: 450,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 20,
  },
  payButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 140,
  },
  button: {
    backgroundColor: "#5B4290",
    width: 180,
    height: 45,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textDetail:{
    paddingLeft:20,
    paddingTop:20
  }
});
