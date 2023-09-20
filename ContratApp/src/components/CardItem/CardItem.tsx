import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './StyleCardItem';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface props {
  name: string;
  job: string;
  price: string;
  description: string;
  img: string;
}

export const CardItem = ({name, job, description, price, img}: props) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon size={50} icon={faUser} style={styles.image} />
      <View>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.text}>{job}</Text>
        <Text style={styles.text}>{price}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};
export default CardItem;
