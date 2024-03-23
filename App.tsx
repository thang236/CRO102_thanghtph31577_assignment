import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screen/login';
import Welcome from './component/welcome';
import MainContainer from './component/mainContainer';
import SettingsScreen from './screen/setting';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Main' component={MainContainer} options={{ headerShown: false }} />
        <Stack.Screen name='Setti' component={SettingsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})