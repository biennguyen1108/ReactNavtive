import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { BackIcon } from "./BackIcon";
import items from "../../json/order";
import { SwipeListView } from "react-native-swipe-list-view";
export const Orders = () => {
  const [quantity, setQuantity] = useState(1);

  const handleReduce = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.containerOrder}>
      <View style={styles.mainOrder}>
        <BackIcon />
        <Text style={styles.textOrder}>Order Details</Text>
        <SwipeListView
          data={items}
          renderItem={({ item }) => (
            <View style={styles.listOrder}>
              <Image
                style={styles.imageItem}
                source={{ uri: `${item.image}` }}
              ></Image>
              <View>
                <Text style={{ fontSize: 15, fontWeight: "600" }}>
                  {item.restaurantName}
                </Text>
                <Text style={{ fontSize: 15, color: "#F0F0F0" }}>
                  {item.foodName}
                </Text>
                <Text
                  style={{ color: "#6B50F6", fontSize: 17, fontWeight: "800" }}
                >
                  {item.price}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.buttonReduce}
                onPress={handleReduce}
              >
                <Text style={{ color: "#6B50F6" }}>-</Text>
              </TouchableOpacity>
              <Text>{quantity}</Text>
              <TouchableOpacity
                style={styles.buttonIncrease}
                onPress={handleIncrease}
              >
                <Text style={{ color: "#fff" }}>+</Text>
              </TouchableOpacity>
            </View>
          )}
          renderHiddenItem={() => (
            <View style={[styles.listOrder, { backgroundColor: "blue" }]}>
              <TouchableHighlight style={styles.buttonDelete}>
                <View style={styles.rightButtonsContainer}>
                  <Image source={require("../../assets/Icontrash.png")} />
                </View>
              </TouchableHighlight>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-95}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerOrder: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  mainOrder: {
    marginHorizontal: 16,
    marginVertical: 8,
    flex: 1,

  },
  textOrder: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 10,
  },
  listOrder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 320,
    backgroundColor: "#fff",
    gap: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  imageItem: {
    height: 65,
    width: 65,
    borderRadius: 20,
  },
  buttonIncrease: {
    height: 20,
    width: 20,
    borderRadius: 5,
    backgroundColor: "#6B50F6",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonReduce: {
    height: 20,
    width: 20,
    borderRadius: 5,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rightButtonsContainer: {},
  buttonDelete: {},
});
