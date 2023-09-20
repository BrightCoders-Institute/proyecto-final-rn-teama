//FIREBASE
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const uid = auth().currentUser?.uid;

export const fetchUserData = async () => {
    try {
        const userSnapshot = await firestore()
            .collection('Users')
            .doc(uid)
            .get();
        if (userSnapshot.exists) {
            const userData = userSnapshot.data()?.userData;
            return userData;
        } else {
            console.log('User has no info');
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }

}

export const fetchUserType = async () => {
    try {
        const userSnapshot = await firestore()
            .collection('Users')
            .doc(uid)
            .get();
        if (userSnapshot.exists) {
            const userType = userSnapshot.data()?.userData.userType;
            return userType;
        } else {
            console.log('User has no inof');
        }
    } catch (error) {
        console.error('Error fetching user type: ', error);
        throw error;
    }

}

export const fetchJobs = async () => {
    try {
        const querySnapshot = await firestore()
            .collection('Jobs')
            .get();
        const jobsSnapshot = querySnapshot.docs.map(doc => doc.data().jobData);
        return jobsSnapshot;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

export const fetchEmployers = async () => {
    try {
        const employers: any = [];
        const querySnapshot = await firestore()
            .collection('Users')
            .get();
        const employersSnapshot = querySnapshot.docs.map(doc => doc.data().userData);
        employersSnapshot.forEach((user) => {
            if (user.userType === 1) {
                employers.push(user)
            }
        });
        return employers;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

export const fetchEmployees = async () => {
    try {
        const employees: any = [];
        const querySnapshot = await firestore()
            .collection('Users')
            .get();
        const employeeSnapshot = querySnapshot.docs.map(doc => doc.data().userData);
        employeeSnapshot.forEach((user) => {
            if (user.userType === 0) {
                employees.push(user)
            }
        });
        return employees;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

export const fetchDataByUserType = async () => {
    try {
        const documentSnapshot = await firestore()
            .collection('Users')
            .doc(uid)
            .get();
        if (documentSnapshot.exists) {
            const userType = documentSnapshot.data()?.userData.userType;
            if (userType === 1) {
                const employeesData = await fetchEmployees();
                return employeesData;
            } else {
                const employersData = await fetchEmployers();
                return employersData;
            }
        } else {
            console.log('User has no info');
            return null;
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

