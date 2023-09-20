import React from 'react';
import {View} from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar';
import ListImgCard from '../components/ListImgCard/ListImgCard';
import HeaderForm from '../components/HeaderForm/HeaderForm';
import ListCard from '../components/Listcard/ListCard';
import BtnNavigate from '../components/BtnNavigate/BtnNavigate';
import ContactInformationScreen from './ContactInformationScreen/ContactInformationScreen';

export const FeedView = () => {
  return (
    <View>
      {/* <ContactInformationScreen /> */}
      <BtnNavigate />
      <SearchBar />
      <ListCard />
      {/* <ListImgCard /> */}
    </View>
  );
};
export default FeedView;
