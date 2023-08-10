import React, { useEffect, useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";

import Api from "../../../service/Api";
import { styled } from "styled-components";
import { ListaOpe } from "./componente/ListaOpe";
import { Button, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ModaImg } from "./componente/modalImg";

export default function Feed() {
  const [funcionario, setFuncionario] = useState();
  const [id, setId] = useState();
  const [image, setImage] = useState(null);

  const [modalImg, setModalImg] = useState(true);

  useEffect(() => {
    async function getItem() {
      const res = await Api.getPost();
      setFuncionario(res[0]);
    }
    getItem();
  }, []);

  const handleImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setModalImg(true);
    }
  };
  async function handleSand() {
    await Api.UplodPost(image);
  }

  return (
    <Container>
      <ConHeader>
        <ItensHeader>
          <TouchableOpacity
            onPress={() => {
              alert("ainda não implementado");
            }}
          >
            <ImgUTAM
              resizeMode={"contain"}
              source={require("../../../assets/UTAM.png")}
            />
          </TouchableOpacity>
          <ConIconsHeader>
            <ButtonHeader onPress={handleImg}>
              <Entypo name="camera" size={20} color="#142b09" />
            </ButtonHeader>

            <ButtonHeader>
              <Ionicons name="notifications-sharp" size={20} color="#142b09" />
            </ButtonHeader>
          </ConIconsHeader>
        </ItensHeader>
      </ConHeader>
      <Flat
        data={funcionario}
        renderItem={({ item, index }) => (
          <ListaOpe {...{ fun: { ...item, index }, id, setId }} />
        )}
      />
      <ModaImg modalImg={modalImg} setModalImg={setModalImg} image={image} />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
`;
const ConHeader = styled.View`
  border-bottom-width: 1px;
  border-color: #142b09;
  padding-bottom: 3px;
`;

const ItensHeader = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: space-between;
`;

const ImgUTAM = styled.Image`
  width: 100px;
  height: 30px;
`;

const ConIconsHeader = styled.View`
  flex-direction: row;
`;

const ButtonHeader = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

const Flat = styled.FlatList``;
