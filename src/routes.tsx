import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './Home';
import Details from './Details';

const AppStack = createStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Home">
        <AppStack.Screen
          name="Home"
          options={{title: 'Tela Principal'}}
          component={Home}
        />
        <AppStack.Screen
          name="Details"
          options={{title: 'Tela de Detalhes'}}
          component={Details}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
