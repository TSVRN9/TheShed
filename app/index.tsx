import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import PlaceholderImage from "../assets/images/background-image.png";
import { useState } from "react";

export default function Index() {
    const [selectedImageUri, setSelectedImageUri] = useState<string | undefined>(undefined);
    const [showImageOptions, setShowImageOptions] = useState<boolean>(false);

    const pickImageAsync = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImageUri(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer
                    placeholderImageSource={PlaceholderImage}
                    sourceUri={selectedImageUri}
                ></ImageViewer>
            </View>
            {showImageOptions ? (
                <View />
            ) : (
                <View style={styles.footerContainer}>
                    <Button label="Choose a photo" primary={true} onPress={pickImageAsync}></Button>
                    <Button label="Use this photo"></Button>
                </View>
            )}
            <StatusBar style="auto" />
        </View>
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
});
