import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import UploadPicProfile from '../../../components/UploadPicProfile/UploadPicProfile';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/Navigator';
import { Button } from '../../../components/Button/Button';

import { style } from './style';

import { useDispatch, useSelector } from 'react-redux';
import {
  setUserType,
  setEmployeeName,
  setEmployeeEmail,
  setEmployeePassword,
  setEmployeePhone,
  setEmployeeAddress,
  setEmployeeService,
  setEmployeeDescription,
  setEmployeeDaysWork,
  setLoggedIn,
  setEmployeeLocation,
} from '../../../store/DataStore';
import { RootState } from '../../../store/Reducers';
import { registerEmployee } from '../../../db/RegisterNewEmployee';
import { signIn } from '../../../auth/SignInUser';

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

  const handleLoggedIn = (isLoggedIn: boolean) => {
    dispatch(setLoggedIn(isLoggedIn));
  };

  const {
    userType,
    email,
    password,
    employeeName,
    employeePhone,
    employeeAddress,
    employeeService,
    employeeDescription,
    employeeDaysWork,
    employeeLocation
  } = useSelector((state: RootState) => state.data);

  const clearEmployee = () => {
    dispatch(setUserType(0));
    dispatch(setEmployeeName(''));
    dispatch(setEmployeeEmail(''));
    dispatch(setEmployeePassword(''));
    dispatch(setEmployeePhone(''));
    dispatch(setEmployeeAddress(''));
    dispatch(setEmployeeService(''));
    dispatch(setEmployeeDescription(''));
    dispatch(setEmployeeDaysWork(''));
    dispatch(setEmployeeLocation(''));
  };

  const handleFinishButtonPress = async () => {
    const newEmployee = {
      userType,
      email,
      password,
      employeeName,
      employeePhone,
      employeeAddress,
      employeeService,
      employeeDescription,
      employeeDaysWork,
      employeeLocation
    };

    registerEmployee(newEmployee);
    if (
      (await signIn({
        email: newEmployee.email,
        password: newEmployee.password,
      })) === true
    ) {
      handleLoggedIn(true);
    }
    clearEmployee();
  };

  return (
    <ScrollView>
      <HeaderForm
        title="¡Un último paso y estarás listo!"
        navigation={navigation}
      />
      <UploadPicProfile />
      <Text style={style.text}>
        Agregar una foto ayuda a generar confiaza y que quieran trabajar
        contigo.
      </Text>
      <View style={{ paddingHorizontal: wp('4%') }}>
        <Button title="Finalizar" onPress={handleFinishButtonPress} />
      </View>
    </ScrollView>
  );
};

export default UploadPicEmployScreen;
