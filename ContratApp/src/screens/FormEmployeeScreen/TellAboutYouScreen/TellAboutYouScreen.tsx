import {View, Text} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import JobDescriptionTextarea from '../../../components/JobDescriptionTextarea/JobDescriptionTextarea';
import {PriceRangeInputs} from '../../../components/PriceRangeInputs/PriceRangeInputs';
import {WorkScheduleInputs} from '../../../components/WorkScheduleInputs/WorkScheduleInputs';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {styles} from './style';

import {useDispatch, useSelector} from 'react-redux';
import {
  setEmployeeEmail,
  setEmployeePassword,
  setEmployeePhone,
  setEmployeeAddress,
  setEmployeeService,
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
import {Input} from '../../../components/Input/Input';

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
    employeePhone,
    employeeAddress,
    employeeService,
    employeeDescription,
    employeeDaysWork,
    employeeTimeAM,
    employeeTimePM,
    employeePriceMin,
    employeePriceMax,
  } = useSelector((state: RootState) => state.data);

  const handleNext = () => {
    console.log(
      employeePhone,
      employeeAddress,
      employeeService,
      employeeDescription,
      employeeDaysWork,
      employeeTimeAM,
      employeeTimePM,
      employeePriceMin,
      employeePriceMax,
    );
    navigation.navigate('UploadFilesScreen');
  };

  return (
    <View>
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
      <Input
        titleLocation="¿Qué dias te encuentras activo?"
        hintLocation="Ejemplo: Lunes - Viernes"
        value={employeeDaysWork}
        onChange={value => {
          dispatch(setEmployeeDaysWork(value));
        }}
        kboardType={'default'}
      />
      <View style={styles.checkBox}>
        <Text style={styles.nameInput}>Horario</Text>
        <WorkScheduleInputs
          titleDescription="AM"
          hintDescription="Inicio de labores"
          value={employeeTimeAM}
          onChange={value => {
            dispatch(setEmployeeTimeAM(value));
          }}
          kboardType={'default'}
        />
        <WorkScheduleInputs
          titleDescription="PM"
          hintDescription="Termino de labores"
          value={employeeTimePM}
          onChange={value => {
            dispatch(setEmployeeTimePM(value));
          }}
          kboardType={'default'}
        />
      </View>
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
      <View style={{paddingHorizontal: wp('8%')}}>
        <Button title="Siguiente" onPress={handleNext} />
      </View>
    </View>
  );
};

export default TellAboutYouScreen;
