import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import {ButtonNext} from '../../../components/ButtonNext/ButtonNext';
import UploadPicProfile from '../../../components/UploadPicProfile/UploadPicProfile';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';

type FinishFormRegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>;

interface FinishFormRegisterScreenProps {
  navigation: FinishFormRegisterScreenNavigationProp;
}

const FinishFormRegisterScreen: React.FC<FinishFormRegisterScreenProps> = ({
  navigation,
}) => {
  return (
    <View>
      <HeaderForm title="¡Ya casi terminamos!" navigation={navigation} />
      <UploadPicProfile />
      <Text style={style.text}>
        Agrega una foto, esto ayuda a que el profesional sepa con quien esta
        tratando.
      </Text>
      <ButtonNext text="Finalizar" onPress={() => {}} />
    </View>
  );
};

export default FinishFormRegisterScreen;

const style = StyleSheet.create({
  container: {},
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 260,
    height: 220,
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
  },
});
