import {View, Text} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import {Input} from '../../../components/Input/Input';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ButtonNext} from '../../../components/ButtonNext/ButtonNext';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';
import {useDispatch, useSelector} from 'react-redux';
import {setPhone, setAddress, setCompanyName} from '../../../store/DataStore';
import {RootState} from '../../../store/Reducers';
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
  const dispatch = useDispatch();

  const {phone, address, companyName} = useSelector(
    (state: RootState) => state.data,
  );

  const handleNext = () => {
    console.log(phone, address, companyName);
    navigation.navigate('FinishFormRegisterScreen');
  };
  return (
    <View>
      <HeaderForm
        title="¡Bienvenido!"
        subTitle="Encuentra empleados de todo tipo"
        navigation={navigation}
      />
      <View style={{paddingHorizontal: wp('8%')}}>
        <Input
          titleLocation="Telefono"
          titlePhone="Telefono"
          hintPhone="0123456789"
          value={phone}
          onChange={value => {
            dispatch(setPhone(value));
          }}
        />
        <Input
          titleLocation="Direccion"
          hintLocation="Street #123, City"
          value={address}
          onChange={value => {
            dispatch(setAddress(value));
          }}
        />

        <Input
          titleLocation="Nombre de la empresa"
          hintLocation="Example S.A de C.V"
          value={companyName}
          onChange={value => {
            dispatch(setCompanyName(value));
          }}
        />

        <ButtonNext text="Siguiente" onPress={handleNext} />
      </View>
    </View>
  );
};

export default WelcomeScreenEmployer;
