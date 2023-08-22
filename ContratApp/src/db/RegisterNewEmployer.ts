import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

interface NewFlight {
  estateOrigin: string;
  estateDestination: string;
  countryOrigin: string;
  countryDestination: string;
  date: string;
  tickets: string;
}

function generarID(): string {
  const caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const longitud = 8;
  let id = '';

  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    id += caracteres.charAt(indiceAleatorio);
  }

  return id;
}

export const registerFlight = async (props: NewFlight) => {
  const user = auth().currentUser;

  const flightData = {
    stateOrigin: props.estateOrigin || '',
    stateDestination: props.estateDestination || '',
    countryOrigin: props.countryOrigin || '',
    countryDestination: props.countryDestination || '',
    date: props.date || '',
    tickets: props.tickets || '',
    user_id: user?.uid || '',
    identifier: generarID() || '',
  };

  try {
    const formattedData = JSON.stringify(flightData);

    await firestore()
      .collection('Flights')
      .doc()
      .set(JSON.parse(formattedData));

    Alert.alert('Flight added successfully');
  } catch (error) {
    console.log(error);
  }
};
