import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import {Dropdown} from 'react-native-element-dropdown';

import {testFilters} from '../../../assets/testFilters';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

interface DropdownSearchProps {
  category: string;
  width: number;
}

export const DropdownSearch: React.FC<DropdownSearchProps> = ({
  category,
  width,
}) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <FontAwesomeIcon
        color={colors.gray}
        icon={faSearch}
        size={20}
        style={styles.label}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && {borderColor: colors.mainBlue},
          {width: width},
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={testFilters}
        search
        maxHeight={200}
        labelField="name"
        valueField="name"
        placeholder={!isFocus ? 'Selecciona una categoría' : '...'}
        searchPlaceholder="Escribe algo..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.name);
          setIsFocus(false);
        }}
      />
    </View>
  );
};
