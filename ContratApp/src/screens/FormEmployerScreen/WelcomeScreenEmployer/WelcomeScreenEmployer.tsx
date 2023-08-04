import { View, Text } from 'react-native'
import React from 'react'
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import { Input } from '../../../components/Input/Input';
import { EnterpriseNameInput } from '../../../components/EnterpriseNameInput/EnterpriseNameInput';
import { ButtonNext } from '../../../components/ButtonNext/ButtonNext';

const WelcomeScreenEmployer = () => {
  return (
    <View>
      <HeaderForm 
      title = '¡Bienvenido!'
      />
      <Input 
      titlePhone='Telefono'
      hintPhone='0123456789'
      titleLocation='Domicilio'
      hintLocation='Street #123, City'
      />
      <EnterpriseNameInput
      titleEnterprise='Nombre de la empresa'
      hintEnterprise='Example S.A de C.V'
      />
      <ButtonNext
      text='Siguiente'
      />
    </View>
  );
};


export default WelcomeScreenEmployer;