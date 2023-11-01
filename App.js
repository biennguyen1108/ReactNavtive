import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, createContext, useContext, useEffect } from 'react';
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
import { View, Image , ActivityIndicator } from "react-native";
import { ResultSearch } from "./demo/ResultSearch";
import { Chat } from "./demo/chat/Chat";
import { Message } from "./demo/chat/Message";
import { Calling } from "./demo/chat/Calling";
import { Orders } from "./demo/shop/Orders";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});
const Tab = createBottomTabNavigator();

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
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
function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
// unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  );
}

export default function App() {
  
  return (
    <AuthenticatedUserProvider>
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
          component={AuthStack}
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
    </AuthenticatedUserProvider>
  );
}