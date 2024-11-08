import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Introduction = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Bem-vindo ao ConectAju</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginPessoal')}
      >
        <Text style={styles.buttonText}>Login Pessoal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginONG')}
      >
        <Text style={styles.buttonText}>Login ONG</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Introduction;
