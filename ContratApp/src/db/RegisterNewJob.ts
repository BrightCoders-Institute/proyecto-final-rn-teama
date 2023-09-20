import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import { colors } from '../../constants/colors';
import { generarID } from './generarId';

interface NewJob {
    title: string;
    jobType: string;
    description: string;
    budget: string;
    location: string;
    limitDate: string;
    userId: string;
}

const uid = auth().currentUser?.uid;

const addJobInfo = (jobData: NewJob) => {
    firestore()
        .collection('Jobs')
        .doc(generarID())
        .set({
            jobData: jobData
        })
        .catch(error => console.log(error));
};

export const registerJob = async (props: NewJob) => {
    const jobData = {
        title: props.title || '',
        jobType: props.jobType || '',
        description: props.description || '',
        budget: props.budget || '',
        location: props.location || '',
        limitDate: props.limitDate || '',
        userId: uid || ''
    };

    try {
        addJobInfo(jobData);
        Snackbar.show({
            text: 'Job created',
            backgroundColor: 'green',
            duration: Snackbar.LENGTH_LONG,
        });
    } catch (error: any) {
        Snackbar.show({
            text: (`Error ${error.code}`),
            backgroundColor: colors.red,
            duration: Snackbar.LENGTH_LONG,
        });
    }
};
