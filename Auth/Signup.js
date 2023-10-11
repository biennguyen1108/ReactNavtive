import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  // ToastAndroid,
} from "react-native";
// import Toast from "react-native-toast-message";
export const Signup = ({ navigation }) => {
    const [signup,setSignup]=useState({
      fullName:"",
      emailPhone:"",
      password:""
    })

    const handleInputElement=(fieldName,text)=>{
        setSignup({
          ...signup,
          [fieldName]:text
        })
    }
    
    const handleRegister=()=>{
      fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
          Accept: 'application/json',
          "Content-Type":"application/json"
        },
        body:JSON.stringify(signup)
      })
      .then((res)=>res.json())
      .then((data)=>{
        alert("Thành công")
      })
      .catch((error)=>{
        // ToastAndroid.show("Failed",ToastAndroid.SHORT)
        // Toast.show({
        //   type:"warning",
        //   text1:"Success",
        //   text2:"Register successfully",
        //   visibilityTime:3000,
        //   autoHide:false
        // })
        // alert(error)
      })
    }
  return (
    <View style={styles.signContainer}>
      <View style={[styles.firstCloud, styles.cloudTransform]}></View>
      <View style={[styles.cloudTransform, styles.secondCloud]}></View>
      <View style={styles.signFormContainer}>
        <View>
          <Text style={{ paddingLeft: 15, paddingBottom: 10 }}>Họ và tên</Text>
          <TextInput
          value={signup.fullName}
            placeholder="Nhập họ và tên"
            style={styles.inputForm}
            onChangeText={(text)=>handleInputElement("fullName",text)}
          ></TextInput>
        </View>
        <View>
          <Text style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 20 }}>
            Email hoặc số điện thoại
          </Text>
          <TextInput
          value={signup.emailPhone}
            placeholder="Nhập emal hoặc số điện thoại"
            style={styles.inputForm}
            onChangeText={(text)=>handleInputElement("emailPhone",text)}
          ></TextInput>
        </View>
        <View>
          <Text style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 20 }}>
            Mật khẩu
          </Text>
          <TextInput
          value={signup.password}
            placeholder="Nhập mật khẩu"
            style={styles.inputForm}
            onChangeText={(text)=>handleInputElement("password",text)}
          ></TextInput>
        </View>
      </View>
      <View style={styles.signButton}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={{ color: "#fff", fontWeight: 700 }}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signButton}>
        <Text>Đã có tài khoản ? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
          <Text style={{ color: "#4111CA" }}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  signContainer: {
    flex: 1,
    backgroundColor: "#25D1B2",
  },
  firstCloud: {
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "#fff",
    left: 90,
    top: -10,
  },
  cloudTransform: {
    width: 168,
    height: 86,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  secondCloud: {
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "#fff",
    left: 150,
    top: -40,
  },
  signFormContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    marginTop: 250,
  },
  inputForm: {
    width: 325,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 15,
  },
  signButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#5B4290",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
