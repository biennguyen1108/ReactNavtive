import React, { useEffect, useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Image, StyleSheet, View, Text } from "react-native";
export const Product = () => {
  const [click, setClick] = useState(false);
  const data = [
    {
      vi: "A",
      en: "AA",
    },
    {
      vi: "B",
      en: "BB",
    },
    {
      vi: "C",
      en: "CC",
    },
    {
      vi: "D",
      en: "DD",
    },
  ];

  const [character, setCharacter] = useState(data);
  const [pre, setPre] = useState(0);
  const handleChangeImage = () => {
    setClick(!click)
  };

  const handleNextItems = () => {
    if (pre<character.length-1) {
      setPre(pre+1)
      setClick(false)
    }
  };

  const handelPrevious = () => {
    if (pre > 0) {
      setPre(pre - 1);
      setClick(false)
    }
  };

  const handleRemove = () => {
    if (pre > 0) {
      setCharacter((preCharacter)=>{
        const newData = [...preCharacter];
        newData.splice(pre,1);
        setPre(pre - 1);
        return newData
      })
    }
  };

  const handleReset=()=>{
    setCharacter(data)
  }

  const currentCharacter=character[pre]
  return (
    <View style={styles.productContainer}>
      <View style={styles.divQuantity}>
        <Text>Có {character.length} sản phẩm</Text>
      </View>
      <Pressable onPress={handleChangeImage}>
        <View style={styles.productDiv}>
            <View style={styles.imageTag}>
              <Text style={{ fontSize: 36, color: "white" }}>
                {click? currentCharacter.en:currentCharacter.vi}
              </Text>
            </View>
        </View>
      </Pressable>
      <View style={styles.itemDiv}>
        <View style={styles.buttonText}>
          <TouchableOpacity onPress={handelPrevious}>
            <View style={styles.text1}>
                <Text style={{ color: "red" }}>Previous</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextItems}>
            <View style={styles.text2}>
              <View>
                <Text style={{ color: "red" }}>Next</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleRemove}>
        <View style={styles.removeText}>
          <View style={styles.removeDiv}>
            <Text style={{ color: "red" }}>Remove From Deck</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset}>
        <View style={styles.removeText}>
            <View style={styles.removeDiv}>
              <Text style={{ color: "red" }}>Reset Deck</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  productDiv: {
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "red",
    borderRadius: 10,
  },
  itemDiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  imageTag: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    borderRadius: 10,
  },
  buttonText: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 75,
  },
  text1: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text2: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  removeText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  removeDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
    width: 300,
    borderRadius: 10,
  },
  divQuantity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
});
