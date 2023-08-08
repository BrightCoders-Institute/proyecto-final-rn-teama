import React from 'react';
import {View} from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar';
import ListCard from '../components/Listcard/ListCard';
import BtnNavigate from '../components/BtnNavigate/BtnNavigate';
import ListImgCard from '../components/ListImgCard/ListImgCard';

export const EditInfoView = () => {
  return (
    <View>
      <BtnNavigate />
      <SearchBar />
      {/* <ListCard /> */}
      <ListImgCard />
    </View>
  );
};
export default EditInfoView;
