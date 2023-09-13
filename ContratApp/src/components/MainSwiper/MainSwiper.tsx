import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

import TinderCard from 'react-tinder-card';

import {testData} from '../../../assets/testData';
import {SwiperCard} from '../SwiperCard/SwiperCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface MainSwiperProps {
  navigation: HomeScreenNavigationProp;
}

export const MainSwiper: React.FC<MainSwiperProps> = ({navigation}) => {
  const characters = testData;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: any) => {
    console.log(name + ' left the screen!');
  };
  return (
    <>
      <View style={styles.cardContainer}>
        {characters.map(character => (
          <TinderCard
            key={character.name}
            onSwipe={dir => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}>
            <SwiperCard card={character} navigation={navigation} />
          </TinderCard>
        ))}
      </View>
      {lastDirection ? (
        <Text style={styles.infoText}>You swiped {lastDirection}</Text>
      ) : (
        <Text style={styles.infoText} />
      )}
    </>
  );
};
