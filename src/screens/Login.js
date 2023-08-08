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

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const login = async () => {
    navigation.navigate("MainTab")

  };

  return (
    <ImageBackground
      style={{ flex: 1, alignItems: "center" }}
      source={require("../assets/fundo.png")}
    >
      <View style={{ flex: 0.8, justifyContent: "center" }}>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../assets/logo.png")}
        />
      </View>

      <View style={styles.containerinfo}>
        <View style={styles.containerinput}>
          <Image
            style={styles.imginput}
            source={require("../assets/email.png")}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            placeholder={"E-mail"}
            onChangeText={(t) => setEmail(t)}
            value={email}
          />
        </View>

        <View style={styles.containerinput}>
          <Image
            style={styles.imginput}
            source={require("../assets/senha.png")}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor={"black"}
            placeholder={"Senha"}
            onChangeText={(t) => setSenha(t)}
            value={senha}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.txtbutton}> ENTRAR </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={styles.txtcadastro}>Não sou cadastrado!!!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerinfo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  containerinput: {
    backgroundColor: "#FFBF18",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    width: "80%",
    marginTop: 20,
  },

  imginput: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    padding: 10
  },

  button: {
    backgroundColor: "#092301",
    padding: 10,
    marginTop: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFBF18",
    width: "60%",
    alignItems: "center",
  },

  txtbutton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  txtcadastro: {
    color: "white",
    marginTop:20
  },
});
