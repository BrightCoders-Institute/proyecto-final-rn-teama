import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './FormStyles';
import {Button} from '../Button/Button';

import * as Yup from 'yup';
import {Formik} from 'formik';
import {Title} from '../Title/Title';
import {Input} from '../Input/Input';
import {Checkbox} from '../Checkbox/Checkbox';
import {SubTitle} from '../Subtitle/Subtitle';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//REDUX
import {useDispatch} from 'react-redux';
import {setUserType} from '../../store/DataStore';
import {useSelector} from 'react-redux';
import {RootState} from '../../types/types';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

interface RegisterFormProps {
  navigation: RegisterScreenNavigationProp;
}

const validatSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Password invalid'),
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Required'),
  checkbox: Yup.boolean().required(),
});

export const Form: React.FC<RegisterFormProps> = ({navigation}) => {
  const tipo = ['Busco trabajo', 'Ofrezco trabajo'];
  const handleCheckboxChange = (checked: boolean) => {};

  const dispatch = useDispatch();

  const handleUserType = (userType: number) => {
    dispatch(setUserType(userType));
  };

  const {userType} = useSelector((state: RootState) => state.data);

  const handleNavigation = () => {
    if (userType === 0) {
      navigation.navigate('WelcomeScreen');
    } else {
      navigation.navigate('WelcomeScreenEmployer');
    }
  };

  return (
    <View>
      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          checkbox: false,
        }}
        validationSchema={validatSchema}
        onSubmit={async values => {}}>
        {({values, errors, touched, handleChange, handleSubmit, dirty}) => (
          <>
            <View style={styles.subTitleContainer}>
              <SubTitle>
                <Title title="Email" isSubTitle={true} />
              </SubTitle>
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <Input
              onChange={handleChange('email')}
              value={values.email}
              kboardType="email-address"
            />
            <View style={styles.subTitleContainer}>
              <SubTitle>
                <Title title="Contraseña" isSubTitle={true} />
              </SubTitle>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <Input
              onChange={handleChange('password')}
              value={values.password}
              kboardType="default"
              isPassword={true}
            />
            <View style={styles.margin}>
              <View style={styles.subTitleContainer}>
                <Checkbox
                  label="He leído y acepto términos y condiciones"
                  checked={values.checkbox}
                  onChange={handleCheckboxChange}
                />
                <Text style={styles.supScript}>*</Text>
              </View>
            </View>
            <View style={styles.selectContainer}>
              <SelectDropdown
                data={tipo}
                defaultButtonText={'Selecciona una opción'}
                buttonStyle={styles.dropdown1BtnStyle}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                  handleUserType(index);
                }}
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
            <Button
              title="Crear cuenta"
              onPress={() => {
                handleSubmit(), handleNavigation();
              }}
              isDisabled={!dirty}
            />
          </>
        )}
      </Formik>
    </View>
  );
};
