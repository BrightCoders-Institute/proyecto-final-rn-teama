import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title/Title';
import {Form} from '../../components/Form/Form';
import {styles} from './RegisterStyles';

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../assets/ContratApp.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerTitle}>
        <Title title="Crear cuenta" />
      </View>
      <Form />
      <View style={styles.containerLogin}>
        <Text style={styles.text}>¿Ya tienes cuenta?</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.textLogin}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
