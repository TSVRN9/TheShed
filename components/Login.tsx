import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "../lib/supabase";
import Button from "./Button";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const onSignup = async () => {
        setLoading(true);

        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email, password
        });

        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
    };

    const onLogin = async () => {
        setLoading(true);

        const {
            data: { session },
            error,
        } = await supabase.auth.signInWithPassword({
            email, password
        });

        if (error) Alert.alert(error.message)
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
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
                <Pressable onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.toggleLoginText}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Text>
                </Pressable>
                {isLogin ? (
                    <Button primary={true} disabled={loading} label="Login" onPress={onLogin} icon="lock" />
                ) : (
                    <Button primary={true} disabled={loading} label="Sign up" onPress={onSignup} icon="lock" />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 40
    },
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
        gap: 14,
    },
    footerContainer: {
        flex: 2 / 5,
        gap: 24,
    },
    input: {
        width: 320,
        height: 68,
        paddingHorizontal: 30,
        marginHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        fontSize: 18,
        color: "#25292e",
    },
    toggleLoginText: {
        textAlign: 'center',
        color: '#aaa',
        fontSize: 14
    }
});
