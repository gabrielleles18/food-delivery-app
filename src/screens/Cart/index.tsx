import React, {useState} from "react";
import {Image, ScrollView, Text, View, Button} from "react-native";
import {SwipeListView} from 'react-native-swipe-list-view';

import {styles} from "./styles";
import {theme} from '../../global/styles/theme';

import swipePng from '../../assets/swipe.png';

export function Cart() {
    const [counterInput, setCounterInput] = useState(1);

    const foods = [
        {
            id: '1',
            title: 'Veggie tomato mix',
            image: 'https://blog.duogourmet.com.br/wp-content/uploads/2019/07/37-Duo-Gourmet-sushi.jpg ',
            price: 'N5,900'
        },
        {
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

    function handleCounterIncrease() {
        setCounterInput(counterInput + 1);
    }

    function handleCounterDecrease(counter: number) {
        setCounterInput(counterInput - 1);
    }


    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Image
                    style={styles.image}
                    source={swipePng}
                    resizeMode="contain"
                />
                <Text style={styles.textSwipe}>Swipe on an item to delete</Text>
            </View>
            <SwipeListView
                data={foods}
                renderItem={(data, rowMap) => (
                    <View style={styles.containerItem}>
                        <View style={styles.item}>
                            <Image
                                source={{uri: data.item.image}}
                                style={styles.imageItem}
                            />
                            <View style={styles.content}>
                                <Text style={styles.title}>{data.item.title}</Text>
                                <View style={styles.priceAmount}>
                                    <Text style={styles.price}>{data.item.price}</Text>
                                    <View style={styles.amount}>
                                        <Button
                                            onPress={() => handleCounterDecrease}
                                            title='-'
                                        />
                                        <Text>{counterInput}</Text>
                                        <Button
                                            onPress={() => handleCounterIncrease}
                                            title='+'
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.hiddenItem}>
                        <View style={styles.heart}>
                            <Text>A</Text>
                        </View>
                        <View style={styles.delete}>
                            <Text>B</Text>
                        </View>
                    </View>
                )}
                rightOpenValue={-150}
            />
        </View>
    )
}
