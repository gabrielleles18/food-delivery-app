import React from "react";
import {Image, ScrollView, Text, View} from "react-native";

import {styles} from './styles';
import iconPng from '../../assets/icon.png';
import usersPng from '../../assets/users.png';
import {Button} from "../../components/Button";

export function Singin() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        style={styles.img}
                        source={iconPng}
                        resizeMode="contain"

                    />
                </View>
                <Text style={styles.title}>
                    Food for Everyone
                </Text>
                <View style={styles.contentImageButton}>
                    <Image
                        style={styles.users}
                        source={usersPng}
                        resizeMode='cover'
                    />
                    <View style={styles.containerButton}>
                        <Button title='Get starteed' isWhite/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
