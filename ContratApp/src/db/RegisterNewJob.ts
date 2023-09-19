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
}

const currentUser = auth().currentUser;

const addJobInfo = ({ uid }: FirebaseAuthTypes.User, jobData: NewJob) => {
    firestore()
        .collection('Jobs')
        .doc(generarID())
        .set({
            jobData: jobData,
            uid: uid,
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
    };

    try {
        if (currentUser)
            addJobInfo(currentUser, jobData);
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
