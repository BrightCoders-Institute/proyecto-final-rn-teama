import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {Button} from '../../components/Button/Button';

import {styles} from "./style";

function NewJobHomeScreen() {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.title}>Aún no tienes ningún empleo publicado...</Text>
            <Image
            style={styles.imgNewJob}
            source={require('../../assets/img/imgNewJob.png')}
            />
            <Text style={styles.title}>¡Crea uno ahora!</Text>
            <Text style={styles.subtitle}>Y así te mostraremos posibles candidatos para tu empleo.</Text>
        </View>
        <Button 
            title='Crear Empleo'
            />
    </View>
  );
};

export default NewJobHomeScreen;

