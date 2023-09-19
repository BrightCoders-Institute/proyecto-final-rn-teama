import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import { styles } from './style';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { testFilters } from '../../../assets/testFilters';
import { setJobType } from '../../store/JobStore';

interface DropDownJob {
  category?: string;
  width?: number;
  titleDropdown?: string;
}

export const DropDownJob: React.FC<DropDownJob> = ({
  titleDropdown,
  category,
  width = 100,
}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.nameInput}>{titleDropdown}</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={testFilters}
        search
        maxHeight={200}
        labelField="name"
        valueField="name"
        placeholder="Seleccione Servicio"
        searchPlaceholder="Buscar..."
        onChange={value => {
          dispatch(setJobType(value.name))
        }}
        renderLeftIcon={() => (
          <FontAwesomeIcon size={20} icon={faBriefcase} style={styles.icon} />
        )}
      />
    </View>
  );
};
