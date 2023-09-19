import React from 'react';
import { View, Dimensions } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Input } from '../../components/Input/Input';
import JobDescriptionTextarea from '../../components/JobDescriptionTextarea/JobDescriptionTextarea';
import { Button } from '../../components/Button/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { useDispatch, useSelector } from 'react-redux';
import { registerJob } from '../../db/RegisterNewJob';
import { setBudget, setDescription, setJobType, setLocation, setTitle, setlimitDate } from '../../store/JobStore';
import { RootState } from '../../store/Reducers';
import { DropDownJob } from '../../components/DropDownJob/DropDownJob';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProfileScreen'
>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export const CreateJobScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const {
    title,
    jobType,
    description,
    budget,
    location,
    limitDate
  } = useSelector((state: RootState) => state.job);

  const clearJob = () => {
    dispatch(setTitle(''));
    dispatch(setDescription(''));
    dispatch(setJobType(''));
    dispatch(setBudget(''));
    dispatch(setLocation(''));
    dispatch(setlimitDate(''));
  };

  const handleCreateJob = async () => {
    const newJob = {
      title,
      jobType,
      description,
      budget,
      location,
      limitDate
    };

    await registerJob(newJob);

    clearJob();
  };
  return (
    <View style={{ width: wp('80%') }}>
      <Input
        titleLocation="Titulo"
        hint="Ejemplo: Casita del árbol"
        value={title}
        onChange={value => {
          dispatch(setTitle(value));
        }}
      />
      <View style={{ marginTop: -10, marginBottom: -150 }}>
        <DropDownJob titleDropdown="Tipo de oficio/servicio" />
      </View>
      <JobDescriptionTextarea
        titleDescription="Descripción del trabajo a realizar"
        hintDescription="Descripción"
        value={description}
        onChange={value => {
          dispatch(setDescription(value));
        }}
        kboardType="default"
      />
      <Input
        titleLocation="Ubicación donde se prestará el trabajo"
        hint="Ejemplo: Colima, Col."
        value={location}
        onChange={value => {
          dispatch(setLocation(value));
        }}
      />
      <Input
        titleLocation="Presupuesto ofrecido en MXN"
        hint="Ejemplo: 100"
        value={budget}
        onChange={value => {
          dispatch(setBudget(value));
        }}
        kboardType='numeric'
      />
      <Input
        titleLocation="Fecha solicitada de entrega"
        hint="Escribe la fecha máxima para completar el servicio"
        value={limitDate}
        onChange={value => {
          dispatch(setlimitDate(value));
        }}
      />
      <View style={{ marginBottom: 100 }}>
        <Button title="Crear empleo" onPress={handleCreateJob} />
      </View>
    </View>
  );
};

export default CreateJobScreen;
