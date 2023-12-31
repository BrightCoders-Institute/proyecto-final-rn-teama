import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { DropdownSearch } from '../../components/DropdownSearch/DropdownSearch';
import { MainSwiper } from '../../components/MainSwiper/MainSwiper';
import { QuickFilters } from '../../components/QuickFilters/QuickFilters';
import { styles } from './styles';
import ModalCustom from '../../components/ModalCustom/ModalCustom';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

import { fetchEmployees, fetchJobs, fetchUserJobs, fetchUserType, fetchUserIdentifier } from '../../db/fetchCollections';
import { UserData } from '../../interfaces/UserData';
import EmptySwiperMessage from '../../components/EmptySwiperMsg/EmptySwiperMessage';
import { JobData } from '../../interfaces/JobData';
import { MainSwiperJobs } from '../../components/MainSwiperJobs/MainSwiperJobs';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Reducers';
import { LoadingScreen } from '../LoadingScreen';
import { faCross } from '@fortawesome/free-solid-svg-icons';

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  let [userType, setUserType] = useState();
  let [usersData, setUsersData] = useState<UserData[] | []>([]);
  let [jobsData, setJobsData] = useState<JobData[] | []>([]);
  const [hasData, setHasData] = useState<boolean>(false);
  const [jobIsEmpty, setJobIsEmpty] = useState<boolean>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { hasJob
  } = useSelector((state: RootState) => state.data);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let employees = await fetchEmployees();
        let jobs = await fetchJobs();
        let userType = await fetchUserType();
        const userJobs = await fetchUserJobs();
        setJobIsEmpty(userJobs);
        setUsersData(employees);
        setUserType(userType);
        setJobsData(jobs);
      } catch (error) {
        console.error('An error happened:', error);
      }
    };
    fetchData();
    if (usersData) {
      setHasData(true);
    } else {
      setHasData(false);
    }
  }, [])


  const handleSwiperType = () => {
    if (userType === 0) {
      return <MainSwiperJobs navigation={navigation} jobsData={jobsData} />;
    } else {
      return jobIsEmpty ?
        <EmptySwiperMessage navigation={navigation} isNoData={false} /> : <MainSwiper navigation={navigation} userData={usersData} />
    }
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.dropdownContainer}>
        <DropdownSearch category={''} width={wp('70%')} />
      </View>
      <View style={styles.filtersContainer}>
        <QuickFilters />
      </View> */}
      {hasData ? (
        handleSwiperType()
      ) : (
        <ButtonIcon color='white' icon={faCross} onPress={() => { }} />
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
