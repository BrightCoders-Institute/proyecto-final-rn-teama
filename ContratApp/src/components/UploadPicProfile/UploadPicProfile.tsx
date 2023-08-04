import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';  
import { faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { styles } from './style';

const UploadPicProfile = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon size={100} icon={faUser} style={styles.icon} />
      <View style={styles.containerEdit}>
      <FontAwesomeIcon size={25} icon={faPenToSquare} style={styles.iconEdit} />
      </View>
    </View>
  )
}

export default UploadPicProfile;
