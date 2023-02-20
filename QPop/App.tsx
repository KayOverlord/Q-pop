import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './src/screens/FirstScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import SecondScreen from './src/screens/SecondScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
