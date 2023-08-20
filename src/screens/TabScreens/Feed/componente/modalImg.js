import { Modal } from "react-native";
import { styled } from "styled-components";
import Api from "../../../../service/Api";
import { ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const ModaImg = ({ modalImg, setModalImg, image }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalImg}
      onRequestClose={() => {
        setModalImg(!setModalImg);
      }}
    >
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
      
        <Img
        resizeMode={"contain"}
          source={{
            uri: image,
          }}
        />
        <TxtInput 
        placeholder={"Descrição"}/>
           
      </Container>
      </KeyboardAwareScrollView>     
      
    </Modal>
  );
};

const Container = styled.View`
flex: 1;
`;

const Img = styled.Image`
  width: 100%;
  height: 50%;
  margin-top: 20px;
`;

const TxtInput = styled.TextInput`
border-width: 1px;
height: 90px;
width: 90%;
border-radius: 10px;
align-self: center;
font-size: 15px;
text-align: center;
`