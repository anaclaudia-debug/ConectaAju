import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Introduction from './src/screens/introduction';
import PersonalLogin from './src/screens/personal_login'
import PersonalRegister from './src/screens/personal_register';
import LoginONG from './src/screens/login_ong';
import RegisterONG from './src/screens/register_ong';
import Main from './src/screens/main';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Introduction">
        <Stack.Screen name="Introduction" component={Introduction} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPessoal" component={PersonalLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={PersonalRegister} options={{ headerShown: false }} />
        <Stack.Screen name="LoginONG" component={LoginONG} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroONG" component={RegisterONG} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
