import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import {styles} from './style';

const HeaderForm = (props) => {

    const { title } = props

    return (
        <View style={styles.background}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    };

export default HeaderForm