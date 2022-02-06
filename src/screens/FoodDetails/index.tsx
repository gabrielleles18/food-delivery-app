import React, {useState} from "react";
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Swiper from "react-native-web-swiper";

import {styles} from "./styles";
import {theme} from '../../global/styles/theme';
import {Button} from "../../components/Button";
import {NotFound} from "../../components/NotFound";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";

export function FoodDetails({route, navigation}: NativeStackHeaderProps) {

    const foodItem: any = route.params;

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.swiper}>
                <Swiper
                    from={0}
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
                        foodItem.gallery.map((item: any) => (
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
            <View style={styles.content}>
                <Text style={styles.title}>{foodItem.title}</Text>
                <Text style={styles.price}>{foodItem.price}</Text>

                <View style={styles.info}>
                    <Text style={styles.infoTitle}>Delivery info</Text>
                    <Text style={styles.text}>
                        Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
                    </Text>

                    <Text style={styles.infoTitle}>Return policy</Text>
                    <Text style={styles.text}>
                        All our foods are double checked before leaving our stores so by any case
                        you found a broken food please contact our hotline immediately.
                    </Text>
                    <Button title='Add to cart' onPress={()=>navigation.navigate('Cart')}/>
                </View>
            </View>
        </ScrollView>
    )
}
