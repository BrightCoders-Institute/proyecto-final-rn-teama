import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './FormStyles';
import { Button } from '../Button/Button';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { Title } from '../Title/Title';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import { SubTitle } from '../Subtitle/Subtitle';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//REDUX
import { useDispatch } from 'react-redux';
import { setUserType, setEmail, setPassword } from '../../store/DataStore';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/types';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { signUp } from '../../auth/SignUpUser';
import { LoadingScreen } from '../../screens/LoadingScreen';

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
  email: Yup.string().email('Invalid email').required('Required'),
  checkbox: Yup.boolean().required(),
});

export const Form: React.FC<RegisterFormProps> = ({ navigation }) => {
  const tipo = ['Busco trabajo', 'Ofrezco trabajo'];
  const handleCheckboxChange = (checked: boolean) => { };

  const dispatch = useDispatch();

  const handleUserType = (userType: number) => {
    dispatch(setUserType(userType));
  };

  const { userType } = useSelector((state: RootState) => state.data);

  const handleNavigation = () => {
    if (userType === 0) {
      navigation.navigate('WelcomeScreen');
    } else {
      navigation.navigate('WelcomeScreenEmployer');
    }
  };

  const selectUserType = () => {
    if (userType === 0) {
      return 'Employees';
    } else {
      return 'Employers';
    }
  };

  const handleEmailAndPassword = (email: string, password: string) => {
    dispatch(setEmail(email));
    dispatch(setPassword(password));
  };

  const [isLoading, setIsLoading] = useState(false);

  const sendData = async (values: any) => {
    setIsLoading(true);
    if (values.email && values.password) {
      if (
        (await signUp({
          email: values.email,
          password: values.password,
        })) === true
      ) {
        handleNavigation();
        setIsLoading(false);
      }
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <View>
      <Formik
        initialValues={{
          email: '',
          password: '',
          checkbox: false,
        }}
        validationSchema={validatSchema}
        onSubmit={async values => {
          handleEmailAndPassword(values.email, values.password);
        }}>
        {({ values, errors, touched, handleChange, handleSubmit, dirty }) => (
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
              hint="ejemplo@gmail.com"
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
              hint={'●●●●●●●●'}
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
                handleSubmit(), sendData(values);
              }}
              isDisabled={!dirty}
            />
          </>
        )}
      </Formik>
    </View>
  );
};
