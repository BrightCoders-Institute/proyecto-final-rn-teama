import {View, Text} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import {Input} from '../../../components/Input/Input';
import DropDownService from '../../../components/DropDownService/DropDownService';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {useDispatch, useSelector} from 'react-redux';
import {setEmployPhone, setEmployAddress} from '../../../store/DataStore';
import {RootState} from '../../../store/Reducers';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';
import {Button} from '../../../components/Button/Button';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>;

interface WelcomeScreenProps {
  navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const {employPhone, employAddress, employTypeService} = useSelector(
    (state: RootState) => state.data,
  );

  const handleNext = () => {
    console.log(employPhone, employAddress, employTypeService);
    navigation.navigate('TellAboutYouScreen');
  };

  return (
    <View>
      <HeaderForm
        title="¡Bienvenido!"
        subTitle="Busca trabajo ahora mismo"
        navigation={navigation}
      />
      <View style={{paddingHorizontal: wp('8%')}}>
        <Input
          titleLocation="Telefono"
          hintLocation="0123456789"
          value={employPhone}
          onChange={value => {
            dispatch(setEmployPhone(value));
          }}
          kboardType={'default'}
        />
        <Input
          titleLocation="Domicilio"
          hintLocation="Street #123, City"
          value={employAddress}
          onChange={value => {
            dispatch(setEmployAddress(value));
          }}
          kboardType={'default'}
        />
        <DropDownService />
      </View>
      <View
        style={{
          bottom: 60,
        }}>
        <Button title="Siguiente" onPress={handleNext} />
      </View>
    </View>
  );
};

export default WelcomeScreen;
