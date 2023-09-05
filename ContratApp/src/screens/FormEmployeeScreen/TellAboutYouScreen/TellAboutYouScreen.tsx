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
  setEmployPriceMax,
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
    employPhone,
    employAddress,
    employTypeService,
    employDescription,
    employDaysWork,
    employTimeAM,
    employTimePM,
    employPriceMin,
    employPriceMax,
  } = useSelector((state: RootState) => state.data);

  const handleNext = () => {
    navigation.navigate('UploadFilesScreen');
  };

  return (
    <View>
      <HeaderForm title="Háblanos más de tí" navigation={navigation} />
      <JobDescriptionTextarea
        titleDescription="Describe tu oficio y experiencia"
        hintDescription="Ingresa descripción"
        value={employDescription}
        onChange={value => {
          dispatch(setEmployDescription(value));
        }}
        kboardType={'default'}
      />
      <Input
        titleLocation="¿Qué dias te encuentras activo?"
        hintLocation="Ejemplo: Lunes - Viernes"
        value={employDaysWork}
        onChange={value => {
          dispatch(setEmployDaysWork(value));
        }}
        kboardType={'default'}
      />
      <View style={styles.checkBox}>
        <Text style={styles.nameInput}>Horario</Text>
        <WorkScheduleInputs
          titleDescription="AM"
          hintDescription="Inicio de labores"
          value={employTimeAM}
          onChange={value => {
            dispatch(setEmployTimeAM(value));
          }}
          kboardType={'default'}
        />
        <WorkScheduleInputs
          titleDescription="PM"
          hintDescription="Termino de labores"
          value={employTimePM}
          onChange={value => {
            dispatch(setEmployTimePM(value));
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
          value={employPriceMin}
          onChange={value => {
            dispatch(setEmployPriceMin(value));
          }}
          kboardType={'default'}
        />
        <PriceRangeInputs
          titleDescription="Rango Maximo"
          hintDescription="Ejemplo 50,000"
          value={employPriceMax}
          onChange={value => {
            dispatch(setEmployPriceMax(value));
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
