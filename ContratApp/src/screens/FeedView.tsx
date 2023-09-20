import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar';
import ListImgCard from '../components/ListImgCard/ListImgCard';
import HeaderForm from '../components/HeaderForm/HeaderForm';
import ListCard from '../components/Listcard/ListCard';
import BtnNavigate from '../components/BtnNavigate/BtnNavigate';
import ContactInformationScreen from './ContactInformationScreen/ContactInformationScreen';
import { fetcEmployeeJobs, fetchUserJobs } from '../db/fetchCollections';
import { JobData } from '../interfaces/JobData';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';

type FeedScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface FeedScreenProps {
  navigation: FeedScreenNavigationProp;
}

export const FeedView: React.FC<FeedScreenProps> = ({ navigation }) => {
  let [jobsData, setJobsData] = useState<JobData[] | []>([]);

  useEffect(() => {
    const fetchUserFeed = async () => {
      let employeeJobs = await fetcEmployeeJobs()
      setJobsData(employeeJobs);
    }
    fetchUserFeed();
  }, []);


  return (
    <View>
      {/* <SearchBar /> */}
      <ListCard navigation={navigation} jobsData={jobsData} />
      {/* <ListImgCard /> */}
    </View>
  );
};
export default FeedView;
