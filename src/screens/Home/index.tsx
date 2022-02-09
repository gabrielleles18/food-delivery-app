import React, {useRef, useState} from "react";
import {FlatList, ScrollView, Text, View, TouchableOpacity, Animated, Easing} from "react-native";
import {BorderlessButton} from "react-native-gesture-handler";
import {Feather, SimpleLineIcons} from "@expo/vector-icons";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";

import {Search} from "../../components/Search";
import {CategorySelect} from "../../components/CategorySelect";
import {Food} from "../../components/Food";

import {menuItens} from '../../data';
import {foods} from '../../data';
import {theme} from "../../global/styles/theme";
import {styles} from "./styles";

export function Home({navigation}: NativeStackHeaderProps) {
    const [category, setCategory] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <View style={styles.itens}>
                    {
                        menuItens &&
                        menuItens.map((menu: any) => (
                            <TouchableOpacity
                                key={menu.id}
                                onPress={() => navigation.navigate(menu.menu)}
                            >
                                <View style={styles.row}>
                                    <Feather
                                        name={menu.icon}
                                        color={theme.colors.black}
                                        size={24}
                                        style={styles.menuIcons}
                                    />
                                    <Text style={styles.menuTitle}>{menu.title}</Text>
                                </View>
                                <View style={styles.line}/>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <TouchableOpacity
                    style={styles.logoff}
                    onPress={() => navigation.navigate('Singin')}
                >
                    <Text style={[styles.menuTitle, {marginRight: 10}]}>Sign-out</Text>
                    <Feather
                        name="arrow-right"
                        color={theme.colors.white}
                        size={24}
                    />
                </TouchableOpacity>
            </View>

            <Animated.View style={{
                flexGrow: 1,
                backgroundColor: theme.colors.gray20,
                position: 'absolute',
                top: 20,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden',
                borderRadius: showMenu ? 15 : 0,
                transform: [
                    {scale: scaleValue},
                    {translateX: offsetValue},
                    {rotateY: showMenu ? '-15deg' : '0deg'},
                ]
            }}>
                <Animated.View style={{
                    transform: [{
                        translateY: closeButtonOffset
                    }],
                    bottom: showMenu ? -30 : 0
                }}>
                    <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={!showMenu}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => {
                                // Do Actions Here....
                                // Scaling the view...
                                Animated.timing(scaleValue, {
                                    toValue: showMenu ? 1 : 0.88,
                                    duration: 150,
                                    useNativeDriver: true
                                })
                                    .start()

                                Animated.timing(offsetValue, {
                                    // YOur Random Value...
                                    toValue: showMenu ? 0 : 200,
                                    duration: 300,
                                    easing: Easing.elastic(1),
                                    useNativeDriver: true
                                })
                                    .start()

                                Animated.timing(closeButtonOffset, {
                                    // YOur Random Value...
                                    toValue: !showMenu ? -30 : 0,
                                    duration: 300,
                                    easing: Easing.elastic(1),
                                    useNativeDriver: true
                                })
                                    .start()

                                setShowMenu(!showMenu);
                            }}>
                                <BorderlessButton>
                                    <Feather
                                        name={showMenu ? 'x' : 'align-left'}
                                        color={theme.colors.black}
                                        size={24}
                                        style={styles.icons}
                                    />
                                </BorderlessButton>
                            </TouchableOpacity>
                            <BorderlessButton
                                onPress={() => navigation.navigate('Cart')}
                            >
                                <SimpleLineIcons
                                    name='basket'
                                    color={theme.colors.gray50}
                                    size={24}
                                    style={styles.icons}
                                />
                            </BorderlessButton>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.title}>
                                Deliciouss {'\n'}Food for you
                            </Text>
                            <Search/>
                        </View>

                        <CategorySelect
                            hasCheckBox
                            setCategory={handleCategorySelect}
                            categorySelected={category}
                            scrollEnabled={!showMenu}
                        />
                        <FlatList
                            scrollEnabled={!showMenu}
                            data={foods}
                            keyExtractor={item => item.id}
                            style={styles.flatList}
                            contentContainerStyle={{paddingHorizontal: 30}}
                            horizontal={true}
                            renderItem={({item}) => (
                                <Food
                                    data={item}
                                    onPress={() => navigation.navigate('FoodDetails', item)}
                                />
                            )}
                            ItemSeparatorComponent={
                                () => <View style={{width: 20, backgroundColor: 'transparent'}}/>
                            }
                            showsHorizontalScrollIndicator={false}
                        />
                    </ScrollView>
                </Animated.View>
            </Animated.View>
        </View>
    )
}
