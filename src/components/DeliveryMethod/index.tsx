import React, {useState} from "react";
import {Image, Text, View} from "react-native";
import {RectButton, RectButtonProps} from "react-native-gesture-handler";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'

import {styles} from "./styles";
import {RadioButton} from "react-native-paper";
import {theme} from "../../global/styles/theme";
import {Feather} from "@expo/vector-icons";

export type FoodProps = {
    id: string,
    title: string,
    image: string,
    price: string
}

type Props = RectButtonProps & {
    title: string,
    isIcon?: boolean,
    titlesRadio: {
        first: string,
        secund: string
    }
}

export function DeliveryMethod({title, isIcon, titlesRadio}: Props) {
    const [checked, setChecked] = useState('first');

    return (
        <>
            <Text style={[styles.details, {marginBottom: 10}]}>{title}</Text>
            <View style={[styles.boxUser, {paddingHorizontal: 20}]}>
                <View style={styles.radio}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color={theme.colors.primary}
                    />
                    <View style={styles.titleRadio}>
                        {isIcon && (
                            <View style={[{backgroundColor: theme.colors.segondary20}, styles.miniBox]}>
                                <Feather
                                    name='credit-card'
                                    color={theme.colors.white}
                                    size={16}
                                />
                            </View>
                        )}
                        <Text style={styles.textH6}>{titlesRadio.first}</Text>
                    </View>
                </View>
                <View style={[styles.devider, {marginLeft: 37}]}/>
                <View style={styles.radio}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        color={theme.colors.primary}
                    />
                    <View style={styles.titleRadio}>
                        {isIcon && (
                            <View style={[{backgroundColor: '#EB4796'}, styles.miniBox]}>
                                <Feather
                                    name='home'
                                    color={theme.colors.white}
                                    size={16}
                                />
                            </View>
                        )}
                        <Text style={styles.textH6}>{titlesRadio.secund}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}
