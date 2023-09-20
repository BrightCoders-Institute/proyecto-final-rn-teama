import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {styles} from './style';
import { Button } from '../../components/Button/Button';

const ContactInformationScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.backgroundIcon}>
          <FontAwesomeIcon size={50} icon={faUser} style={styles.icon1} />
      </View>
      <FontAwesomeIcon size={30} icon={faPhone} style={styles.icon1} />
      <Text style={styles.info}>3123001002</Text>
      <FontAwesomeIcon size={30} icon={faEnvelope} style={styles.icon1} />
      <Text style={styles.info}>example@example.com</Text>
      <Button 
      title='Regresar'
      />
    </View>
  )
}

export default ContactInformationScreen;