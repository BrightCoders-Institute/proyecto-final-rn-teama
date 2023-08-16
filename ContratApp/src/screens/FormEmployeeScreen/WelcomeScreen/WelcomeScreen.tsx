import {View, Text} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import {Input} from '../../../components/Input/Input';
import {ButtonNext} from '../../../components/ButtonNext/ButtonNext';
import DropDownService from '../../../components/DropDownService/DropDownService';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>;

interface WelcomeScreenProps {
  navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  return (
    <View>
      <HeaderForm
        title="¡Bienvenido!"
        subTitle="Busca trabajo ahora mismo"
        navigation={navigation}
      />
      <View style={{paddingHorizontal: wp('8%')}}>
        <Input
          titlePhone="Telefono"
          hintPhone="0123456789"
          titleLocation="Domicilio"
          hintLocation="Street #123, City"
        />
        <DropDownService />
      </View>
      <ButtonNext
        text="Siguiente"
        onPress={() => {
          navigation.navigate('TellAboutYouScreen');
        }}
      />
    </View>
  );
};

export default WelcomeScreen;
