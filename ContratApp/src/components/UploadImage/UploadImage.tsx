import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';  
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';



const UploadImage = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon size={100} icon={faCloudArrowUp} style={styles.icon} />
      <Text style={styles.text}>Upload Image</Text>
    </View>
  );
};

export default UploadImage

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // bottom: 10,
        alignSelf: 'center',
        marginVertical: 40,
        color: '#FFFFFF',
        borderRadius: 18,
        backgroundColor: '#D9D9D9',
        padding: '3%',
        width: 200,
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 5,
        color: '#676E76',
        marginStart: 10,
      },
    text: {
        color: '#676E76',
        fontSize: 16,
        fontWeight: '300',
    },
});