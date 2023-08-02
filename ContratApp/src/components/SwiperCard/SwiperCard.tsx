import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFileCircleXmark, faEllipsis} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

const {height} = Dimensions.get('window');

interface CardProps {
  card: {
    photo: string;
    name: string;
  };
}

export const SwiperCard: React.FC<CardProps> = ({card}) => {
  return (
    <View style={styles.card}>
      {card.photo ? (
        <ImageBackground
          source={{uri: card.photo}}
          style={styles.image}
          resizeMode={'cover'}
        />
      ) : (
        <FontAwesomeIcon
          size={height * 0.1}
          icon={faFileCircleXmark}
          style={styles.fileIcon}
        />
      )}
      <View style={styles.columnBottom}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.cardText}>{card.name}</Text>
        </View>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.gradientContainer}></LinearGradient>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log('click card')}>
          <View style={styles.detailsContainer}>
            <FontAwesomeIcon
              icon={faEllipsis}
              size={height * 0.03}
              style={styles.ellipsisIcon}
            />
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Experiencia:
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id
              porro saepe accusamus! Voluptas, blanditiis nobis! Aperiam
              repudiandae tempore blanditiis, repellendus, nesciunt recusandae
              placeat totam soluta, unde perspiciatis corporis libero.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};