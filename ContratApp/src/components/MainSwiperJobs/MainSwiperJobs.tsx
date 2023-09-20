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
import { fetchEmployerAcceptedUsers, fetchUserData, fetchUserIdentifier } from '../../db/fetchCollections';
import ModalCustom from '../ModalCustom/ModalCustom';
import { JobData } from '../../interfaces/JobData';
import { CardJob } from '../SwiperCards/CardJob';
//FIREBASE
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { UserData } from '../../interfaces/UserData';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface MainSwiperJobsProps {
  navigation: HomeScreenNavigationProp;
  jobsData: JobData[] | [];
}

export const MainSwiperJobs: React.FC<MainSwiperJobsProps> = ({
  navigation,
  jobsData
}) => {
  const [lastDirection, setLastDirection] = useState();
  let [currentUserId, setUserIdentifier] = useState();
  let [employerId, setEmployerId] = useState();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
  const [isModalOpen3, setIsModalOpen3] = useState<boolean>(false);
  const [isMatchModalOpen, setIsMatchModalOpen] = useState<boolean>(false);

  const uid = auth().currentUser?.uid;

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        let currentId = await fetchUserIdentifier();
        setUserIdentifier(currentId);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserId();
  }, [])


  const openModal = () => {
    setIsModalOpen(true);
  };
  const openThumbsUpModal = () => {
    setIsModalOpen2(true);
  };
  const openThumbsDownModal = () => {
    setIsModalOpen3(true);
  };
  const openMatchModal = () => {
    setIsMatchModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  const closeModal3 = () => {
    setIsModalOpen3(false);
  };
  const closeModalMatch = () => {
    setIsMatchModalOpen(false);
  };

  const swipedLeft = (job: any) => {
    if (!job) return;
    console.log('Job: ', job.title, 'swiped left');
    // firestore().collection('Jobs').doc(uid).collection("passes").add(job);
  }

  const swipedRight = async (job: any) => {
    if (!job) return;
    let employerAcceptedUsers = await fetchEmployerAcceptedUsers(job.userId);
    setEmployerId(job.userId);
    employerAcceptedUsers.map((employee: any) => {
      if (employee.uid == currentUserId) {
        openMatchModal();
        return true;
      } else {
        return false;
      }
    })
    firestore().collection('Users').doc(uid).collection("jobs").add(job);
  }

  const handleContactNavigation = () => {
    navigation.navigate('ContactInformationScreen', employerId);
  }

  const swiped = (direction: any, job: any) => {
    setLastDirection(direction);
    if ('left' === direction) {
      swipedLeft(job)
    } else {
      swipedRight(job)
    }
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
              onCardLeftScreen={(direction) => swiped(direction, job)}>
              <CardJob cardJob={job} navigation={navigation} />
            </TinderCard>
          ))
        }
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonIcon
          icon={faThumbsDown}
          color={colors.red}
          onPress={openThumbsDownModal}
        />
        <ButtonIcon icon={faInfo} color={colors.gray} onPress={openModal} />
        <ButtonIcon
          icon={faThumbsUp}
          color={colors.mainBlue}
          onPress={openThumbsUpModal}
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
      <ModalCustom
        icon={faThumbsUp}
        title="Acepta un empleo"
        message="Desliza la tarjeta a la derecha para probar suerte con un empleo"
        btnAcceptMsg="Entendido"
        visible={isModalOpen2}
        onClose={closeModal2}
        onAccept={closeModal2}
      />
      <ModalCustom
        icon={faThumbsDown}
        title="Rechaza un empleo"
        message="Desliza la tarjeta a la izquierda para eliminar un empleo"
        btnAcceptMsg="Entendido"
        visible={isModalOpen3}
        onClose={closeModal3}
        onAccept={closeModal3}
      />
      <ModalCustom
        icon={faThumbsUp}
        title="¡Estás ContrApptado!"
        message="Mira la información de contacto del empleador en el apartado de guardados"
        btnAcceptMsg="¡Vamos!"
        btnCloseMsg='Cerrar'
        visible={isMatchModalOpen}
        onClose={closeModalMatch}
        onAccept={handleContactNavigation} //TODO: Redirect to contact info
      />
    </View>
  );
};
