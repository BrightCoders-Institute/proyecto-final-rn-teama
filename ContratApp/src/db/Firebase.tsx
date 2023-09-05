import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const readData = () => {
  firestore()
    .collection('Users')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      });
    });
};

export default readData;