import { View, StyleSheet } from "react-native";
import { Image, ImageSource } from "expo-image"

type Props = {
    imageSource: ImageSource;
    selectedImage?: string;
}
export default function ImageViewer({ imageSource, selectedImage }: Props) {
    const imgSource = selectedImage ? { uri: selectedImage } : imageSource;
    return (
        <Image source={imgSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
