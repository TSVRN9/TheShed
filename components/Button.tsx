import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Pressable, Text, GestureResponderEvent } from "react-native";

interface ButtonProps {
  label: string;
  primary?: boolean;
  icon?: keyof typeof FontAwesome.glyphMap;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function Button({ label, primary = false , icon = "picture-o", onPress = () => {} }: ButtonProps) {
  if (primary) {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name={icon}
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});
