import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';  
import { faBed, faMapLocationDot, faToilet, faRulerCombined, faStar, faHeart, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import {styles} from './style';

const data = [
  { label: 'Servicio 1', value: '1' },
  { label: 'Servicio 2', value: '2' },
  { label: 'Servicio 3', value: '3' },
  { label: 'Servicio 4', value: '4' },
  { label: 'Servicio 5', value: '5' },
  { label: 'Servicio 6', value: '6' },
  { label: 'Servicio 7', value: '7' },
  { label: 'Servicio 8', value: '8' },
];

const DropDownService = () => {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
    <Text style={styles.nameInput}>Oficio / Servicio que ofrece</Text>
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Seleccione Servicio"
      searchPlaceholder="Buscar..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <FontAwesomeIcon size={20} icon={faBriefcase} style={styles.icon} />
      )}
    />
    </View>
  );
};

export default DropDownService;