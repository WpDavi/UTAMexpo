import { Dimensions } from "react-native";
import { Image } from "react-native";
import styled from "styled-components";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import BASE_API from '../../../../service/Api'

export const ListaOpe = ({ fun, id, setId }) => {
  const screenWidth = Dimensions.get("window").width;
  const imageAspectRatio = 16 / 9;

 
//const BASE_API = "http://192.168.0.62:5000";
const BASE_API = 'http://192.168.1.8:5000';


  const imageHeight = screenWidth / imageAspectRatio;
  return (
    <Container>
      <Header>
        <ConImgName>
          <ImgPerfil
            source={{ uri: `${BASE_API}/${fun.photoperfil}` }}
          />
          <Name>{fun.name}</Name>
        </ConImgName>
        <TxtNum>Operador {fun.number}</TxtNum>
      </Header>
      <Body>
        <Image
          source={{
            uri: `${BASE_API}/${fun.photo}`,
          }}
          style={{ width: screenWidth, height: imageHeight }}
        />
        <Footer>
          <TxtStatus>{fun.status}</TxtStatus>
          <ContButtons>
            <TouchaButton>
              <FontAwesome name="comments" size={20} color="#142b09" />
            </TouchaButton>
            <TouchaButton>
              <Entypo name="download" size={20} color="#142b09" />
            </TouchaButton>
          </ContButtons>
        </Footer>
      </Body>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding-bottom: 3px;
`;

const ConImgName = styled.View`
  flex-direction: row;
`;

const TxtNum = styled.Text`
  align-self: flex-end;
  margin-right: 10px;
`;

const ImgPerfil = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  margin-left: 10px;
`;

const Name = styled.Text`
  font-weight: bold;
  margin-left: 10px;
`;

const Body = styled.View``;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: #cacdd2;
  padding-bottom: 3px;
`;

const TxtStatus = styled.Text`
  flex-wrap: wrap;
  width: 70%;
  margin-left: 10px;
`;

const ContButtons = styled.View`
  flex-direction: row;
  margin-right: 10px;
`;
const TouchaButton = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: 10px;
`;
