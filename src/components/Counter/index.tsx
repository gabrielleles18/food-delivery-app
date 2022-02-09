import React, {useState} from "react";
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {theme} from "../../global/styles/theme";

export function Counter() {
    const [counterInput, setCounterInput] = useState(1);

    function handleCounterIncrease() {
        setCounterInput(counterInput + 1);
    }

    function handleCounterDecrease() {
        if (counterInput > 0) {
            setCounterInput(counterInput - 1);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleCounterDecrease}
                              style={styles.button}>
                <Text style={{color: theme.colors.white}}>-</Text>
            </TouchableOpacity>

            <Text style={styles.text}>{counterInput}</Text>

            <TouchableOpacity onPress={handleCounterIncrease} style={styles.button}>
                <Text style={{color: theme.colors.white}}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
