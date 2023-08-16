import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import {ButtonNext} from '../../../components/ButtonNext/ButtonNext';
import UploadImage from '../../../components/UploadImage/UploadImage';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';

type UploadFilesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UploadFilesScreen'
>;

interface UploadFilesScreenNavigationProps {
  navigation: UploadFilesScreenNavigationProp;
}

const UploadFilesScreen: React.FC<UploadFilesScreenNavigationProps> = ({
  navigation,
}) => {
  return (
    <View style={style.container}>
      <HeaderForm
        title="Muestranos algo de tu trabajo"
        navigation={navigation}
      />
      <UploadImage />
      <Text style={style.text}>
        Sube algunas fotos mostrando tu trabajo, esto ayudará a que las personas
        vean lo que sabes hacer.
      </Text>
      <ButtonNext
        text="Siguiente"
        onPress={() => navigation.navigate('UploadPicEmployScreen')}
      />
    </View>
  );
};

export default UploadFilesScreen;

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
