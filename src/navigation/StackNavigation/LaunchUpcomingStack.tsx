/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LauchUpcoming from '../../screens/LaunchUpcoming';
import Detail from '../../screens/Detail';

const launchUpcomingStack = createStackNavigator();

function LaunchUpcomingStackScreen() {
  return (
    <launchUpcomingStack.Navigator>
      <launchUpcomingStack.Screen
        name="Upcoming Launch List"
        component={LauchUpcoming}
      />
      <launchUpcomingStack.Screen name="Details" component={Detail} />
    </launchUpcomingStack.Navigator>
  );
}

export default LaunchUpcomingStackScreen;
