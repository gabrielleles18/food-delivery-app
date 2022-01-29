import React, {useState} from "react";
import {Image, ScrollView, Text, View} from "react-native";

import {styles} from "./styles";
import {theme} from '../../global/styles/theme';

import swipePng from '../../assets/swipe.png';

export function Cart() {

    const foods = [
        {
            id: '1',
            title: 'Veggie tomato mix',
            image: 'https://blog.duogourmet.com.br/wp-content/uploads/2019/07/37-Duo-Gourmet-sushi.jpg ',
            price: 'N5,900'
        }, {
            id: '2',
            title: 'Egg and cucmber...',
            image: 'https://fortissima.com.br/wp-content/uploads/2015/03/comida-peruana-tt-width-640-height-420-bgcolor-FFFFFF.jpg',
            price: 'N1,800'
        },
        {
            id: '3',
            title: 'Moi-moi and ekpa.',
            image: 'https://www.vinhocapital.com/wp-content/uploads/2018/10/Bandeja-Paisa_La-Rubia-Caf%C3%A9_Foto-de-Raquel-Aviani-1030x683.jpg',
            price: 'N3,600'
        }
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <Image
                    style={styles.image}
                    source={swipePng}
                    resizeMode="contain"
                />
                <Text style={styles.textSwipe}>Swipe on an item to delete</Text>
            </View>
        </ScrollView>
    )
}
