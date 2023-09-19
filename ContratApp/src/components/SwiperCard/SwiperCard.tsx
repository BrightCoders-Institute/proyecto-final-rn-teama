import React from 'react';
import {
  View,
  Dimensions,
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';

import { CardJob } from './CardJob';

import { UserData } from '../../interfaces/UserData';
import { CardEmployee } from './CardEmployee';

const { height } = Dimensions.get('window');

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface CardProps {
  card: UserData;
  navigation: HomeScreenNavigationProp;
}

export const SwiperCard: React.FC<CardProps> = ({ card, navigation }) => {
  const isEmployee = () => {
    if (card.userType === 1) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <View>
      {isEmployee() ? <CardJob card={card} navigation={navigation} /> : <CardEmployee card={card} navigation={navigation} />}
    </View>
  );
};
