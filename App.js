import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Homescreen from './app/Homescreen';
import Videoshow from './app/Videoshow';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcomes">
        <Stack.Screen name="Welcomes" component={Homescreen} />
        <Stack.Screen name="Videoshow" component={Videoshow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
