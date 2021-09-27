import React from 'react';
import { Button } from "react-native";
import { Container } from '../Global/styles';

const Home = ({ navigation }) => {
    return (
      <Container>
        <Button
          title="Ir para o perfil de Jane"
          onPress={() =>
            navigation.navigate('Perfil', { name: 'Jane' })
          }
        />
      </Container>
    );
  };

export default Home;