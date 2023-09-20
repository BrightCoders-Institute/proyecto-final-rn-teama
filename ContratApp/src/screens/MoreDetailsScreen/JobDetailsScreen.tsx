import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Animated,
    Image,
} from 'react-native';
import { dummyText } from '../../../assets/dummyText';
import { colors } from '../../../constants/colors';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Button } from '../../components/Button/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary';

import { JobDetailsData } from '../../interfaces/MoreDetailsData';

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

    const scrollY = new Animated.Value(0);
    const minHeaderHeight = 100;
    const maxHeaderHeight = 150;

    const inputRange = [-maxHeaderHeight, 0, maxHeaderHeight - minHeaderHeight];

    const headerHeightInterpolated = scrollY.interpolate({
        inputRange,
        outputRange: [maxHeaderHeight, maxHeaderHeight, minHeaderHeight],
        extrapolate: 'clamp',
    });
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                        useNativeDriver: false,
                    },
                )}
                scrollEventThrottle={16}>
                <View style={styles.content}>
                    <Text style={styles.placeholderText}>{jobData.description || 'Sin descripción...'}</Text>
                    <View style={styles.btns_row}>
                        <ButtonSecondary
                            title="Rechazar"
                            onPress={() => {
                                navigation.navigate('Home');
                            }}
                        />
                        <Button title="Aceptar" onPress={() => { }} />
                    </View>
                </View>
            </ScrollView>

            <Animated.View
                style={[styles.header, { height: headerHeightInterpolated }]}>
                <Text style={styles.headerText}>
                    {jobData.title}
                </Text>
                <View style={{ flexDirection: 'column' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignSelf: 'flex-start',
                        }}>
                        <View
                            style={{
                                flexDirection: 'column',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignSelf: 'flex-start',
                                }}>
                                <Text style={styles.subtitlesText}>Oficio:</Text>
                                <Text style={styles.infoText}>{jobData.jobType}</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignSelf: 'flex-start',
                                }}>
                                <Text style={styles.subtitlesText}>Ubicación:</Text>
                                <Text style={styles.infoText}>{jobData.location}</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    alignSelf: 'center',
                                }}>
                                <Text style={styles.subtitlesText}>Presupuesto:</Text>
                                <Text style={styles.infoText}>{`${jobData.budget}.00 MXN`}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
    },
    subtitlesText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 10,
        color: colors.black,
    },
    infoText: {
        fontWeight: 'normal',
        fontSize: 20,
        color: colors.gray,
    },
    content: {
        padding: 16,
        backgroundColor: colors.lighterGray,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    placeholderText: {
        top: 300,
        fontSize: 18,
        marginBottom: 300,
        color: colors.black,
    },
    iconContainer: {
        backgroundColor: colors.lightGray,
        padding: 20,
        borderRadius: 100,
        alignSelf: 'center',
        right: 25,
    },
    btns_row: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
});
