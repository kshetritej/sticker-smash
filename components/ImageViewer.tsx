import { View, StyleSheet } from "react-native";
import { Image, ImageSource } from "expo-image"

export default function ImageViewer({ imageSource }: { imageSource: ImageSource }) {
    return (
            <Image source={imageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
