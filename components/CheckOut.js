import { useRoute } from "@react-navigation/native";
import React,{useEffect,useState} from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, View, Image, Text } from "react-native";
export const CheckOut = () => {
    const route=useRoute()
    const {id}=route.params
    const [checkout,setCheckOut]=useState("")
  useEffect(()=>{
    fetch(`https://63a572342a73744b008e2ce7.mockapi.io/API/Type_product/${id}`,{
      method:"GET",
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
        setCheckOut(data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[id])
  return (
    <View style={styles.checkOutContainer}>
      <View style={styles.bodyCheckout}>
        <View style={styles.productList}>
          <Image style={styles.image} source={{uri:`${checkout.image}`}}></Image>
          <View style={styles.textCheckout}>
            <Text>Sản phẩm: {checkout.title}</Text>
            <Text>Số lượng: 1</Text>
            <Text>Giá: {checkout.new_price}</Text>
          </View>
        </View>
        <View style={styles.formFill}>
          <View>
            <Text>Nhập địa chỉ</Text>
            <TextInput style={styles.inputFill} placeholder="Nhập địa chỉ giao hàng"></TextInput>
          </View>
          <View>
            <Text style={{paddingTop:10}}>Số điện thoại</Text>
            <TextInput style={styles.inputFill} placeholder="Số điện thoại"></TextInput>
          </View>
          <View>
            <Text style={{paddingTop:10}}>Dặn dò</Text>
            <TextInput multiline={true} numberOfLines={7} style={styles.inputArea}></TextInput>
          </View>
        </View>
        <View style={styles.confirmButton}>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:"#fff",fontWeight:700}}>Xác nhận</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  checkOutContainer: {
    flex: 1,
    backgroundColor: "#25D1B2",
  },
  bodyCheckout: {
    marginHorizontal: 16,
    marginVertical: 8,
    marginTop: 50,
  },
  productList: {
    width: 325,
    minHeight: 100,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 90,
    backgroundColor: "gray",
    marginTop: 5,
    marginLeft: 15,
    borderRadius: 5,
  },
  textCheckout: {
    paddingLeft: 20,
    marginTop: 5,
  },
  formFill:{
    marginTop:60,
    marginLeft:10
  },
  inputFill:{
    backgroundColor:"#fff",
    borderRadius:10,
    height:40,
    marginTop:15,
    paddingLeft:15
  },
  inputArea:{
    backgroundColor:"#fff",
    borderRadius:10,
    marginTop:15
  },
  confirmButton:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingTop:90
  },
  button:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    width:200,
    height:40,
    backgroundColor:"#5B4290",
    borderRadius:10
  }
});
