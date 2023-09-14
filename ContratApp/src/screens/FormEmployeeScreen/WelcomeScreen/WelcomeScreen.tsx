import {View} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import {Input} from '../../../components/Input/Input';
import DropDownService from '../../../components/DropDownService/DropDownService';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {useDispatch, useSelector} from 'react-redux';
import {
  setEmployeePhone,
  setEmployeeAddress,
  setEmployeeName,
} from '../../../store/DataStore';
import {RootState} from '../../../store/Reducers';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';
import {Button} from '../../../components/Button/Button';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>;

interface WelcomeScreenProps {
  navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const {employeePhone, employeeAddress, employeeService, employeeName} =
    useSelector((state: RootState) => state.data);

  const handleNext = () => {
    console.log(employeePhone, employeeAddress, employeeService);
    navigation.navigate('TellAboutYouScreen');
  };

  return (
    <View>
      <HeaderForm
        title="¡Bienvenido!"
        subTitle="Busca trabajo ahora mismo"
        navigation={navigation}
      />
      <View style={{paddingHorizontal: wp('8%')}}>
        <Input
          titleLocation="Nombre completo"
          hint="Armando Hoyos Martínez"
          value={employeeName}
          onChange={value => {
            dispatch(setEmployeeName(value));
          }}
          kboardType={'default'}
        />
        <Input
          titleLocation="Telefono"
          hint="0123456789"
          value={employeePhone}
          onChange={value => {
            dispatch(setEmployeePhone(value));
          }}
          kboardType={'default'}
        />
        <Input
          titleLocation="Domicilio"
          hint="Street #123, City"
          value={employeeAddress}
          onChange={value => {
            dispatch(setEmployeeAddress(value));
          }}
          kboardType={'default'}
        />
        <DropDownService 
        titleDropdown='Oficio / Servicio que ofrece'
        />
      </View>
      <View
        style={{
          bottom: 60,
        }}>
        <Button title="Siguiente" onPress={handleNext} />
      </View>
    </View>
  );
};

export default WelcomeScreen;
