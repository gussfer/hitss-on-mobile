import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import Admin from "./screens/Admin"
import Login from "./screens/Login"
import {MainContextProvider} from "./contexts/MainContext"
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <MainContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Admin"
            component={Admin}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MainContextProvider>
  );


}

export default App

