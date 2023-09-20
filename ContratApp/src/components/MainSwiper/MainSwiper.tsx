import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import TinderCard from 'react-tinder-card';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';

import { UserData } from '../../interfaces/UserData';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { CardEmployee } from '../SwiperCards/CardEmployee';

import {
  faThumbsUp,
  faThumbsDown,
  faInfo,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants/colors';
import { fetchUserData } from '../../db/fetchCollections';
import ModalCustom from '../ModalCustom/ModalCustom';
//FIREBASE
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface MainSwiperProps {
  navigation: HomeScreenNavigationProp;
  userData: UserData[] | [];
}

export const MainSwiper: React.FC<MainSwiperProps> = ({
  navigation,
  userData
}) => {
  const [lastDirection, setLastDirection] = useState();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const uid = auth().currentUser?.uid;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const swipedLeft = (user: any) => {
    if (!user) return;
    console.log('User: ', user.name, 'swiped left');
    firestore().collection('Users').doc(uid).collection("passes").add(user);
  }

  const swipedRight = (user: any) => {
    if (!user) return;
    console.log('User: ', user.name, 'swiped right');
    firestore().collection('Users').doc(uid).collection("accepted").add(user);
  }

  const swiped = (direction: any, user: any) => {
    // console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
    if ('left' === direction) {
      swipedLeft(user)
    } else {
      swipedRight(user)
    }
  };

  const outOfFrame = (name: any) => {
    console.log(name + ' left the screen!');
  };

  return (
    <View>
      <View style={styles.cardContainer}>
        {
          userData.map((user, index) => (
            <TinderCard
              key={index}
              // onSwipe={dir => swiped(dir, user)}
              onCardLeftScreen={dir => swiped(dir, user)}
              preventSwipe={['up', 'down']}
            >
              <CardEmployee card={user} navigation={navigation} />
            </TinderCard>
          ))
        }
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonIcon
          icon={faThumbsDown}
          color={colors.red}
          onPress={() => { }}
        />
        <ButtonIcon icon={faInfo} color={colors.gray} onPress={openModal} />
        <ButtonIcon
          icon={faThumbsUp}
          color={colors.mainBlue}
          onPress={() => { }}
        />
      </View>
      <ModalCustom
        icon={faInfoCircle}
        title="Mira los detalles"
        message="Haz click en el apartado de más información en la tarjeta para ver los detalles"
        btnAcceptMsg="Aceptar"
        visible={isModalOpen}
        onClose={closeModal}
        onAccept={closeModal}
      />
    </View>
  );
};
