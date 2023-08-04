import React, {useState} from 'react';
import {View} from 'react-native';
import {CheckBox} from '@rneui/base';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked: defaultChecked,
  onChange,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const toggleCheckbox = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };
  return (
    <View>
      <CheckBox
        title={label}
        checked={checked}
        onPress={toggleCheckbox}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={'checkbox-blank-outline'}
      />
    </View>
  );
};
