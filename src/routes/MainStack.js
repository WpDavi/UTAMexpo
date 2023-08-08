import React from "react";


import Login from "../screens/Login";
import Registration from "../screens/Registration/Registration";
import PreLogin from "../screens/PreLogin";

import MainTab from "./MainTab";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function MainStack() {
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>          
            
            <Stack.Screen name="PreLogin" component={PreLogin} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MainTab" component={MainTab} />

        </Stack.Navigator>
    )
}