import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Api from "../../service/Api";
import { styled } from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const loginn = async () => {
    const res = await Api.signIn(email, senha);
    console.log('click')

    if (res.msg !== "Login") {
      alert(res.msg);
    } else {
      
      navigation.reset({
        index: 0,
        routes: [{ name: "MainTab" }],
      });
      await AsyncStorage.setItem('Login', 'feito')
    }
  };

  return (
    <Container source={require("../../assets/fundo.png")}>
      <ImgLogo source={require("../../assets/logo.png")} />

      <ContainerInfos>
        <ContainerInput>
          <ImgInput source={require("../../assets/email.png")} />
          <Input
            placeholderTextColor={"black"}
            placeholder={"E-mail"}
            onChangeText={(t) => setEmail(t)}
            value={email}
          />
        </ContainerInput>

        <ContainerInput>
          <ImgInput source={require("../../assets/senha.png")} />
          <Input
            placeholderTextColor={"black"}
            placeholder={"Senha"}
            onChangeText={(t) => setSenha(t)}
            value={senha}
          />
        </ContainerInput>

        <ContaButton onPress={loginn}>
          <TxtButton> ENTRAR </TxtButton>
        </ContaButton>

        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <TxtCadastro>Não sou cadastrado!!!</TxtCadastro>
        </TouchableOpacity>
      </ContainerInfos>
    </Container>
  );
}

const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

const ImgLogo = styled.ImageBackground`
  width: 300px;
  height: 300px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const ContainerInfos = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const ContainerInput = styled.View`
  background-color: #ffbf18;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  margin-top: 20px;
`;

const ImgInput = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const Input = styled.TextInput`
  margin-left: 10px;
  padding: 10px;
  width: 80%;
`;

const ContaButton = styled.TouchableOpacity`
  background-color: #092301;
  padding: 10px;
  margin-top: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #ffbf18;
  width: 60%;
  align-items: center;
`;

const TxtButton = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const TxtCadastro = styled.Text`
  color: white;
  margin-top: 20px;
`;
