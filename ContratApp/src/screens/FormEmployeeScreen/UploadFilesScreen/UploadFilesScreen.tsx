import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import UploadImage from '../../../components/UploadImage/UploadImage';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {style} from './style';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';
import {Button} from '../../../components/Button/Button';

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
  // const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  //   useEffect(() => {
  //
  //     const storageRef = storage().ref('some-child');
  //     storageRef.getDownloadURL().then(url => {
  //       setAvatarUrl(url);
  //     });
  //   }, []);

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
    navigation.navigate('UploadPicEmployScreen');
  };

  return (
    <View>
      <HeaderForm
        title="Muestranos algo de tu trabajo"
        navigation={navigation}
      />
      <UploadImage />
      <Text style={style.text}>
        Sube algunas fotos mostrando tu trabajo, esto ayudará a que las personas
        vean lo que sabes hacer.
      </Text>
      <View style={{paddingHorizontal: wp('8%')}}>
        <Button title="Siguiente" onPress={handleNext} />
      </View>
    </View>
  );
};

export default UploadFilesScreen;
