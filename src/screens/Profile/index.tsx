import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";

import {styles} from './styles';
import {Title} from "../../components/Title";
import userPng from '../../assets/user.png';
import {ButtonNavigator} from "../../components/ButtonNavigator";
import {Button} from "../../components/Button";

export function Profile() {
    return (
        <ScrollView style={styles.container}>
            <Title title='My profile'/>

            <View style={styles.containerDetails}>
                <Text style={styles.details}>Personal details</Text>
                <Text style={styles.change}>change</Text>
            </View>

            <View style={styles.boxUser}>
                <View style={styles.image}>
                    <Image
                        source={userPng}
                        resizeMode='cover'
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Marvis Ighedosa</Text>
                    <Text style={styles.text}>pamarvis@gmail.com</Text>
                    <View style={styles.devider}/>
                    <Text style={styles.text}>+234 9011039271</Text>
                    <View style={styles.devider}/>
                    <Text style={styles.text}>No 15 uti street off ovie palace road effurun delta state</Text>
                </View>
            </View>

            <View style={styles.handles}>
                <ButtonNavigator title='Orders'/>
                <ButtonNavigator title='Pending reviews'/>
                <ButtonNavigator title='Faq'/>
                <ButtonNavigator title='Help'/>

                <Button title='Update'/>
            </View>
        </ScrollView>
    )
}
