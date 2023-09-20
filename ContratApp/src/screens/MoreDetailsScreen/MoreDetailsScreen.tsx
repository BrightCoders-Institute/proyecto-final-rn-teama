import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Button } from '../../components/Button/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { styles } from './style';

import { MoreDetailsData } from '../../interfaces/MoreDetailsData';

type MoreDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MoreDetailsScreen'
>;

interface MoreDetailsProps {
  navigation: MoreDetailsScreenNavigationProp;
  route: MoreDetailsData;
}
const MoreDetailsScreen: React.FC<MoreDetailsProps> = ({
  navigation,
  route,
}: MoreDetailsProps) => {
  const userData = route.params;

  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.backgroundIcon}>
          <FontAwesomeIcon size={50} icon={faUser} style={styles.icon1} />
        </View>
        <Text style={styles.title}>{userData?.name || userData?.employName}</Text>
        <View style={{ alignSelf: 'flex-start', left: '-20%' }}>
          <Text style={styles.subtitle}>Oficio: </Text>
          <Text style={styles.info}>{userData?.employTypeService}</Text>
          <Text style={styles.subtitle}>Descripció<nav></nav>: </Text>
          <Text style={styles.info}>{userData?.employDescription}</Text>
          <Text style={styles.subtitle}>Ubicación: </Text>
          <Text style={styles.info}>{userData?.employLocation}</Text>
          <Text style={styles.subtitle}>Dirección: </Text>
          <Text style={styles.info}>{userData?.address}</Text>
        </View>
        <Button
          title='Regresar'
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ScrollView>
  );
};

export default MoreDetailsScreen;
