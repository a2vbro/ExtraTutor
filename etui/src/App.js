import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from 'react-native';

export default function App() {
    const {height} = useWindowDimensions();

    return (
        <View style={[styles.container, {height}, StyleSheet.absoluteFill]}>
            <Text>Extra tutor</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    br: {
        height: 12,
    },
    btn: {
        backgroundColor: '#222',
        padding: 10,
    },
    btnText: {
        color: '#fff',
    },
});
