import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

import TinderCard from 'react-tinder-card';

import {testData} from '../../../assets/testData';
import {SwiperCard} from '../SwiperCard/SwiperCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';

import {UserData} from '../../interfaces/UserData';
import {ButtonIcon} from '../ButtonIcon/ButtonIcon';

import {
  faThumbsUp,
  faThumbsDown,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../../../constants/colors';
import {fetchUserData} from '../../db/fetchCollections';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface MainSwiperProps {
  navigation: HomeScreenNavigationProp;
  userData: UserData[] | [];
}

export const MainSwiper: React.FC<MainSwiperProps> = ({
  navigation,
  userData,
}) => {
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: any) => {
    console.log(name + ' left the screen!');
  };
  return (
    <View>
      <View style={styles.cardContainer}>
        {userData.map(user => (
          <TinderCard
            key={user.companyName || user.name}
            onSwipe={dir => swiped(dir, user.companyName || user.name)}
            onCardLeftScreen={() => outOfFrame(user.companyName || user.name)}>
            <SwiperCard card={user} navigation={navigation} />
          </TinderCard>
        ))}
      </View>
      {lastDirection ? (
        <Text style={styles.infoText}>You swiped {lastDirection}</Text>
      ) : (
        <Text style={styles.infoText} />
      )}
      <View style={styles.buttonContainer}>
        <ButtonIcon
          icon={faThumbsUp}
          color={colors.mainBlue}
          onPress={() => {}}
        />
        <ButtonIcon
          icon={faInfo}
          color={colors.gray}
          onPress={() => navigation.navigate('MoreDetailsScreen')}
        />
        <ButtonIcon
          icon={faThumbsDown}
          color={colors.red}
          onPress={() => {
            fetchUserData();
          }}
        />
      </View>
    </View>
  );
};
