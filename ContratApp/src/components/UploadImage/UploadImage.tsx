import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';  
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

import { styles } from './style';

const UploadImage = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon size={100} icon={faCloudArrowUp} style={styles.icon} />
      <Text style={styles.text}>Upload Image</Text>
    </View>
  );
};

export default UploadImage;
