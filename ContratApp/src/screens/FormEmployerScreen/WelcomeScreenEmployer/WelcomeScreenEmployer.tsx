import {View, Text} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import {Input} from '../../../components/Input/Input';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ButtonNext} from '../../../components/ButtonNext/ButtonNext';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>;

interface WelcomeScreenEmployeeProps {
  navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreenEmployer: React.FC<WelcomeScreenEmployeeProps> = ({
  navigation,
}) => {
  return (
    <View>
      <HeaderForm
        title="¡Bienvenido!"
        subTitle="Encuentra empleados de todo tipo"
        navigation={navigation}
      />
      <View style={{paddingHorizontal: wp('8%')}}>
        <Input />
        <Input />
      </View>
      <ButtonNext
        text="Siguiente"
        onPress={() => {
          navigation.navigate('FinishFormRegisterScreen');
        }}
      />
    </View>
  );
};

export default WelcomeScreenEmployer;
