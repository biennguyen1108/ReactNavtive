import React from 'react'
import { StyleSheet, View,Text,Image } from 'react-native'

export const TopNav = () => {
  return (
    <View style={styles.viewTextDivTop}>
          <Text style={styles.textTopView}>Find your {"\n"}Favorite food</Text>
          <View style={styles.iconNotification}>
            <Image source={require("../assets/IconNotifiaction.png")}></Image>
          </View>
        </View>
  )
}

const styles=StyleSheet.create({
    viewTextDivTop: {
        marginTop: 50,
        flexDirection: "row",
      },
      textTopView: {
        fontSize: 35,
        fontWeight: "700",
      },
      iconNotification: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 55,
        backgroundColor: "#e3e3e3",
        borderRadius: 12,
        position: "absolute",
        left: 260,
        top: 20,
      },
})