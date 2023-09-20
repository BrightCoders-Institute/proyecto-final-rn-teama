import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import TinderCard from 'react-tinder-card';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';

import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

import {
  faThumbsUp,
  faThumbsDown,
  faInfo,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants/colors';
import { fetchUserData } from '../../db/fetchCollections';
import ModalCustom from '../ModalCustom/ModalCustom';
import { JobData } from '../../interfaces/JobData';
import { CardJob } from '../SwiperCards/CardJob';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface MainSwiperJobsProps {
  navigation: HomeScreenNavigationProp;
  jobsData: JobData[] | [];
}

export const MainSwiperJobs: React.FC<MainSwiperJobsProps> = ({
  navigation,
  jobsData,
}) => {
  const [lastDirection, setLastDirection] = useState();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        {
          jobsData.map(job => (
            <TinderCard
              key={job.title}
              onSwipe={dir => swiped(dir, job.title)}
              onCardLeftScreen={() => outOfFrame(job.title)}>
              <CardJob cardJob={job} navigation={navigation} />
            </TinderCard>
          ))
        }
      </View>
      {lastDirection ? (
        <Text style={styles.infoText}>You swiped {lastDirection}</Text>
      ) : (
        <Text style={styles.infoText} />
      )}

      <View style={styles.buttonsContainer}>
        <ButtonIcon
          icon={faThumbsUp}
          color={colors.mainBlue}
          onPress={() => { }}
        />
        <ButtonIcon icon={faInfo} color={colors.gray} onPress={openModal} />
        <ButtonIcon
          icon={faThumbsDown}
          color={colors.red}
          onPress={() => {
            fetchUserData();
          }}
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
