import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderForm from '../../../components/HeaderForm/HeaderForm'
import JobDescriptionTextarea from '../../../components/JobDescriptionTextarea/JobDescriptionTextarea'
import { DaysWeekCheckBox } from '../../../components/DaysWeekCheckBox/DaysWeekCheckBox'
import { PriceRangeInputs } from '../../../components/PriceRangeInputs/PriceRangeInputs'
import { WorkScheduleInputs } from '../../../components/WorkScheduleInputs/WorkScheduleInputs'
import { ButtonNext } from '../../../components/ButtonNext/ButtonNext'

import { styles } from './style';

const TellAboutYouScreen = () => {
  return (
    <View>
      <HeaderForm
      title = 'Háblanos más de ti'
      />
      <JobDescriptionTextarea />
      <Text style={styles.nameInput}>¿Qué dias te encuentras activo?</Text>
      <View>
        <DaysWeekCheckBox
        description='Lunes'
        />
        <DaysWeekCheckBox
        description='Martes'
        />
        <DaysWeekCheckBox
        description='Miercoles'
        />
        <DaysWeekCheckBox
        description='Jueves'
        />
        <DaysWeekCheckBox
        description='Viernes'
        />
        <DaysWeekCheckBox
        description='Sabado'
        />
        <DaysWeekCheckBox
        description='Domingo'
        />
      </View>
      <View style={styles.checkBox}>
      <Text style={styles.nameInput}>Horario</Text>
      <WorkScheduleInputs
      hintHourAM='AM'
      hintHourPM='PM'
      />
      </View>
      <View style={styles.checkBox}>
      <Text style={styles.nameInput}>Precio aproximado por tus servicios</Text>
      <PriceRangeInputs
      hintRangeMax='Max'
      hintRangeMin='Min'
      />
      </View>
      <ButtonNext
      text='Siguiente'
      />
    </View>
  );
};

export default TellAboutYouScreen;
