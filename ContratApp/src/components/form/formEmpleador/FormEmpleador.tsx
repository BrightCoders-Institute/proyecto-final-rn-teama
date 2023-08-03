import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {styles} from '../formEmpleado/StyleFormEmpleado';
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('El nombre es obligatorio'),
  lastName: Yup.string().required('El apellido es obligatorio'),
  email: Yup.string()
    .email('Ingresa un email válido')
    .required('El email es obligatorio'),
  phone: Yup.string().required('El telefono es obligatorio'),
  address: Yup.string().required('La dirección es obligatorio'),
  razonSocial: Yup.string().required('La razon social es obligatorio'),
  giro: Yup.string().required('El giro es obligatorio'),
});

const FormEmpleado = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    razonSocial: '',
    giro: '',
  };

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <Text style={styles.labeltext}>Nombre</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              placeholder="Nombres"
              placeholderTextColor="#8C8C8C"
            />
            {touched.firstName && errors.firstName && (
              <Text style={styles.error}>{errors.firstName}</Text>
            )}
            <Text style={styles.labeltext}>Apellido</Text>
            <TextInput
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
              placeholder="Apellido"
              style={styles.input}
              placeholderTextColor="#8C8C8C"
            />
            {touched.lastName && errors.lastName && (
              <Text style={styles.error}>{errors.lastName}</Text>
            )}
            <Text style={styles.labeltext}>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
              keyboardType="email-address"
              style={styles.input}
              placeholderTextColor="#8C8C8C"
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <Text style={styles.labeltext}>Telefono</Text>
            <TextInput
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              placeholder="Telefono"
              style={styles.input}
              placeholderTextColor="#8C8C8C"
            />
            {touched.phone && errors.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
            )}
            <Text style={styles.labeltext}>Dirección</Text>
            <TextInput
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
              placeholder="Dirección"
              style={styles.input}
              placeholderTextColor="#8C8C8C"
            />

            {touched.address && errors.address && (
              <Text style={styles.error}>{errors.address}</Text>
            )}
            <Text style={styles.labeltext}>Razon social</Text>
            <TextInput
              onChangeText={handleChange('razonSocial')}
              onBlur={handleBlur('razonSocial')}
              value={values.razonSocial}
              placeholder="Razon social"
              style={styles.input}
              placeholderTextColor="#8C8C8C"
            />
            {touched.razonSocial && errors.razonSocial && (
              <Text style={styles.error}>{errors.razonSocial}</Text>
            )}
            <Text style={styles.labeltext}>Giro</Text>
            <TextInput
              onChangeText={handleChange('giro')}
              onBlur={handleBlur('giro')}
              value={values.giro}
              placeholder="giro"
              style={styles.input}
              placeholderTextColor="#8C8C8C"
            />
            {touched.giro && errors.giro && (
              <Text style={styles.error}>{errors.giro}</Text>
            )}
            <TouchableOpacity style={styles.btnGuardar} onPress={handleSubmit}>
              <Text style={styles.textBtn}>Guardar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
};

export default FormEmpleado;
