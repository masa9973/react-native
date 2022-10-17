import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    console.log("appfunc");

    const ishikawa = "いしかわ！";

    const [iskw, setIskw] = useState(ishikawa);

    const [x, setX] = useState(0);
    const refX = useRef(x);
    useEffect(() => {
        refX.current = x;
    }, [x]);
    useEffect(() => {
        setInterval(() => {
            setIskw(`${ishikawa.repeat(refX.current)}`);
            console.log(refX.current);
            setX(refX.current++);
        }, 500);
    }, []);

    return (
        <View style={styles.container}>
            <Text>{iskw}</Text>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
