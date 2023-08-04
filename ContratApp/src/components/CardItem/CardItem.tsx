import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './StyleCardItem';
interface props {
  id: string;
  date: string;
  description: string;
  img: string;
}

export const CardItem = ({id, date, description, img}: props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: img}} style={styles.image} />
      <View>
        <Text style={styles.text}>{id}</Text>
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};
export default CardItem;
