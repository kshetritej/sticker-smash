import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import {  View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { CircleButton } from "@/components/CircleButton";
import { IconButton } from "@/components/IconButton";
import {EmojiPicker} from "@/components/EmojiPicker";
import { ImageSource } from "expo-image";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const imgSrc = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModelVisible] = useState<boolean>(false);
  const [pickedeEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModelVisible(true);
  };

  const  onModalClose = () => {
    setIsModelVisible(false);
  }
  const onSaveImageAsync = async () => {
    setIsModelVisible(false);
  };


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <GestureHandlerRootView>
      <View style={styles.container}
      >
        <View style={styles.imageContainer}>
          <ImageViewer imageSource={imgSrc} selectedImage={selectedImage} />
          {pickedeEmoji && <EmojiSticker imageSize={100} stickerSource={pickedeEmoji} />}
        </View>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={ onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) :(
          <View style={styles.footerContainer}>
            <Button label="Pick an image" theme="primary" onPress={pickImageAsync} />
            <Button label="Take a photo" onPress={() => alert("Don't touch me!")} />
          </View>
       )}
      </View>
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 24
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    flex:1,
    alignItems: 'center',
    flexDirection: 'row',
  },
});