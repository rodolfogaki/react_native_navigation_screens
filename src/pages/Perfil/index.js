import React from 'react';
import { View, Text } from "react-native";
//import { styles } from './styles';
import { Container } from '../Global/styles';

const Perfil = ({ navigation, route }) => {
    return (
      <Container>
        <Text>Este é o perfil de {route.params.name}</Text>
      </Container>
    )
  };

export default Perfil;