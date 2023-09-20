import React from 'react';
import {
    Dimensions,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PriceTag from '../PriceTag/PriceTag';
import { UserData } from '../../interfaces/UserData';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileCircleXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../constants/colors';
import { dummyText } from '../../../assets/dummyText';
import { JobData } from '../../interfaces/JobData';

const { height } = Dimensions.get('window');

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface CardJobProps {
    cardJob: JobData;
    navigation: HomeScreenNavigationProp;
}

export const CardJob: React.FC<CardJobProps> = ({ cardJob, navigation }) => {
    return (
        <View style={styles.card}>
            <View style={styles.tag}>
                <PriceTag isEmployee={true} price={cardJob.budget || ''} />
            </View>
            {cardJob.photo ? (
                <ImageBackground
                    source={{ uri: cardJob.photo }}
                    style={styles.image}
                    resizeMode={'cover'}
                />
            ) : (
                <FontAwesomeIcon
                    size={height * 0.1}
                    icon={faFileCircleXmark}
                    style={styles.fileIcon}
                />
            )}
            <View style={styles.columnBottom}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.cardText}>{cardJob.title?.substring(0, 15)}...</Text>
                </View>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradientContainer}></LinearGradient>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        navigation.navigate('JobDetailsScreen', cardJob);
                    }}>
                    <View style={styles.detailsContainer}>
                        <Text
                            style={{
                                color: colors.gray,
                                fontWeight: 'bold',
                                fontSize: 18,
                                alignSelf: 'center',
                            }}>
                            Más información...
                        </Text>
                        <View style={styles.column}>
                            <Text style={styles.title}>Descripción:</Text>
                            <Text style={styles.subtitle}>
                                {cardJob.description?.substring(0, 50) || 'Sin descripción...'}...
                                {/* {dummyText.substring(0, 50)}... */}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
