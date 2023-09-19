import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {styles} from '../ImgProfile/Profile';

export const ImgProfile = () => {
  return (
    <View style={styles.containerImg}>
      <Image
        style={styles.imgprofile}
        source={require('../../assets/img/img-1.png')}
      />
    </View>
  );
};
export default ImgProfile;
