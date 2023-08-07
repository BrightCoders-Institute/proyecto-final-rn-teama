import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {Title} from '../../components/Title/Title';
import {styles} from './LoginStyles';
import {LoginForm} from '../../components/LoginForm/LoginForm';

const Login = () => {
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
        <Title title="Iniciar Sesión" />
      </View>

      <LoginForm />

      <View style={styles.containerLogin}>
        <Text style={styles.text}>¿No tienes cuenta? </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.textLogin}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
