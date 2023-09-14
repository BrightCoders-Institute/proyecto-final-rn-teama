import React from 'react';
import {View, ScrollView} from 'react-native';
import ImgProfile from '../../components/ImgProfile/ImgProfile';
import FormEmpleado from '../../components/form/formEmpleado/FormEmpleado';
import BtnLogout from '../../components/BtnLogout/BtnLogout';
import { Input } from '../../components/Input/Input';
import DropDownService from '../../components/DropDownService/DropDownService';
import JobDescriptionTextarea from '../../components/JobDescriptionTextarea/JobDescriptionTextarea';
import { Button } from '../../components/Button/Button';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from '../../store/DataStore';
//FIREBASE
import auth from '@react-native-firebase/auth';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export const RequestServiceEmployerScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogOut = (isLoggedIn: boolean) => {
    dispatch(setLoggedIn(isLoggedIn));
    auth().signOut();
  };

  return(
    <View>
      <ScrollView>
        <ImgProfile />
        <Input 
        titleLocation='Titulo'
        hintLocation='Titulo de tu publicación'
        />
        <Input 
        titleLocation='Presupuesto'
        hintLocation='0000.00 mxn'
        />
        <Input 
        titleLocation='Tiempo solicitado de entrega'
        hintLocation='Escribe tiempo maximo para entrega'
        />
        <DropDownService 
        titleDropdown='Tipo de Oficio / Servicio Solicitado'
        />
        <View style={{marginTop:-90}}>
          <JobDescriptionTextarea 
          titleDescription='Descripción del trabajo a realizar'
          hintDescription='Descripción'
          />
        </View>
        <View style={{marginBottom: 100}}>
          <Button 
          title='¡Quiero ContratApp!'
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RequestServiceEmployerScreen;
