import { View } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen  options={{ "title": "404 - Not Found!" }} />
            {/*@ts-ignore*/}
            <View style={styles.container}>
                <Link href={'/'} style={styles.button}> Goto Home </Link>
            </View>
        </>
    )
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        backgroundColor: '#61dafb',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    }
}