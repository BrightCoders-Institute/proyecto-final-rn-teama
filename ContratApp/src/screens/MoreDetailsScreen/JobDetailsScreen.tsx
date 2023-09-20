import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Animated,
    Image,
} from 'react-native';

import { colors } from '../../../constants/colors';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Button } from '../../components/Button/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary';
import { styles } from './style';

import { JobDetailsData } from '../../interfaces/MoreDetailsData';
import { faInfoCircle, faPhone, faWarning } from '@fortawesome/free-solid-svg-icons';

type JobDetailsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'MoreDetailsScreen'
>;

interface JobDetailsProps {
    navigation: JobDetailsScreenNavigationProp;
    route: JobDetailsData;
}

export const JobDetailsScreen: React.FC<JobDetailsProps> = ({ navigation, route }) => {
    const jobData = route.params;

    return (
        <ScrollView>
            <View style={styles.background}>
                <View style={styles.backgroundIcon}>
                    <FontAwesomeIcon size={50} icon={faInfoCircle} style={styles.icon1} />
                </View>
                <Text style={styles.title}>{jobData?.title}</Text>
                <View style={{ alignSelf: 'flex-start', left: '-20%' }}>
                    <Text style={styles.subtitle}>Oficio: </Text>
                    <Text style={styles.info}>{jobData?.jobType}</Text>
                    <Text style={styles.subtitle}>Ubicación: </Text>
                    <Text style={styles.info}>{jobData?.location}</Text>
                    <Text style={styles.subtitle}>Fecha límite: </Text>
                    <Text style={styles.info}>{jobData?.limitDate}</Text>
                    <Text style={styles.subtitle}>Presupuesto: </Text>
                    <Text style={styles.info}>{jobData?.budget}</Text>
                    <Text style={styles.subtitle}>Descripción: </Text>
                    <Text style={styles.info}>{jobData?.description}</Text>
                </View>
                <Button
                    title='Regresar'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </ScrollView>
    )
}
