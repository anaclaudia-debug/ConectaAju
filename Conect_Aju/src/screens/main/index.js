import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>
    </View>
  );
};

export default Main;