import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = async () => {
        await setItem('onboarded', '1');
        navigation.replace('Home');
    };

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={doneButton}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#a7f3d0',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/boost.json')} style={{ width: '100%', height: '100%' }} autoPlay loop />
                            </View>
                        ),
                        title: 'Boost Productivity',
                        subtitle: 'Subscribe this channel to boost your productivity level',
                    },
                    {
                        backgroundColor: '#fef3c7',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/work.json')} style={{ width: '100%', height: '100%' }} autoPlay loop />
                            </View>
                        ),
                        title: 'Work Seamlessly',
                        subtitle: 'Get your work done seamlessly without interruption',
                    },
                    {
                        backgroundColor: '#a78bfa',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/achieve.json')} style={{ width: '100%', height: '100%' }} autoPlay loop />
                            </View>
                        ),
                        title: 'Achieve Higher Goals',
                        subtitle: 'By boosting your productivity we help you to achieve higher goals',
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    lottie: {
        width: width * 0.9,
        height: width,
    },
    doneButton: {
        padding: 20,
    }  
});