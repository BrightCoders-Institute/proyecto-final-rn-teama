import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHomeAlt, faUser, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

//SCREENS
import { HomeScreen as Home } from '../screens/HomeScreen/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import { FeedView as Feed } from '../screens/FeedView';
import { styles } from './TabNavigatorStyle';
import { colors } from '../../constants/colors';

const Tabs = createBottomTabNavigator();

const getIconColor = (focused: boolean) => ({
  color: focused ? colors.gray : colors.white,
});

const getIconSize = (focused: boolean) => (focused ? 30 : 23);

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.mainBlue,
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
      initialRouteName={'Home'}>
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faUser}
              size={getIconSize(focused)}
              style={getIconColor(focused)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faHomeAlt}
              size={getIconSize(focused)}
              style={getIconColor(focused)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faThumbsUp}
              size={getIconSize(focused)}
              style={getIconColor(focused)}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
