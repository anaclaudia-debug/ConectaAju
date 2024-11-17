import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Página Principal</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PersonalRegister')}>
        <Text style={styles.buttonText}>Ir para Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;