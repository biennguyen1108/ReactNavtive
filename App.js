import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Signup } from "./Auth/Signup";
import { Login } from "./Auth/Login";
import { HomePage } from "./components/HomePage";
import { Detail } from "./components/Detail";
import { CheckOut } from "./components/CheckOut";
import { Orange } from "./components/Orange";
import { Durian } from "./components/Durian";
import { AnimalFood } from "./components/AnimalFood";
import { Vegetable } from "./components/Vegetable";
import { Header } from "./layout/Header";
import { Product } from "./product/Product";
import { ToastProvider } from "react-native-toast-message";
import { Home } from "./demo/Home";
import { Search } from "./demo/Search";
import { View, Image } from "react-native";
import { ResultSearch } from "./demo/ResultSearch";
import { Chat } from "./demo/chat/Chat";
import { Message } from "./demo/chat/Message";
import { Calling } from "./demo/chat/Calling";
import { Orders } from "./demo/shop/Orders";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeStack(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="Result" component={ResultSearch}/>
    </Stack.Navigator>
  )
}

function Messages(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Chat" component={Chat}/>
      <Stack.Screen name="Message" component={Message}/>
      <Stack.Screen name="Calling" component={Calling}/>
    </Stack.Navigator>
  )
}


export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Trang Chủ"
          component={HomeStack}
          options={{
            tabBarIcon: () => (
              <View>
                <Image source={require("./assets/Home.png")}></Image>
              </View>
            ),
          }}
        >
        </Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={Signup}
          options={{
            tabBarIcon: () => (
              <View>
                <Image source={require("./assets/IconProfile.png")}></Image>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Shopping"
          component={Orders}
          options={{
            tabBarIcon: () => (
              <View>
                <Image source={require("./assets/IconCart.png")}></Image>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Tin nhan"
          component={Messages}
          options={{
            tabBarIcon: () => (
              <View>
                <Image source={require("./assets/IconChat.png")}></Image>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
