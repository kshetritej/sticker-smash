import { MaterialIcons } from "@expo/vector-icons";
import { View, Pressable, StyleSheet } from "react-native";

type Props = {
    onPress: () => void;
}
export function CircleButton({ onPress }: Props) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <MaterialIcons name="add" size={24} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff',
    }
})