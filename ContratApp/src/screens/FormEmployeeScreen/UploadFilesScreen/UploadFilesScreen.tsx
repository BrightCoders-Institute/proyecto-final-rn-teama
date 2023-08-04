import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderForm from '../../../components/HeaderForm/HeaderForm'
import { ButtonNext } from '../../../components/ButtonNext/ButtonNext'
import UploadImage from '../../../components/UploadImage/UploadImage'

import { styles } from './style';

const UploadFilesScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderForm 
      title = 'Muestranos algo de tu trabajo'
      />
      <UploadImage />
      <Text style={styles.text}>Sube algunas fotos mostrando tu trabajo, esto ayudará a que las personas vean lo que sabes hacer.</Text>
      <View style={styles.button}>
      <ButtonNext 
      text='Siguiente'
      />
      </View>
    </View>
  )
}

export default UploadFilesScreen;
