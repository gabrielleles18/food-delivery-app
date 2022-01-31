import React, {useRef, useState} from "react";
import {FlatList, ScrollView, SafeAreaView, Text, View, TouchableOpacity, Animated} from "react-native";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import {BorderlessButton} from "react-native-gesture-handler";
import {Feather, SimpleLineIcons} from "@expo/vector-icons";

import {Search} from "../../components/Search";
import {CategorySelect} from "../../components/CategorySelect";
import {Food} from "../../components/Food";

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
    ]
    const menuItens = [
        {
            id: '1',
            title: 'Profile',
            icon: 'user',
            menu: 'N5,900'
        },
        {
            id: '2',
            title: 'orders',
            icon: 'shopping-bag',
            menu: 'N1,800'
        },
        {
            id: '3',
            title: 'offer and promo',
            icon: 'tag',
            menu: 'N3,600'
        },
        {
            id: '4',
            title: 'Privacy policy',
            icon: 'shopping-bag',
            menu: 'N3,600'
        },
        {
            id: '5',
            title: 'Security',
            icon: 'shield',
            menu: 'N3,600'
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <View style={styles.itens}>
                    {
                        menuItens.map(menu => (
                            <TouchableOpacity key={menu.id}>
                                <View style={styles.row}>
                                    <Feather
                                        name={menu.icon.toString()}
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
                <TouchableOpacity style={styles.logoff}>
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
                paddingTop: showMenu ? 20 : 0,
                borderRadius: showMenu ? 15 : 0,
                transform: [
                    {scale: scaleValue},
                    {translateX: offsetValue}
                ]
            }}>
                <Animated.View style={{
                    transform: [{
                        translateY: closeButtonOffset
                    }],
                }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => {
                                // Do Actions Here....
                                // Scaling the view...
                                Animated.timing(scaleValue, {
                                    toValue: showMenu ? 1 : 0.88,
                                    duration: 300,
                                    useNativeDriver: true
                                })
                                    .start()

                                Animated.timing(offsetValue, {
                                    // YOur Random Value...
                                    toValue: showMenu ? 0 : 230,
                                    duration: 300,
                                    useNativeDriver: true
                                })
                                    .start()

                                Animated.timing(closeButtonOffset, {
                                    // YOur Random Value...
                                    toValue: !showMenu ? -30 : 0,
                                    duration: 300,
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
                        />
                        <FlatList
                            data={foods}
                            keyExtractor={item => item.id}
                            style={styles.flatList}
                            contentContainerStyle={{paddingHorizontal: 30}}
                            horizontal={true}
                            renderItem={({item}) => (
                                <Food
                                    data={item}
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
