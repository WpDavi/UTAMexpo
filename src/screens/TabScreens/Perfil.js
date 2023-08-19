import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";

export default function Perfil() {
    const navigation = useNavigation()
    return(
        <View>
            <Text>Perfil</Text>
            <Button onPress={()=>{navigation.navigate('Login')}} title={'teste'} />
        </View>
    )
}