import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {styles} from '../ImgProfile/Profile';

// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faStar} from '@fortawesome/free-solid-svg-icons';

export const ImgProfile = () => {
  return (
    <View style={styles.containerImg}>
      <Image
        style={styles.imgprofile}
        source={require('../../assets/img/img-1.png')}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Cambiar foto</Text>
        {/* <FontAwesomeIcon size={25} icon={faStar} /> */}
      </TouchableOpacity>
    </View>
  );
};
export default ImgProfile;
