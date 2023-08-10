import { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, Text } from 'react-native';
import styled from 'styled-components';


export const ListaOpe = ({ fun, id, setId }) => {  
 
  return (
    <Container>
        <Header>
          <ImgPerfil  source={{uri: `http://192.168.1.8:5000/${fun.photoperfil}`}}/>
          <Name>{fun.name}</Name>
        </Header>
        <ImgPost source={{uri:`http://192.168.1.8:5000/${fun.photo}`}}/>
     
    </Container>
  );
};

const Container = styled.View`
margin-top: 10px;
`;

const Header = styled.View`
flex-direction: row;
`

const ImgPerfil = styled.Image`
width: 50px;
height: 50px;
border-radius: 50px;
margin-left: 10px;
`

const Name = styled.Text`
font-weight: bold;
margin-left: 10px;
margin-top: 5px;
`

const ImgPost = styled.Image`
width: 200px;
height: 200px;

`