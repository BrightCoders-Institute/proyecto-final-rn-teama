import {View, Text} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import UploadPicProfile from '../../../components/UploadPicProfile/UploadPicProfile';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';
import {Button} from '../../../components/Button/Button';
import {registerEmployer} from '../../../db/RegisterNewEmployer';

import {style} from './style';

import {useDispatch, useSelector} from 'react-redux';
import {
  setEmployEmail,
  setEmployPassword,
  setEmployPhone,
  setEmployAddress,
  setEmployTypeService,
  setEmployDescription,
  setEmployDaysWork,
  setEmployTimeAM,
  setEmployTimePM,
  setEmployPriceMin,
  setEmployPriceMax,
} from '../../../store/DataStore';
import {RootState} from '../../../store/Reducers';

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
  const dispatch = useDispatch();

  const {
    employPhone,
    employAddress,
    employTypeService,
    employDescription,
    employDaysWork,
    employTimeAM,
    employTimePM,
    employPriceMin,
    employPriceMax,
  } = useSelector((state: RootState) => state.data);

  const handleNext = () => {
    console.log(
      employPhone,
      employAddress,
      employTypeService,
      employDescription,
      employDaysWork,
      employTimeAM,
      employTimePM,
      employPriceMin,
      employPriceMax,
    );
    navigation.navigate('UploadFilesScreen');
  };

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
      <View style={{paddingHorizontal: wp('8%')}}>
        <Button title="Finalizar" onPress={() => {}} />
      </View>
    </View>
  );
};

export default UploadPicEmployScreen;
