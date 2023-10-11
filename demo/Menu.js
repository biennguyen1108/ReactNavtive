import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import menu from "../json/menu";
export const Menu = () => {
    const renderItem=({item})=>{
        return(
          <View style={styles.popularMenu}>
            <View style={styles.titleMenu}>
              <Image style={styles.imageMenu} source={{uri:`${item.image}`}}></Image>
              <View>
                <Text>{item.menuName}</Text>
                <Text>{item.restaurantName}</Text>
              </View>
            </View>
            <Text style={styles.titlePrice}>{item.price}</Text>
          </View>
        )
    }
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.textPopular}>Popular menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 20,
  },
  textPopular: {
    fontSize: 17,
    fontWeight: "800",
  },
  popularMenu: {
    height: 87,
    width: 320,
    backgroundColor: "#fff",
    marginLeft: 5,
    borderRadius: 8,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  imageMenu: {
    width: 64,
    height: 64,
    backgroundColor: "red",
    borderRadius: 10,
  },
  titleMenu: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
  },
  titlePrice: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: "700",
    color: "#6B50F6",
  },
});
