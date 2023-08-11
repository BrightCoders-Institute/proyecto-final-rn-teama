import React from 'react';
import {Text, TouchableOpacity, View, Image, ScrollView} from 'react-native';
import {Title} from '../../components/Title/Title';
import {styles} from './LoginStyles';
import {LoginForm} from '../../components/LoginForm/LoginForm';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const Login: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <ScrollView>
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

        <LoginForm navigation={navigation} />

        <View style={styles.containerLogin}>
          <Text style={styles.text}>¿No tienes cuenta? </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textLogin}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
