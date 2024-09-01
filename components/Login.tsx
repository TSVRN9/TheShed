import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "../lib/supabase";
import Button from "./Button";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    return (
        <View style={styles.container}>
            <Text>
                {isLogin ? "Login" : "Sign up"}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    autoComplete="email"
                    placeholder="Email"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                    autoComplete="current-password"
                    placeholder="Password"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.footerContainer}>
                {isLogin ? (
                    <Button primary={true} label="Login" icon="lock" />
                ) : (
                    <Button primary={true} label="Sign up" icon="lock" />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#25292e",
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        paddingTop: 80,
        justifyContent: 'center',
        gap: 40
    },
    inputContainer: {
        flex: 1,
        gap: 20,
    },
    footerContainer: {
        flex: 1 / 3,
    },
    input: {
        width: 320,
        height: 68,
        paddingHorizontal: 30,
        marginHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        borderWidth: 4,
        borderColor: "#ffd33d",
        color: "#25292e",
    },
});
