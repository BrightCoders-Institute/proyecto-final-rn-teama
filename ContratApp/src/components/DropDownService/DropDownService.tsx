import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBed,
  faMapLocationDot,
  faToilet,
  faRulerCombined,
  faStar,
  faHeart,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import {testFilters} from '../../../assets/testFilters';

import {styles} from './style';

//REDUX
import {useDispatch, useSelector} from 'react-redux';
import {setEmployeeService} from '../../store/DataStore';
import {RootState} from '../../store/Reducers';

interface DropdownServiceProps {
  category: string;
  width: number;
  titleDropdown?: string;
}

const DropDownService: React.FC<DropdownServiceProps> = ({
  titleDropdown,
  category,
  width,
}) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  // const tipo = ['Busco trabajo', 'Ofrezco trabajo'];
  const handleCheckboxChange = (checked: boolean) => {};

  const dispatch = useDispatch();

  // const handleUserType = (employTypeService: string) => {
  //   dispatch(setEmployTypeService(employTypeService));
  // };

  const {employeeService} = useSelector((state: RootState) => state.data);

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
        value={employeeService}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.name);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <FontAwesomeIcon size={20} icon={faBriefcase} style={styles.icon} />
        )}
      />
    </View>
  );
};

export default DropDownService;
