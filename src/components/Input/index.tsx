import React, {useState} from "react";
import {Text, TextInput, View} from 'react-native';

import {styles} from './styles';
import {theme} from "../../global/styles/theme";

type Props = {
    title: string,
    type?: 'none' | 'name' | 'password' | 'emailAddress'
}

export function Input({title, type = 'none', ...rest}: Props) {
    const [isFocus, setIsFocus] = useState(false);

    function handleBlur() {
        setIsFocus(false)
    }

    function handleFocus() {
        setIsFocus(true)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={[styles.input,
                    isFocus ? {borderColor: theme.colors.primary} : {}
                ]}
                textContentType={type}
                onBlur={handleBlur}
                onFocus={handleFocus}
                {...rest}
            />
        </View>
    );
}
