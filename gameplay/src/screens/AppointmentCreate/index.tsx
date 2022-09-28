import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Background } from '../../components/Background';

import { theme } from '../../global/styles/theme';



export function AppointmentCreate() {

  return (
    <Background>
      <Header
        title='Agendar partida'   
      />
    <Text  style ={styles.label}>
      Categoria
    </Text>

    </Background>
  )
}



