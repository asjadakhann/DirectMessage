import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  Image,
  InputAccessoryView,
  Keyboard,
  Linking,
  Platform,

  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Appearance ,
  View,
} from 'react-native';
import Share, { Social } from 'react-native-share';
import Main from './screen/main';
const Stack = createNativeStackNavigator();



function App (){
  // const navigation = useNavigation();
return(
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="MAIN" component={Main} options={{headerShown:false}} />
  </Stack.Navigator>
</NavigationContainer>

);

} 
export default App;
