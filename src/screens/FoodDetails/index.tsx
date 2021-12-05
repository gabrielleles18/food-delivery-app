import React, {useState} from "react";
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Swiper from "react-native-web-swiper";

import {styles} from "./styles";
import {theme} from '../../global/styles/theme';

export function FoodDetails() {

    const images = [
        {
            id: '1',
            image: 'https://blog.duogourmet.com.br/wp-content/uploads/2019/07/37-Duo-Gourmet-sushi.jpg ',
        },
        {
            id: '2',
            image: 'https://fortissima.com.br/wp-content/uploads/2015/03/comida-peruana-tt-width-640-height-420-bgcolor-FFFFFF.jpg',
        },
        {
            id: '2',
            image: 'https://www.vinhocapital.com/wp-content/uploads/2018/10/Bandeja-Paisa_La-Rubia-Caf%C3%A9_Foto-de-Raquel-Aviani-1030x683.jpg',
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper
                    from={1}
                    minDistanceForAction={0.1}
                    timeout={10}
                    controlsProps={{
                        dotsTouchable: true,
                        prevTitleStyle: {display: 'none'},
                        nextTitleStyle: {display: 'none'},
                        dotActiveStyle: {backgroundColor: theme.colors.primary},
                    }}
                >
                    {
                        images.map(item => (
                            <View style={styles.swiperItem} key={item.id}>
                                <Image
                                    source={{uri: item.image}}
                                    style={styles.image}
                                />
                            </View>
                        ))
                    }
                </Swiper>
            </View>
        </View>
    )
}
