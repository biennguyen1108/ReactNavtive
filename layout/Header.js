import React from "react";
import { StyleSheet,View,TextInput,TouchableOpacity,Image } from "react-native";

export const Header = ({navigation}) => {
  return (
    <>
      <View style={styles.headerBar}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Tìm kiếm sản phẩm"
        ></TextInput>
      </View>
      <View style={styles.blogDiv}>
        <View style={styles.blogImage}>
          <TouchableOpacity onPress={()=>navigation.navigate("Orange")}>
            <Image
              style={styles.imageBlog}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTat20qX1Hg_Jcb7snKmvHMz-nB1yTyHOO9bg&usqp=CAU",
              }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Durian")}>
            <Image
              style={styles.imageBlog}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAKUwv7m9aP3HqXxU4lnnIR7wV0h3rGPYYA&usqp=CAU",
              }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Vegetable")}>
            <Image
              style={styles.imageBlog}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4CVVJbyKTacIsAXpuqRKBNMJM8597CHwMg&usqp=CAU",
              }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("AnimalFood")}>
            <Image
              style={styles.imageBlog}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkG7eh6GWjZo6Sqd-JgrA5EuFX0yZU3U95lIFVm3QDRXWzNhuvivchvfboB-u8AdkgtM&usqp=CAU",
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    headerBar: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }
      ,
      inputSearch: {
        width: 200,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingLeft: 10,
      },
      blogImage: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      },
      imageBlog: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "#fff",
      },
     blogDiv:{
        marginTop:20
     }

});
