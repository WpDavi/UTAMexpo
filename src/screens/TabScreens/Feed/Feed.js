import React, { useEffect, useState } from 'react';

import Api from '../../../service/Api';
import { styled } from 'styled-components';
import { ListaOpe } from './componente/ListaOpe';

export default function Feed(){
  const [funcionario, setFuncionario] = useState()
  const [id, setId] = useState()
  useEffect(()=>{  
    async function getItem(){
      const res = await Api.getPost()
      console.log(res[0])
      setFuncionario(res[0])
    }
    getItem()
  },[]) 


  return(
    <Container>

       <Flat
        data={funcionario}
        renderItem={({ item, index }) => (
          <ListaOpe {...{ fun: { ...item, index }, id, setId }} />
        )}
          />
    </Container>
  )
}

const Container = styled.SafeAreaView`
flex: 1;
`
const Flat = styled.FlatList`
`