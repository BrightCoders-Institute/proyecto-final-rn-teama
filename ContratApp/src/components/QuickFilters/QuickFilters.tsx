import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {ToggeableButton} from '../ToggeableButton/ToggeableButton';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {testFilters} from '../../../assets/testFilters';

export const QuickFilters = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={testFilters}
        renderItem={filter => (
          <ToggeableButton name={filter.item.name} onPress={() => {}} />
        )}
        keyExtractor={filter => filter.id}
      />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', '#FFFFFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradientContainer}>
        <View style={{width: 100, height: 50, alignSelf: 'flex-end'}}></View>
      </LinearGradient>
    </View>
  );
};
