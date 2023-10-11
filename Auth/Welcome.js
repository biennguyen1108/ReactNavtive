import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Welcome = ({navigation}) => {
    const background=require("../assets/Background_1.png")
  return (
         <ImageBackground source={background} style={styles.imageBackground}>
            <Text style={styles.textWhite}>Welcome to {"\n"}Hss!</Text>
            <Text style={styles.textBlack}>A Hub Where Whispers Echo{"\n"}Loudest</Text>
            <View style={styles.containerButton}>
              <Pressable style={styles.button}
              onPress={()=>navigation.navigate("Signup")}
              >
                  <Text style={styles.buttonLabel}>Sing up</Text>
              </Pressable>
            </View>
            <View>
            <TouchableOpacity
            style={styles.textAlreadyAccount}
            onPress={()=>navigation.navigate("Login")}
            >
              <Text style={styles.textAlready}>Already have an account? </Text>
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
            </View>
         </ImageBackground>
  )
}

const styles=StyleSheet.create({
    imageBackground:{
        flex:1
    },
    textWhite:{
      color:"white",
      fontSize:40,
      top:28,
      paddingLeft:20
    },
    textBlack:{
      fontSize:24,
      paddingLeft:20,
      top:28
    },
    containerButton:{
      width:250,
      height:50,
      backgroundColor:"black",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      top:330,
      borderRadius:10,
      marginLeft:55
    },
    button:{
      alignItems: 'center',
      justifyContent: 'center',
    },
      buttonLabel: {
      color: '#fff',
      fontSize: 16,
      fontWeight:"bold"
    },
    textAlreadyAccount:{
      flexDirection:"row",
      top:350,
      justifyContent:"center",
      alignItems:"center"
    },
    textAlready:{
      color:"white",
      fontWeight:"bold"
    }
    ,textLogin:{
      fontWeight:"bold"
    }

})