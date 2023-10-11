import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { Header } from "../layout/Header";

export const HomePage = ({navigation}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://63a572342a73744b008e2ce7.mockapi.io/API/Type_product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const itemRender = ({ item }) => {
    return (
      <View style={styles.flexProduct}>
      <TouchableOpacity onPress={()=>navigation.navigate("Detail",{id:item.id})}>
        <View style={styles.divProduct}>
          <Image
            style={styles.imageProduct}
            source={{ uri: `${item.image}` }}
          ></Image>
          <View style={{ paddingLeft: 5 }}>
            <Text>{item.title}</Text>
            <View style={styles.textPrice}>
              <Text>{item.new_price}</Text>
              <Text
                style={{ textDecorationLine: "line-through", color: "red" }}
              >
                {item.old_price}
              </Text>
            </View>
            <Text>Đã bán: 30</Text>
          </View>
        </View>
      </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.homePageContainer}>
      <Header navigation={navigation}/>
      <View style={styles.containerHomePage}>
        <View style={styles.textTop}>
          <Text>Tất cả sản phẩm</Text>
          <Text>Lọc sản phẩm</Text>
        </View>
        <View style={styles.blogProduct}>
          <FlatList
            data={product}
            renderItem={itemRender}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
    backgroundColor: "#25D1B2",
  },
  containerHomePage: {
    marginHorizontal: 16,
    marginVertical: 8,
    marginTop: 30,
  },
  
  textTop: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  blogProduct: {
    marginTop: 15,
    marginLeft: 7,
    minHeight: "100vh",
  },
  divProduct: {
    backgroundColor: "#fff",
    width: 150,
    height: 160,
    borderRadius: 10,
  },
  imageProduct: {
    width: 150,
    height: 90,
    borderRadius: 10,
  },
  textPrice: {
    flexDirection: "row",
    gap: 15,
  },
  flexProduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
});
