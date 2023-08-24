import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import UploadPicProfile from '../../../components/UploadPicProfile/UploadPicProfile';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/Reducers';
import {
  setAddress,
  setCompanyName,
  setEmail,
  setPassword,
  setPhone,
} from '../../../store/DataStore';
import {registerEmployer} from '../../../db/RegisterNewEmployer';
import {Button} from '../../../components/Button/Button';

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
  const dispatch = useDispatch();

  const {email, password, phone, address, companyName} = useSelector(
    (state: RootState) => state.data,
  );

  const clearEmployer = () => {
    dispatch(setEmail(''));
    dispatch(setPassword(''));
    dispatch(setPhone(''));
    dispatch(setAddress(''));
    dispatch(setCompanyName(''));
  };

  const handleFinishButtonPress = () => {
    const newEmployer = {
      email,
      password,
      phone,
      address,
      companyName,
    };
    registerEmployer(newEmployer);
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
    clearEmployer();
  };

  return (
    <View>
      <HeaderForm title="¡Ya casi terminamos!" navigation={navigation} />
      <UploadPicProfile />
      <Text style={style.text}>
        Agrega una foto, esto ayuda a que el profesional sepa con quien esta
        tratando.
      </Text>
      <View style={{paddingHorizontal: wp('8%')}}>
        <Button title="Siguiente" onPress={handleFinishButtonPress} />
      </View>
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
