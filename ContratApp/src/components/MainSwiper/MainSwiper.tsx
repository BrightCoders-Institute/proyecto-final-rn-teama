import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

import TinderCard from 'react-tinder-card';

import {testData} from '../../../assets/testData';
import {SwiperCard} from '../SwiperCard/SwiperCard';

export const MainSwiper = () => {
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
            <SwiperCard card={character} />
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
