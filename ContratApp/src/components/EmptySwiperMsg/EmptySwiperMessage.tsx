import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { Button } from '../Button/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';

type EmptyMessageProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface MessageProps {
  isNoData: boolean;
  isEmployee?: boolean;
  navigation: EmptyMessageProp;
}

const EmptySwiperMessage: React.FC<MessageProps> = ({ isNoData, isEmployee, navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        {isNoData ? (
          <Text style={styles.title}>
            No hay {isEmployee ? 'empleos' : 'empleados'} disponibles por
            ahora...
          </Text>
        ) : (
          <Text style={styles.title}>
            Aún no tienes ningún empleo publicado...
          </Text>
        )}
        <Image
          style={styles.imgNewJob}
          source={require('../../assets/img/imgNewJob.png')}
        />
        {isNoData ? (
          <Text style={styles.title}>¡Inténtalo de nuevo más tarde!</Text>
        ) : (
          <Text style={styles.title}>¡Crea uno ahora!</Text>
        )}
        {isNoData ? (
          <></>
        ) : (
          <Text style={styles.subtitle}>
            Y así te mostraremos posibles candidatos para tu empleo.
          </Text>
        )}
      </View>
      {isNoData ? (
        <></>
      ) : (
        <Button title="Crear Empleo" onPress={() => navigation.navigate('CreateJobScreen')} />
      )}
    </View>
  );
};

export default EmptySwiperMessage;
