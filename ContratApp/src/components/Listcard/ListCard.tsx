import React from 'react';
import { FlatList } from 'react-native';
import CardItem from '../CardItem/CardItem';
import { JobData } from '../../interfaces/JobData';

interface ListcardProps {
  jobsData: JobData[];
  navigation: any;
}

export const ListCard: React.FC<ListcardProps> = ({ navigation, jobsData }) => {
  return (
    <FlatList
      data={jobsData}
      renderItem={({ item }) => (
        <CardItem
          name={item.title || 'N/A'}
          job={item.jobType || 'N/A'}
          description={item.description || 'N/A'}
          price={item.budget || 'N/A'}
          dueDate={item.limitDate || 'N/A'}
          navigation={navigation}
          employerId={item.userId || ''}
        />
      )}
    />
  );
};
export default ListCard;
