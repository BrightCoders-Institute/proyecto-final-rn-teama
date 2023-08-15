import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderForm from '../../../components/HeaderForm/HeaderForm'
import UploadPicProfile from '../../../components/UploadPicProfile/UploadPicProfile'
import { ButtonNext } from '../../../components/ButtonNext/ButtonNext'

const UploadPicEmployScreen = () => {
  return (
    <View>
      <HeaderForm 
      title = '¡Un último paso y estarás listo!'
      />
      <UploadPicProfile />
      <Text style={style.text}>Agregar una foto ayuda a generar confiaza y que quieran trabajar contigo.</Text>
      <ButtonNext 
      text='Finalizar'
      />
    </View>
  )
}

export default UploadPicEmployScreen;

const style=StyleSheet.create({
    container:{
        
    },
    text: {
        alignSelf: 'center',
        textAlign: 'center',
        width: 250,
        height: 220,
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
    },
});