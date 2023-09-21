import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import { Input } from '../../../components/Input/Input';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/Navigator';
import { useDispatch, useSelector } from 'react-redux';
import { setPhone, setAddress, setCompanyName } from '../../../store/DataStore';
import { RootState } from '../../../store/Reducers';
import { Button } from '../../../components/Button/Button';
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

  const { phone, address, companyName } = useSelector(
    (state: RootState) => state.data,
  );

  return (
    <ScrollView>
      <HeaderForm
        title="¡Bienvenido!"
        subTitle="Encuentra empleados de todo tipo"
        navigation={navigation}
      />
      <View style={{ paddingHorizontal: wp('8%') }}>
        <Input
          titleLocation="Nombre de la empresa o propio"
          hint="Ejemplo S.A de C.V / Juan Pérez"
          value={companyName}
          onChange={value => {
            dispatch(setCompanyName(value));
          }}
          isPassword={false}
        />
        <Input
          titleLocation="Telefono"
          hint="3123307896"
          value={phone}
          onChange={value => {
            dispatch(setPhone(value));
          }}
          isPassword={false}
        />
        <Input
          titleLocation="Direccion"
          hint="Street #123, City"
          value={address}
          onChange={value => {
            dispatch(setAddress(value));
          }}
          isPassword={false}
        />
        <View style={{ paddingHorizontal: wp('8%') }}>
          <Button
            title="Siguiente"
            onPress={() => navigation.navigate('FinishFormRegisterScreen')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default WelcomeScreenEmployer;
