import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './StyleCardItem';
interface props {
  text1: string;
  text2: string;
  text3: string;
  img: string;
}

export const CardItem = ({text1, text2, text3, img}: props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: img}} style={styles.image} />
      <View>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text}>{text2}</Text>
        <Text style={styles.text}>{text3}</Text>
      </View>
    </View>
  );
};
export default CardItem;
