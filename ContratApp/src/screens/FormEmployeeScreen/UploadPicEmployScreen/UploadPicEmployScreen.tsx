import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import UploadPicProfile from '../../../components/UploadPicProfile/UploadPicProfile';
import {ButtonNext} from '../../../components/ButtonNext/ButtonNext';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';

type UploadPicEmployScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UploadPicEmployScreen'
>;

interface UploadPicEmployScreenNavigationProps {
  navigation: UploadPicEmployScreenNavigationProp;
}

const UploadPicEmployScreen: React.FC<UploadPicEmployScreenNavigationProps> = ({
  navigation,
}) => {
  return (
    <View>
      <HeaderForm
        title="¡Un último paso y estarás listo!"
        navigation={navigation}
      />
      <UploadPicProfile />
      <Text style={style.text}>
        Agregar una foto ayuda a generar confiaza y que quieran trabajar
        contigo.
      </Text>
      <ButtonNext text="Finalizar" onPress={() => {}} />
    </View>
  );
};

export default UploadPicEmployScreen;

const style = StyleSheet.create({
  container: {},
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
