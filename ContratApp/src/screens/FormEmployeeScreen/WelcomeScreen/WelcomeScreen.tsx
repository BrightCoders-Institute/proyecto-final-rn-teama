import { View, Text } from 'react-native'
import React from 'react'
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import { Input } from '../../../components/Input/Input';
import { ButtonNext } from '../../../components/ButtonNext/ButtonNext';
import DropDownService from '../../../components/DropDownService/DropDownService';

const WelcomeScreen = () => {
  return (
    <View>
      <HeaderForm 
      title='¡Bienvenido!'
      />
      <Input 
      titlePhone='Telefono'
      hintPhone='0123456789'
      titleLocation='Domicilio'
      hintLocation='Street #123, City'
      />
      <DropDownService />
      <ButtonNext 
      text='Siguiente'
      />
    </View>
  );
};


export default WelcomeScreen