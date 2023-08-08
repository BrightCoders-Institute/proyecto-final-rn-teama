import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './StyleSearchBar';
// import Icon from 'react-native-vector-icons';

export const EditInfoView = () => {
  return (
    <View style={styles.container}>
      {/* <Icon name="user" size={20} /> */}
      <TextInput
        style={styles.input}
        placeholder="Buscar"
        placeholderTextColor="#8C8C8C"
      />
    </View>
  );
};
export default EditInfoView;
