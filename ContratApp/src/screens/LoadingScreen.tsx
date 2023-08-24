import React from 'react';
import {StyleSheet} from 'react-native';
import {View, ActivityIndicator} from 'react-native';
import {colors} from '../../constants/colors';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.mainBlue} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
