import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {Button} from '../Button/Button';
import {fetchDataByUserType} from '../../db/fetchCollections';

interface MessageProps {
  isNoData: boolean;
  isEmployee?: boolean;
}

const EmptySwiperMessage: React.FC<MessageProps> = ({isNoData, isEmployee}) => {
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
        <Button title="Actualizar" onPress={() => fetchDataByUserType()} />
      ) : (
        <Button title="Crear Empleo" />
      )}
    </View>
  );
};

export default EmptySwiperMessage;
