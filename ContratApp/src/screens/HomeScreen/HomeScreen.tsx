import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon/ButtonIcon';
import {DropdownSearch} from '../../components/DropdownSearch/DropdownSearch';
import {MainSwiper} from '../../components/MainSwiper/MainSwiper';
import {QuickFilters} from '../../components/QuickFilters/QuickFilters';
import {styles} from './styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ModalCustom from '../../components/ModalCustom/ModalCustom';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

import {
  fetchUserData,
  fetchDataByUserType,
  fetchUserType,
} from '../../db/fetchCollections';
import {UserData} from '../../interfaces/UserData';
import EmptySwiperMessage from '../../components/EmptySwiperMsg/EmptySwiperMessage';

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  // const [userType, setUserType] = useState(undefined);
  const [usersData, setUsersData] = useState<UserData[] | []>([]);
  const [hasData, setHasData] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchDataByUserType();
        const resUserType = await fetchUserType();
        setUsersData(res);
        console.log(res);
      } catch (error) {
        console.error('An error happened:', error);
      }
    };
    fetchData();
    if (usersData === []) {
      setHasData(false);
    } else {
      setHasData(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.dropdownContainer}>
        <DropdownSearch category={''} width={wp('70%')} />
      </View>
      <View style={styles.filtersContainer}>
        <QuickFilters />
      </View> */}
      {hasData ? (
        <MainSwiper navigation={navigation} userData={usersData} />
      ) : (
        <EmptySwiperMessage isNoData={true} isEmployee={true} />
      )}
      <ModalCustom
        title="¡Estás ContrApptado!"
        message="Ahora podrás ver la información de contacto en el apartado de elementos guardados."
        btnAcceptMsg="Continuar"
        btnCloseMsg="Cerrar"
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
