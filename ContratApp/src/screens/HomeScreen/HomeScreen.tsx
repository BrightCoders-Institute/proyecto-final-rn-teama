import React from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon/ButtonIcon';
import {DropdownSearch} from '../../components/DropdownSearch/DropdownSearch';
import {MainSwiper} from '../../components/MainSwiper/MainSwiper';
import {QuickFilters} from '../../components/QuickFilters/QuickFilters';
import {styles} from './styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {
  faThumbsUp,
  faThumbsDown,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../../../constants/colors';

export const HomeScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={styles.dropdownContainer}>
          <DropdownSearch category={''} width={wp('70%')} />
        </View>
        <View style={styles.filtersContainer}>
          <QuickFilters />
        </View>
        <MainSwiper />
        <View style={styles.buttonContainer}>
          <ButtonIcon
            icon={faThumbsUp}
            color={colors.mainBlue}
            onPress={() => {}}
          />
          <ButtonIcon icon={faXmark} color={colors.gray} onPress={() => {}} />
          <ButtonIcon
            icon={faThumbsDown}
            color={colors.red}
            onPress={() => {}}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
