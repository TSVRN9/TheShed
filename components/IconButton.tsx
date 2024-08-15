import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
    GestureResponderEvent,
    Pressable,
    Text,
    StyleSheet,
} from "react-native";
interface IconButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
}

export default function IconButton({ onPress, icon, label }: IconButtonProps) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconButtonLabel: {
        color: "#fff",
        marginTop: 12,
    },
});
