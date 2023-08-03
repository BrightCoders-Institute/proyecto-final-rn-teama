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
  skill: Yup.string().required('La experiencia es obligatorio'),
  occupation: Yup.string().required('El oficio es obligatorio'),
  descripOccupation: Yup.string().required(
    'La descripción del oficio es obligatorio',
  ),
  priceService: Yup.string().required('El precio por servicio es obligatorio'),
});

const FormEmpleador = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    skill: '',
    occupation: '',
    descripOccupation: '',
    priceService: '',
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
            <Text style={styles.labeltext}>Experiencia</Text>
            <TextInput
              onChangeText={handleChange('skill')}
              onBlur={handleBlur('skill')}
              value={values.skill}
              placeholder="Experiencia"
              style={styles.input}
              placeholderTextColor="#8C8C8C"
            />
            {touched.skill && errors.skill && (
              <Text style={styles.error}>{errors.skill}</Text>
            )}
            <Text style={styles.labeltext}>Oficio</Text>
            <TextInput
              onChangeText={handleChange('occupation')}
              onBlur={handleBlur('occupation')}
              value={values.occupation}
              placeholder="Oficio"
              style={styles.input}
              placeholderTextColor="#8C8C8C"
            />
            {touched.occupation && errors.occupation && (
              <Text style={styles.error}>{errors.occupation}</Text>
            )}
            <Text style={styles.labeltext}>Breve Descripción del oficio</Text>
            <TextInput
              onChangeText={handleChange('descripOccupation')}
              onBlur={handleBlur('descripOccupation')}
              value={values.descripOccupation}
              placeholder="Descripcón"
              style={styles.input}
              placeholderTextColor="#8C8C8C"
              multiline={true} // Permite múltiples líneas
              numberOfLines={4} // Número de líneas visibles inicialmente
            />
            {touched.descripOccupation && errors.descripOccupation && (
              <Text style={styles.error}>{errors.descripOccupation}</Text>
            )}
            <Text style={styles.labeltext}>Precio por servicio</Text>
            <TextInput
              onChangeText={handleChange('priceService')}
              onBlur={handleBlur('priceService')}
              value={values.priceService}
              placeholder="$0.00"
              style={styles.input}
              placeholderTextColor="#8C8C8C"
            />
            {touched.priceService && errors.priceService && (
              <Text style={styles.error}>{errors.priceService}</Text>
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

export default FormEmpleador;
