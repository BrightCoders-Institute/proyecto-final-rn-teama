import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { styles } from './style';
import { Button } from '../../components/Button/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { ContactInformationData } from '../../interfaces/MoreDetailsData';
import { fetchUserDataById } from '../../db/fetchCollections';
import { UserData } from '../../interfaces/UserData';

type ContactInformationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ContactInformationScreen'
>;

interface JobDetailsProps {
  navigation: ContactInformationScreenNavigationProp;
  route: ContactInformationData;
}

const ContactInformationScreen: React.FC<JobDetailsProps> = ({ navigation, route }) => {
  const employerId = route.params;
  const [employerContact, setEmployerContact] = useState<UserData>();

  useEffect(() => {
    const fetchEmployerContact = async () => {
      setEmployerContact(await fetchUserDataById(employerId));
    }
    fetchEmployerContact();
  }, [])

  return (
    <View style={styles.background}>
      <View style={styles.backgroundIcon}>
        <FontAwesomeIcon size={50} icon={faUser} style={styles.icon1} />
      </View>
      <Text style={styles.info}>{employerContact?.companyName}</Text>
      <FontAwesomeIcon size={30} icon={faPhone} style={styles.icon1} />
      <Text style={styles.info}>{employerContact?.phone || 'N/A'}</Text>
      <FontAwesomeIcon size={30} icon={faEnvelope} style={styles.icon1} />
      <Text style={styles.info}>{employerContact?.email || 'N/A'}</Text>
      <Button
        title='Regresar'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default ContactInformationScreen;