import React, {useState} from 'react';
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
import {signIn} from '../../auth/SignInUser';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from '../../store/DataStore';
import {LoadingScreen} from '../../screens/LoadingScreen';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../../constants/colors';

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
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLoggedIn = (isLoggedIn: boolean) => {
    dispatch(setLoggedIn(isLoggedIn));
  };

  const sendData = async (values: any) => {
    setIsLoading(true);
    if (values.email && values.password) {
      if (
        (await signIn({
          email: values.email,
          password: values.password,
        })) === true
      ) {
        handleLoggedIn(true);
        Snackbar.show({
          text: 'Login succesful!',
          backgroundColor: 'green',
          action: {
            text: 'Aceptar',
            textColor: colors.white,
            onPress: () => {
              Snackbar.dismiss();
            },
          },
        });
        setIsLoading(false);
      } else {
        handleLoggedIn(false);
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
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
              kboardType={'email-address'}
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
              kboardType={'default'}
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
                sendData(values);
              }}
              isDisabled={!dirty}
            />
          </>
        )}
      </Formik>
    </View>
  );
};
