import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

import {styles} from './style';
import {ButtonIcon} from '../ButtonIcon/ButtonIcon';
import {colors} from '../../../constants/colors';

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

interface HeaderFormProps {
  title: string;
  subTitle?: string;
  navigation: any;
}

const HeaderForm: React.FC<HeaderFormProps> = ({
  title,
  navigation,
  subTitle,
}) => {
  return (
    <View style={styles.background}>
      <View style={styles.backBtn}>
        <ButtonIcon
          onPress={() => navigation.goBack()}
          color={colors.white}
          icon={faArrowLeft}
          isTransparent={true}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default HeaderForm;
