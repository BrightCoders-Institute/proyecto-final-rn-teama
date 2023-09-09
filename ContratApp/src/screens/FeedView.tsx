import React from 'react';
import {View} from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar';
import ListImgCard from '../components/ListImgCard/ListImgCard';
import HeaderForm from '../components/HeaderForm/HeaderForm';

export const FeedView = () => {
  return (
    <View>
      {/* <BtnNavigate />
      <SearchBar />
      <ListCard /> */}
      <ListImgCard />
    </View>
  );
};
export default FeedView;
