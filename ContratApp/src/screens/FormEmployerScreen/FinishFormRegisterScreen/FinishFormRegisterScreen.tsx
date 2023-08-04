import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderForm from '../../../components/HeaderForm/HeaderForm'
import { ButtonNext } from '../../../components/ButtonNext/ButtonNext'
import UploadPicProfile from '../../../components/UploadPicProfile/UploadPicProfile'

import { styles } from './style';

const FinishFormRegisterScreen = () => {
  return (
    <View>
      <HeaderForm 
      title = '¡Ya casi terminamos!'
      />
      <UploadPicProfile />
      <Text style={styles.text}>Agrega una foto, esto ayuda a que el profesional sepa con quien esta tratando.</Text>
      <View style={styles.button}>
      <ButtonNext
      text='Finalizar'
      />      
      </View>
    </View>
  );
};

export default FinishFormRegisterScreen;
