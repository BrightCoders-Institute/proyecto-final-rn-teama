import {View, Text} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import UploadPicProfile from '../../../components/UploadPicProfile/UploadPicProfile';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';
import {Button} from '../../../components/Button/Button';
import {registerEmployer} from '../../../db/RegisterNewEmployer';

import {style} from './style';

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
import {registerEmployee} from '../../../db/RegisterNewEmployee';

type UploadPicEmployScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UploadPicEmployScreen'
>;

interface UploadPicEmployScreenNavigationProps {
  navigation: UploadPicEmployScreenNavigationProp;
}

const UploadPicEmployScreen: React.FC<UploadPicEmployScreenNavigationProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();

  const {
    email,
    password,
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

  const clearEmployer = () => {
    dispatch(setEmployeeEmail(''));
    dispatch(setEmployeePassword(''));
    dispatch(setEmployeePhone(''));
    dispatch(setEmployeeAddress(''));
    dispatch(setEmployeeService(''));
    dispatch(setEmployeeDescription(''));
    dispatch(setEmployeeDaysWork(''));
    dispatch(setEmployeeTimeAM(''));
    dispatch(setEmployeeTimePM(''));
    dispatch(setEmployeePriceMin(''));
    dispatch(setEmployeePriceMax(''));
  };

  const handleFinishButtonPress = () => {
    const newEmployee = {
      email,
      password,
      employeePhone,
      employeeAddress,
      employeeService,
      employeeDescription,
      employeeDaysWork,
      employeeTimeAM,
      employeeTimePM,
      employeePriceMin,
      employeePriceMax,
    };

    registerEmployee(newEmployee);
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
    clearEmployer();
  };

  return (
    <View>
      <HeaderForm
        title="¡Un último paso y estarás listo!"
        navigation={navigation}
      />
      <UploadPicProfile />
      <Text style={style.text}>
        Agregar una foto ayuda a generar confiaza y que quieran trabajar
        contigo.
      </Text>
      <View style={{paddingHorizontal: wp('8%')}}>
        <Button title="Finalizar" onPress={handleFinishButtonPress} />
      </View>
    </View>
  );
};

export default UploadPicEmployScreen;
