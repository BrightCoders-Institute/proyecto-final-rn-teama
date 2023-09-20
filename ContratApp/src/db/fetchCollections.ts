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

export const fetchUserIdentifier = async () => {
    try {
        const userSnapshot = await firestore()
            .collection('Users')
            .doc(uid)
            .get();
        if (userSnapshot.exists) {
            const userIdentifier = userSnapshot.data()?.userData.identifier;
            console.log(userIdentifier);
            return userIdentifier;
        } else {
            console.log('User has no identifier');
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
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

export const fetchUserJobs = async () => {
    try {
        const querySnapshot = await firestore()
            .collection('Jobs')
            .where('jobData.userId', '==', uid)
            .get();
        const noJob = querySnapshot.empty;
        return noJob;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

export const fetchEmployerAcceptedUsers = async (employerId: string) => {
    try {
        const acceptedIds: any = [];
        const querySnapshot = await firestore()
            .collection('Users')
            .doc(employerId)
            .collection('accepted')
            // .where('userData.userType', '==', 1)
            .get();
        const employersSnapshot = querySnapshot.docs.map(doc => doc.data());
        employersSnapshot.forEach((acceptedEmployeeId) => {
            // if (employer) {
            //     employers.push(user)
            // }
            acceptedIds.push(acceptedEmployeeId)
        });
        return acceptedIds;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

export const fetchEmployees = async () => {
    let employees: any = [];
    let passedUsersIds: any = [];
    let acceptedUsersIds: any = [];
    try {
        await firestore().collection('Users').doc(uid).collection('passes').get()
            .then(querySnapshot => {
                querySnapshot.forEach(queryDocumentSnapshot => {
                    passedUsersIds.push(queryDocumentSnapshot.data().identifier);
                });
            })
            .catch(err => {
                console.log(err);
            });

        await firestore().collection('Users').doc(uid).collection('accepted').get()
            .then(querySnapshot => {
                querySnapshot.forEach(queryDocumentSnapshot => {
                    passedUsersIds.push(queryDocumentSnapshot.data().identifier);
                });
            })
            .catch(err => {
                console.log(err);
            });

        let finalPassedIds = passedUsersIds.length > 0 ? passedUsersIds : ['no_passed_users'];
        let finalAcceptedIds = acceptedUsersIds.length > 0 ? acceptedUsersIds : ['no_accepted_users'];

        let querySnapshot = await firestore()
            .collection('Users')
            .where('userData.identifier', 'not-in', [...finalPassedIds, ...finalAcceptedIds])
            .get();
        let employeeSnapshot = querySnapshot.docs.map(doc => doc.data().userData);
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

// export const fetchDataByUserType = async () => {
//     try {
//         const documentSnapshot = await firestore()
//             .collection('Users')
//             .doc(uid)
//             .get();
//         if (documentSnapshot.exists) {
//             const userType = documentSnapshot.data()?.userData.userType;
//             if (userType === 1) {
//                 const employeesData = await fetchEmployees();
//                 return employeesData;
//             } else {
//                 const employersData = await fetchEmployers();
//                 return employersData;
//             }
//         } else {
//             console.log('User has no info');
//             return null;
//         }
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//         throw error;
//     }
// };

