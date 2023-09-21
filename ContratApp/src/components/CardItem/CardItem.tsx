import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './StyleCardItem';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants/colors';

interface props {
  name: string;
  job: string;
  price: string;
  description: string;
  dueDate: string;
  employerId: string;
  navigation: any;
}

export const CardItem = ({ name, job, description, price, dueDate, navigation, employerId }: props) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ContactInformationScreen', employerId)}>
      <View style={styles.container}>
        <FontAwesomeIcon size={50} icon={faUser} style={styles.image} />
        <View style={{ left: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textName}>{name.substring(0, 15)}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
            <Text style={{ fontSize: 16, color: colors.black, fontWeight: '800' }}>Oficio: </Text>
            <Text style={styles.text}>{job}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
            <Text style={{ fontSize: 16, color: colors.black, fontWeight: '800' }}>Presupuesto: </Text>
            <Text style={styles.text}>{`$${price}.00 MXN`}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
            <Text style={{ fontSize: 16, color: colors.black, fontWeight: '800' }}>Fecha límite: </Text>
            <Text style={styles.text}>{dueDate.substring(0, 15)}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
            <Text style={{ fontSize: 16, color: colors.black, fontWeight: '800' }}>Descripción: </Text>
            <Text style={styles.text}>{description.substring(0, 15)}...</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CardItem;
