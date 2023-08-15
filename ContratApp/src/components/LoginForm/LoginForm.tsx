import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './LoginFormStyles';

import * as Yup from 'yup';
import {Formik} from 'formik';
import {Input} from '../../components/Input/Input';
import {SubTitle} from '../../components/Subtitle/Subtitle';
import {Title} from '../../components/Title/Title';
import {Button} from '../../components/Button/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';

const validatSchema = Yup.object().shape({
  password: Yup.string().required('Password invalid'),
  email: Yup.string().email('Invalid email').required('Required'),
  checkbox: Yup.boolean().required(),
});

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

export const LoginForm: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View>
      <Formik
        initialValues={{email: '', password: '', checkbox: false}}
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
                <Text style={styles.supScript}>*</Text>
              </View>
            </View>

            <Button
              title="Iniciar Sesión"
              onPress={() => {
                handleSubmit;
                navigation.navigate('Home');
              }}
              isDisabled={dirty}
            />
          </>
        )}
      </Formik>
    </View>
  );
};
