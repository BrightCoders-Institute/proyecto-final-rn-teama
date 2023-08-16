import {View, Text} from 'react-native';
import React from 'react';
import HeaderForm from '../../../components/HeaderForm/HeaderForm';
import {ButtonNext} from '../../../components/ButtonNext/ButtonNext';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';

type TellAboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TellAboutYouScreen'
>;

interface TellAboutYouScreenNavigationProps {
  navigation: TellAboutScreenNavigationProp;
}

const TellAboutYouScreen: React.FC<TellAboutYouScreenNavigationProps> = ({
  navigation,
}) => {
  return (
    <View>
      <HeaderForm title="Háblanos más de ti" navigation={navigation} />
      <Text>{'/n'}</Text>
      <Text>{'/n'}</Text>
      <Text>{'/n'}</Text>
      <Text>{'/n'}</Text>
      <Text>{'/n'}</Text>
      <Text>{'/n'}</Text>
      <Text>{'/n'}</Text>
      <ButtonNext
        text="Siguiente"
        onPress={() => {
          navigation.navigate('UploadFilesScreen');
        }}
      />
    </View>
  );
};

export default TellAboutYouScreen;
