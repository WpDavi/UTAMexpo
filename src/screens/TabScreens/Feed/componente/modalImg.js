import { Text } from "react-native";
import { Image } from "react-native";
import { Modal } from "react-native";
import { styled } from "styled-components";

export const ModaImg = ({ modalImg, setModalImg, image }) => {
  console.log(image);
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalImg}
      onRequestClose={() => {
        setModalImg(!setModalImg);
      }}
    >
      <Container>
        <Img
          source={{
            uri: image,
          }}
        />
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Img = styled.Image`
  width: 100px;
  height: 100px;
`;
