import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHomeAlt,
  faPerson,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

//SCREENS
import {HomeScreen as Home} from '../screens/HomeScreen/HomeScreen';
import {EditInfoView as Profile} from '../screens/EditInfoView';
import {FeedView as Feed} from '../screens/FeedView';
import {styles} from './TabNavigatorStyle';
import {colors} from '../../constants/colors';

const Tabs = createBottomTabNavigator();

const getIconColor = (focused: boolean) => ({
  color: focused ? colors.lightGray : colors.white,
});

const getIconSize = (focused: boolean) => (focused ? 30 : 25);

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
      initialRouteName={'Home'}>
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faPerson}
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
          tabBarIcon: ({focused}) => (
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
          tabBarIcon: ({focused}) => (
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