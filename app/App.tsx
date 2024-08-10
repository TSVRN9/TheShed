import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";

import PlaceholderImage from "../assets/images/background-image.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}></ImageViewer>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" primary={true}></Button>
        <Button label="Use this photo" primary={true}></Button>
      </View>
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
