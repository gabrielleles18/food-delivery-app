import React, {useState} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {RadioButton} from 'react-native-paper';

import {Button} from "../../components/Button";

import {styles} from './styles';
import {Title} from "../../components/Title";
import {theme} from "../../global/styles/theme";
import {DeliveryMethod} from "../../components/DeliveryMethod";

export function Delivery({navigation}: NativeStackHeaderProps) {

    const deliveryMethod = {
        first: 'Door delivery',
        secund: 'Pick up'
    }

    const paymentMethod = {
        first: 'Card',
        secund: 'Bank account'
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Title title='Delivery'/>

                <View style={styles.containerDetails}>
                    <Text style={styles.details}>Address details</Text>
                    <Text style={styles.change}>change</Text>
                </View>

                <View style={styles.boxUser}>
                    <Text style={styles.title}>Marvis Ighedosa</Text>
                    <View style={styles.devider}/>
                    <Text style={styles.text}>No 15 uti street off ovie palace road effurun delta state</Text>
                    <View style={styles.devider}/>
                    <Text style={styles.text}>+234 9011039271</Text>
                </View>
                <DeliveryMethod title='Delivery method' titlesRadio={deliveryMethod}/>
                <DeliveryMethod title='Payment method' titlesRadio={paymentMethod} isIcon={true}/>
                <View style={styles.total}>
                    <Text style={styles.textH6}>Total</Text>
                    <Text style={styles.value}>23,00</Text>
                </View>
                <Button title='Proceed to payment' onPress={()=> navigation.navigate('Home')}/>
            </View>
        </ScrollView>
    )
}
