import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import JobDescriptionTextarea from '../../../components/JobDescriptionTextarea/JobDescriptionTextarea';
import {PriceRangeInputs} from '../../../components/PriceRangeInputs/PriceRangeInputs';
import {WorkScheduleInputs} from '../../../components/WorkScheduleInputs/WorkScheduleInputs';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {styles} from './style';

import {useDispatch, useSelector} from 'react-redux';
import {
  setEmployeeName,
  setEmployeeDescription,
  setEmployeeDaysWork,
  setEmployeeTimeAM,
  setEmployeeTimePM,
  setEmployeePriceMin,
  setEmployeePriceMax,
} from '../../../store/DataStore';
import {RootState} from '../../../store/Reducers';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';
import {Button} from '../../../components/Button/Button';

type TellAboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TellAboutYouScreen'
>;

interface TellAboutYouScreenNavigationProps {
  navigation: TellAboutScreenNavigationProp;
}

const TellAboutYouScreen: React.FC<TellAboutYouScreenNavigationProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();

  const {
    employeeName,
    employeeDescription,
    employeeDaysWork,
    employeeTimeAM,
    employeeTimePM,
    employeePriceMin,
    employeePriceMax,
  } = useSelector((state: RootState) => state.data);

  const handleNext = () => {
    navigation.navigate('UploadPicEmployScreen');
  };

  return (
    <ScrollView>
      <HeaderForm title="Háblanos más de tí" navigation={navigation} />
      <JobDescriptionTextarea
        titleDescription="Describe tu oficio y experiencia"
        hintDescription="Ingresa descripción"
        value={employeeDescription}
        onChange={value => {
          dispatch(setEmployeeDescription(value));
        }}
        kboardType={'default'}
      />
      <JobDescriptionTextarea
        titleDescription="¿Qué dias te encuentras activo?"
        hintDescription="Ejemplo: Lunes - Viernes"
        value={employeeDaysWork}
        onChange={value => {
          dispatch(setEmployeeDaysWork(value));
        }}
        kboardType={'default'}
      />
      <View style={styles.checkBox}>
        <Text style={styles.nameInput}>
          Precio aproximado por tus servicios
        </Text>
        <PriceRangeInputs
          titleDescription="Rango Minimo"
          hintDescription="Ejemplo 500"
          value={employeePriceMin}
          onChange={value => {
            dispatch(setEmployeePriceMin(value));
          }}
          kboardType={'default'}
        />
        <PriceRangeInputs
          titleDescription="Rango Maximo"
          hintDescription="Ejemplo 50,000"
          value={employeePriceMax}
          onChange={value => {
            dispatch(setEmployeePriceMax(value));
          }}
          kboardType={'default'}
        />
      </View>
      <View style={{marginVertical: 10}}></View>
      <View style={{paddingHorizontal: wp('8%')}}>
        <Button title="Siguiente" onPress={handleNext} />
      </View>
    </ScrollView>
  );
};

export default TellAboutYouScreen;
