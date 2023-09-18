//FIREBASE
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const uid = auth().currentUser?.uid;

export const fetchUserData = async () => {
    firestore()
        .collection('Users')
        .doc(uid)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                return documentSnapshot.data()?.userData;
            } else {
                console.log('User has no info');
            }
        });
}
export const fetchUserType = async () => {
    firestore()
        .collection('Users')
        .doc(uid)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                return documentSnapshot.data()?.userData.userType;
            } else {
                console.log('User has no info');
            }
        });
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

