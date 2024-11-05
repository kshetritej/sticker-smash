import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, View, Text, StyleSheet } from "react-native"

type Props = {
    onPress: () => void,
    label: string
    icon: keyof typeof MaterialIcons.glyphMap
}
export function IconButton({ onPress, label, icon }: Props) {
    return (
        <View>
            <Pressable onPress={onPress} style={styles.iconButton} >
                <MaterialIcons name={icon} size={24} color={"white"} />
                <Text style={styles.iconButtonLabel}>
                    {label}
                </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    }

})