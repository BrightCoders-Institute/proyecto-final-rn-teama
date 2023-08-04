import { View, Text } from 'react-native'
import React from 'react'
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import { Input } from '../../../components/Input/Input';

const WelcomeScreenEmployer = () => {
  return (
    <View>
      <HeaderForm 
      title = '¡Bienvenido!'
      />
      <Input />
      <Input />
    </View>
  );
};


export default WelcomeScreenEmployer