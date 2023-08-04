import { View, TextInput, Text } from 'react-native';
import React from 'react';

import { styles } from './style';

const JobDescriptionTextarea = () => {

  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
        <Text style={styles.nameInput}>Describe tu oficio y experiencia</Text>
    <View
      style={{
        backgroundColor: value,
        borderRadius: 10,
        borderColor: '#D9D9D9',
        borderWidth: 2,
      }}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={250}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder="Añade una Descripción"
        style={{padding: 5, textAlign:'left', color:'black',}}
      />
    </View>
    </View>
  );
};

export default JobDescriptionTextarea

