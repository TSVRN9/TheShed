import { StyleSheet, Image, ImageSourcePropType } from "react-native";

const PlaceholderImage = require('../assets/images/background-image.png');

interface ImageViewerProps {
    source?: ImageSourcePropType,
    placeholderImageSource: ImageSourcePropType,
}

export default function ImageViewer({ source, placeholderImageSource }: ImageViewerProps) {
    return <Image source={source || placeholderImageSource} style={styles.image}></Image>
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  },
});