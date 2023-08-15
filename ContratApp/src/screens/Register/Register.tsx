import {Text, TouchableOpacity, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title/Title';
import {Form} from '../../components/Form/Form';
import {styles} from './RegisterStyles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

interface RegistercreenProps {
  navigation: RegisterScreenNavigationProp;
}

const Register: React.FC<RegistercreenProps> = ({navigation}) => {
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
          <Title title="Crear cuenta" />
        </View>
        <Form />
        <View style={styles.containerLogin}>
          <Text style={styles.text}>¿Ya tienes cuenta?</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textLogin}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
