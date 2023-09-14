import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon/ButtonIcon';
import {DropdownSearch} from '../../components/DropdownSearch/DropdownSearch';
import {MainSwiper} from '../../components/MainSwiper/MainSwiper';
import {QuickFilters} from '../../components/QuickFilters/QuickFilters';
import {styles} from './styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ModalCustom from '../../components/ModalCustom/ModalCustom';

import {
  faThumbsUp,
  faThumbsDown,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../../../constants/colors';

import auth from '@react-native-firebase/auth';
import {
  fetchEmployees,
  fetchEmployers,
  fetchUserData,
} from '../../db/fetchCollections';

import firestore from '@react-native-firebase/firestore';

export const HomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <DropdownSearch category={''} width={wp('70%')} />
      </View>
      <View style={styles.filtersContainer}>
        <QuickFilters />
      </View>
      <MainSwiper />
      <View style={styles.buttonContainer}>
        <ButtonIcon
          icon={faThumbsUp}
          color={colors.mainBlue}
          onPress={() => {}}
        />
        <ButtonIcon icon={faInfo} color={colors.gray} onPress={() => {}} />
        <ButtonIcon icon={faThumbsDown} color={colors.red} onPress={() => {}} />
      </View>
      <ModalCustom
        title="¡Estás ContrApptado!"
        message="Ahora podrás ver la información de contacto en el apartado de elementos guardados."
        visible={isModalOpen}
        onClose={closeModal}
        onAccept={() => {
          // TODO: Redirect to contact details
          console.log('Tap on continuar');
        }}
      />
    </View>
  );
};
