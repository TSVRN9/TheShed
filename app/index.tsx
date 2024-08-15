import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, ImageSourcePropType } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import PlaceholderImage from "../assets/images/background-image.png";
import { useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

export default function Index() {
    const [selectedImageUri, setSelectedImageUri] = useState<
        string | undefined
    >(undefined);
    const [showImageOptions, setShowImageOptions] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType>();

    const pickImageAsync = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImageUri(result.assets[0].uri);
            setShowImageOptions(true);
        }
    };

    const onReset = () => {
        setSelectedImageUri(undefined);
        setShowImageOptions(false);
    };

    const onAddSticker = () => {
        setShowModal(true);
    };

    const onSaveImageAsync = async () => {};

    const onModalClose = () => {
        setShowModal(false);
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer
                    placeholderImageSource={PlaceholderImage}
                    sourceUri={selectedImageUri}
                ></ImageViewer>
                {pickedEmoji && (
                    <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
                )}
            </View>
            <View style={styles.footerContainer}>
                {showImageOptions ? (
                    <View style={styles.optionRow}>
                        <IconButton
                            icon="refresh"
                            label="Reset"
                            onPress={onReset}
                        />
                        <CircleButton onPress={onAddSticker} />
                        <IconButton
                            icon="save-alt"
                            label="Save"
                            onPress={onSaveImageAsync}
                        />
                    </View>
                ) : (
                    <>
                        <Button
                            label="Choose a photo"
                            primary={true}
                            onPress={pickImageAsync}
                        ></Button>
                        <Button label="Use this photo"></Button>
                    </>
                )}
            </View>
            <EmojiPicker isVisible={showModal} onClose={onModalClose}>
                <EmojiList
                    onSelect={setPickedEmoji}
                    onCloseModal={onModalClose}
                ></EmojiList>
            </EmojiPicker>
            <StatusBar style="auto" />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
    optionRow: {
        flexDirection: "row",
        alignItems: "center",
    },
});
