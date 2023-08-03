import React from 'react';
import {View, ScrollView} from 'react-native';
import ImgProfile from '../components/ImgProfile/ImgProfile';
import FormEmpleado from '../components/form/formEmpleado/FormEmpleado';
import FormEmpleador from '../components/form/formEmpleador/FormEmpleador';
import BtnLogout from '../components/BtnLogout/BtnLogout';

export const EditInfoView = () => {
  return (
    <View>
      <ScrollView>
        <ImgProfile />
        <FormEmpleado />
        {/* <FormEmpleador /> */}
        <BtnLogout />
      </ScrollView>
    </View>
  );
};
export default EditInfoView;
