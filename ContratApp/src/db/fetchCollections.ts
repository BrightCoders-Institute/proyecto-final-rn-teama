import { useState } from 'react';
import Snackbar from 'react-native-snackbar';
import { colors } from '../../constants/colors';
//FIREBASE
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const uid = auth().currentUser?.uid;

export const fetchUserData = async () => {
    const snapshot = firestore()
        .collection('Users')
        .doc(uid)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                console.log('User data: ', documentSnapshot.data());
            }
        });
    return snapshot;
}

export const fetchEmployers = async () => {
    try {
        const querySnapshot = await firestore()
            .collection('Users')
            .get();
        const employerSnapshot = querySnapshot.docs.map(doc => doc.data().employer);
        console.log('Collection data: ', employerSnapshot);
        return employerSnapshot;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

export const fetchEmployees = async () => {
    try {
        const querySnapshot = await firestore()
            .collection('Users')
            .get();
        const employerSnapshot = querySnapshot.docs.map(doc => doc.data().employee);
        console.log('Collection data: ', employerSnapshot);
        return employerSnapshot;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

// const snapshot = firestore()
//     .collection('Users')
//     .where(Filter('user', '==', 'Tim'))
//     .where('email', '==', 'tim@example.com')
//     .get();