import { StyleSheet, Image, ImageSourcePropType } from "react-native";

const PlaceholderImage = require('../assets/images/background-image.png');

interface ImageViewerProps {
    sourceUri?: string,
    placeholderImageSource: ImageSourcePropType,
}

export default function ImageViewer({ sourceUri, placeholderImageSource }: ImageViewerProps) {
    return <Image source={sourceUri ? { uri: sourceUri } : placeholderImageSource} style={styles.image}></Image>
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  },
});