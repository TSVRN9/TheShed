import { View, Image, ImageSourcePropType } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { transform } from "@babel/core";

export default function EmojiSticker({
    imageSize,
    stickerSource,
}: {
    imageSize: number;
    stickerSource: ImageSourcePropType;
}) {
    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const savedRotation = useSharedValue(0);
    const rotationRadians = useSharedValue(0);

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

    const drag = Gesture.Pan().onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    const rotate = Gesture.Rotation()
        .onChange((event) => {
            console.log("changed");
            rotationRadians.value = savedRotation.value + event.rotation;
        })
        .onEnd(() => {
            savedRotation.value = rotationRadians.value;
        });

    const containerStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
            {
                translateY: translateY.value,
            },
            { rotateZ: `${(rotationRadians.value / Math.PI) * 180}deg` },
        ],
        transformOrigin: ["50%", "50%"]
    }));

    return (
        <GestureDetector gesture={Gesture.Simultaneous(drag, rotate)}>
            <Animated.View style={[containerStyle, { top: -350 }]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image
                        source={stickerSource}
                        resizeMode="contain"
                        style={[
                            imageStyle,
                            { width: imageSize, height: imageSize },
                        ]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}
