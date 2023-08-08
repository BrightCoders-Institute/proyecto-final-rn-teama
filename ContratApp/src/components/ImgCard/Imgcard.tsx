import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './StyleImgCard';
interface props {
  title: string;
  subtitle: string;
  img: string;
}
export const Imgcard = ({title, subtitle, img}: props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.btnLike}>
        <Image source={require('../../assets/img/like.png')} />
      </TouchableOpacity>
      <Image source={{uri: img}} style={styles.image} />
      <View style={styles.containertText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};
export default Imgcard;
