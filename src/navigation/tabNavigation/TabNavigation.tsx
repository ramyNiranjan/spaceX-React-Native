/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LaunchUpcomingStackScreen from '../StackNavigation/LaunchUpcomingStack';
import LaunchPastStackScreen from '../StackNavigation/LaunchPastStack';

type TabNavigationProps = {};

const Tab = createBottomTabNavigator();

export const TabNavigation: React.FC<TabNavigationProps> = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Past Launches" component={LaunchPastStackScreen} />
      <Tab.Screen
        name="Upcoming Launches"
        component={LaunchUpcomingStackScreen}
      />
    </Tab.Navigator>
  );
};
