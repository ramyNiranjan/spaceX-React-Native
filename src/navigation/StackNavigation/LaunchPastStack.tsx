/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LauchPast from '../../screens/LaunchPast';
import Detail from '../../screens/Detail';

const LaunchPastStack = createStackNavigator();

function LaunchPastStackScreen() {
  return (
    <LaunchPastStack.Navigator>
      <LaunchPastStack.Screen name="Past Launch List" component={LauchPast} />
      <LaunchPastStack.Screen name="Details" component={Detail} />
    </LaunchPastStack.Navigator>
  );
}

export default LaunchPastStackScreen;
