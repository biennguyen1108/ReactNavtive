import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
export const Login = ({navigation}) => {
  const [login,setLogin]=useState({emailPhone:"",password:""})
  
  const handleInputElement=(fieldName,text)=>{
    setLogin({
      ...login,[fieldName]:text
    })
  }
  const handleSubmit=()=>{
  //   e.preventDefault()
  //  console.log(login);
  navigation.navigate("Home")
  }
  return (
    <View style={styles.loginContainer}>
      <View style={[styles.loginBg, styles.loginChild]}></View>
      <View style={[styles.loginBg, styles.loginItem]}></View>
      <View style={styles.loginForm}>
        <View>
          <Text style={{ paddingLeft: 15, paddingBottom: 10 }}>
            Email hoặc số điện thoại
          </Text>
          <TextInput
            value={login.emailPhone}
            placeholder="Nhập email hoặc số điện thoại"
            style={styles.inputForm}
            onChangeText={(text)=>handleInputElement("emailPhone",text)}
          ></TextInput>
        </View>
        <View>
          <Text style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 30 }}>
            Mật khẩu
          </Text>
          <TextInput
            value={login.password}
            placeholder="Nhập mật khẩu"
            style={styles.inputForm}
            onChangeText={(text)=>handleInputElement("password",text)}
          ></TextInput>
        </View>
        <TouchableOpacity>
          <Text style={styles.textForgetPass}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLoginContainer} onPress={handleSubmit}>
          <View style={styles.button} >
            <Text style={{ color: "#fff", fontWeight: "700" }}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.buttonLoginContainer}>
          <Text>Chưa có tài khoản? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
            <Text style={{color:"#4111CA"}}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#25D1B2",
  },
  loginBg: {
    backgroundColor: "#fff",
    borderRadius: 50,
    position: "absolute",
  },
  loginChild: {
    top: 166,
    left: -60,
    width: 187,
    height: 86,
  },
  loginItem: {
    top: 101,
    width: 165,
    height: 78,
    left: -92,
  },
  loginForm: {
    marginVertical: 8,
    marginHorizontal: 16,
    marginTop: 320,
  },
  inputForm: {
    paddingLeft: 15,
    width: 320,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  textForgetPass: {
    paddingTop: 25,
    paddingLeft: 15,
  },
  buttonLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
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
