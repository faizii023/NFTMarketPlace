import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Home from './Screens/Home';
import Detail from './Screens/Detail';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme.colors,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Inter-Medium"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "Inter-Bold"
  }
});
export default App;
