import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import {
  Button,
  Container,
  ContainerBackFront,
  ContainerButtons,
  ContainerImg,
  ContainerInfos,
  ContainerInput,
  ImgInput,
  Input,
  LogoImg,
  TxtButton,
  TxtCadastro,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import Api from "../../service/Api";

export default function Registration() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [fone, setFone] = useState();
  const [blood, setBlood] = useState();

  const [level, setLevel] = useState(1);

  const registration = async () => {
    console.log("click");
    const res = await Api.cadastro(name, email, password, fone, blood);
    console.log(res);
    alert(res.msg);
  };

  const handleRight = () => {
    if (level == 1) {
      setLevel(2);
    } else if (level == 2) {
      setLevel(3);
    }
  };
  const handleLeft = () => {
    if (level == 2) {
      setLevel(1);
    } else if (level == 3) {
      setLevel(2);
    }
  };

  return (
    <Container source={require("../../assets/fundo.png")}>
      <ContainerImg>
        <LogoImg source={require("../../assets/logo.png")} />
      </ContainerImg>

      <ContainerInfos>
        {level == 1 && (
          <View>
            <ContainerInput>
              <ImgInput source={require("../../assets/perfil.png")} />

              <Input
                placeholderTextColor={"black"}
                placeholder={"Nome"}
                onChangeText={(t) => setName(t)}
                value={name}
              />
            </ContainerInput>

            <ContainerInput>
              <ImgInput source={require("../../assets/email.png")} />
              <Input
                placeholderTextColor={"black"}
                placeholder={"E-mail"}
                onChangeText={(t) => setEmail(t)}
                value={email}
              />
            </ContainerInput>
          </View>
        )}
        {level == 2 && (
          <View>
            <ContainerInput>
              <ImgInput source={require("../../assets/senha.png")} />
              <Input
                placeholderTextColor={"black"}
                placeholder={"Senha"}
                onChangeText={(t) => setPassword(t)}
                value={password}
              />
            </ContainerInput>
            <ContainerInput>
              <ImgInput source={require("../../assets/fone.png")} />
              <Input
                placeholderTextColor={"black"}
                placeholder={"Repita a senha"}
                onChangeText={(t) => setConfirmpassword(t)}
                value={confirmpassword}
              />
            </ContainerInput>
          </View>
        )}
        {level == 3 && (
          <View>
            <ContainerInput>
              <ImgInput source={require("../../assets/fone.png")} />
              <Input
                placeholderTextColor={"black"}
                placeholder={"Telefone para contato em caso de emergência"}
                onChangeText={(t) => setFone(t)}
                value={fone}
              />
            </ContainerInput>
            <ContainerInput>
              <ImgInput source={require("../../assets/sangue.png")} />
              <Input
                placeholderTextColor={"black"}
                placeholder={"Tipo sanguíneo"}
                onChangeText={(t) => setBlood(t)}
                value={blood}
              />
            </ContainerInput>
          </View>
        )}

        <ContainerButtons>
          <ContainerBackFront>
            {level !== 1 && (
              <Button onPress={handleLeft}>
                <AntDesign name="caretleft" size={20} color="white" />
              </Button>
            )}
            {level !== 3 && (
              <Button onPress={handleRight}>
                <AntDesign name="caretright" size={20} color="white" />
              </Button>
            )}
          </ContainerBackFront>
          {level == 3 && (
            <Button onPress={registration}>
              <TxtButton> CADASTRAR </TxtButton>
            </Button>
          )}

          <Button onPress={() => navigation.navigate("Login")}>
            <TxtCadastro>Já sou cadastrado!!!</TxtCadastro>
          </Button>
        </ContainerButtons>
      </ContainerInfos>
    </Container>
  );
}
