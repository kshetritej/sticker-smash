import {View, Text, StyleSheet} from 'react-native';

export default function AboutPage() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}> About </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    }
})