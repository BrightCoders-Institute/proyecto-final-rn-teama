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
import { truncate } from '../../utils/truncate';

const { height } = Dimensions.get('window');

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface CardEmployeeProps {
    card: UserData;
    navigation: HomeScreenNavigationProp;
}
export const CardEmployee: React.FC<CardEmployeeProps> = ({ card, navigation }) => {
    return (
        <View style={styles.card}>
            <View style={styles.tag}>
                <PriceTag isEmployee={false} location={card.location || '...'} />
            </View>
            {card.photo ? (
                <ImageBackground
                    source={{ uri: card.photo }}
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
                    <Text style={styles.cardText}>{card.companyName || card.name}</Text>
                </View>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradientContainer}></LinearGradient>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        navigation.navigate('MoreDetailsScreen', card);
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
                                {truncate(card.employDescription, 50)}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
