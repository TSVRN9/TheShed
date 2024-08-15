import { View, Image, ImageSourcePropType } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';


export default function EmojiSticker({ imageSize, stickerSource }: { imageSize: number, stickerSource: ImageSourcePropType }) {
    const scaleImage = useSharedValue(imageSize);

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value === 2 * imageSize) {
                scaleImage.value = scaleImage.value / 2;
            } else {
                scaleImage.value = scaleImage.value * 2;
            }
        });

    const imageStyle = useAnimatedStyle(() => ({
        width: withSpring(scaleImage.value),
        height: withSpring(scaleImage.value),
    }));
        
    return (
        <View style={{ top: -350 }}>
            <Animated.Image 
                source={stickerSource}
                resizeMode="contain"
                style={{ width: imageSize, height: imageSize }}
            />
        </View>
    );
}