import React, {useState} from "react";
import {Text, View} from "react-native";
import {RectButtonProps} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import {RadioButton} from "react-native-paper";

import {styles} from "./styles";
import {theme} from "../../global/styles/theme";

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
