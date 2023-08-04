import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderForm from '../../../components/HeaderForm/HeaderForm'
import UploadPicProfile from '../../../components/UploadPicProfile/UploadPicProfile'
import { ButtonNext } from '../../../components/ButtonNext/ButtonNext'

import { styles } from './style';

const UploadPicEmployScreen = () => {
  return (
    <View>
      <HeaderForm 
      title = '¡Un último paso y estarás listo!'
      />
      <UploadPicProfile />
      <Text style={styles.text}>Agregar una foto ayuda a generar confiaza y que quieran trabajar contigo.</Text>
      <View style={styles.button}>
      <ButtonNext 
      text='Finalizar'
      />
      </View>
    </View>
  )
}

export default UploadPicEmployScreen;
