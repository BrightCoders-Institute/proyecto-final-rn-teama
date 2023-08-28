import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderForm from '../../../components/HeaderForm/HeaderForm'
import JobDescriptionTextarea from '../../../components/JobDescriptionTextarea/JobDescriptionTextarea'
import { DaysWeekCheckBox } from '../../../components/DaysWeekCheckBox/DaysWeekCheckBox'
import { PriceRangeInputs } from '../../../components/PriceRangeInputs/PriceRangeInputs'
import { WorkScheduleInputs } from '../../../components/WorkScheduleInputs/WorkScheduleInputs'
import { ButtonNext } from '../../../components/ButtonNext/ButtonNext'

import { styles } from './style';

import {useDispatch, useSelector} from 'react-redux';
import {
  setEmployEmail,
  setEmployPassword,
  setEmployPhone,
  setEmployAddress,
  setEmployTypeService,
  setEmployDescription, 
  setEmployDaysWork, 
  setEmployTimeAM, 
  setEmployTimePM, 
  setEmployPriceMin, 
  setEmployPriceMax
} from '../../../store/DataStore';
import {RootState} from '../../../store/Reducers';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';
import { Input } from '../../../components/Input/Input'

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
    employPhone,
    employAddress,
    employTypeService,
    employDescription, 
    employDaysWork, 
    employTimeAM, 
    employTimePM, 
    employPriceMin, 
    employPriceMax
  } = useSelector(
    (state: RootState) => state.data,
  );

  const handleNext = () => {
    console.log(
      employPhone, 
      employAddress, 
      employTypeService, 
      employDescription, 
      employDaysWork, 
      employTimeAM, 
      employTimePM, 
      employPriceMin, 
      employPriceMax);
    navigation.navigate('UploadFilesScreen');
  };

  return (
    <ScrollView>
    <View>
      <HeaderForm
      title = 'Háblanos más de tí'
      />
      <JobDescriptionTextarea 
      titleDescription='Describe tu oficio y experiencia'
      hintDescription='Ingresa descripción'
      value={employDescription}
      onChange={value => {
        dispatch(setEmployDescription(value));
      }}
      />
      {/* <Text style={styles.nameInput}>¿Qué dias te encuentras activo?</Text> */}
      <Input 
      titleLocation="¿Qué dias te encuentras activo?"
      hintLocation="Ejemplo: Lunes - Viernes"
      value={employDaysWork}
      onChange={value => {
        dispatch(setEmployDaysWork(value));
      }}
      />
      {/* <View>
        <DaysWeekCheckBox
        description='Lunes'
        value={employDaysWork}
        onChange={value => {
        dispatch(setEmployDaysWork(value));
      }}
        />
        <DaysWeekCheckBox
        description='Martes'
        />
        <DaysWeekCheckBox
        description='Miercoles'
        />
        <DaysWeekCheckBox
        description='Jueves'
        />
        <DaysWeekCheckBox
        description='Viernes'
        />
        <DaysWeekCheckBox
        description='Sabado'
        />
        <DaysWeekCheckBox
        description='Domingo'
        />
      </View> */}
      <View style={styles.checkBox}>
      <Text style={styles.nameInput}>Horario</Text>
          <WorkScheduleInputs
          titleDescription='AM'
          hintDescription='Inicio de labores'
          value={employTimeAM}
          onChange={value => {
            dispatch(setEmployTimeAM(value));
          }}
          />
          <WorkScheduleInputs
          titleDescription='PM'
          hintDescription='Termino de labores'
          value={employTimePM}
          onChange={value => {
            dispatch(setEmployTimePM(value));
          }}
          />
      </View>
      <View style={styles.checkBox}>
      <Text style={styles.nameInput}>Precio aproximado por tus servicios</Text>
          <PriceRangeInputs
          titleDescription='Rango Minimo'
          hintDescription='Ejemplo 500'
          value={employPriceMin}
          onChange={value => {
            dispatch(setEmployPriceMin(value));
          }}
          />
          <PriceRangeInputs
          titleDescription='Rango Maximo'
          hintDescription='Ejemplo 50,000'
          value={employPriceMax}
          onChange={value => {
             dispatch(setEmployPriceMax(value));
          }}
          />
      </View>
      <ButtonNext
        text="Siguiente"
        onPress={handleNext}
      />
    </View>
    </ScrollView>
  );
};

export default TellAboutYouScreen;
