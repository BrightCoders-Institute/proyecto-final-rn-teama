import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import JobDescriptionTextarea from '../../../components/JobDescriptionTextarea/JobDescriptionTextarea';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { useDispatch, useSelector } from 'react-redux';
import {
  setEmployeeDaysWork,
  setEmployeeDescription,
  setEmployeeLocation
} from '../../../store/DataStore';
import { RootState } from '../../../store/Reducers';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/Navigator';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';

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
    employeeDescription,
    employeeDaysWork,
    employeeLocation
  } = useSelector((state: RootState) => state.data);

  const handleNext = () => {
    navigation.navigate('UploadPicEmployScreen');
  };

  return (
    <ScrollView>
      <HeaderForm title="Háblanos más de tí" navigation={navigation} />
      <View style={{ paddingHorizontal: wp('8%') }}>
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
          hint="Ejemplo: Lunes - Viernes"
          value={employeeDaysWork}
          onChange={(value: string) => {
            dispatch(setEmployeeDaysWork(value));
          }}
          kboardType={'default'}
        />

        <Input
          titleLocation="¿De dónde eres?"
          hint="Ejemplo: Coquimatlán, Col."
          value={employeeLocation}
          onChange={(value: string) => {
            dispatch(setEmployeeLocation(value));
          }}
          kboardType={'default'}
        />


        <Button title="Siguiente" onPress={handleNext} />
      </View>
    </ScrollView>
  );
};

export default TellAboutYouScreen;
