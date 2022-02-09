import React, {useState} from "react";
import {Image, Text, View, TouchableOpacity} from "react-native";
import {SwipeListView} from 'react-native-swipe-list-view';
import {Feather, MaterialIcons} from "@expo/vector-icons";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";

import {Counter} from '../../components/Counter';
import {Button} from "../../components/Button";

import swipePng from '../../assets/swipe.png';
import {styles} from "./styles";
import {theme} from '../../global/styles/theme';
import {foods} from '../../data';

export function Cart({navigation}: NativeStackHeaderProps) {
    const [isFavorite, setIsFavorite] = useState(false);

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
                renderItem={(data: any, rowMap) => (
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
                                    <Counter/>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.hiddenItem}>
                        <TouchableOpacity
                            style={styles.touchItem}
                            onPress={() => (setIsFavorite(!isFavorite))}
                        >
                            <MaterialIcons
                                name={isFavorite ? 'favorite' : 'favorite-border'}
                                color={theme.colors.white}
                                size={20}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.touchItem, {marginLeft: 15}]}>
                            <Feather
                                name="trash-2"
                                color={theme.colors.white}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                rightOpenValue={-130}
            />
            <View style={styles.containerButton}>
                <Button title='Complete order' onPress={() => navigation.navigate('Delivery')}/>
            </View>
        </View>
    )
}
