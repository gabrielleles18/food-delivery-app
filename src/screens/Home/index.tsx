import React, {useState} from "react";
import {FlatList, Linking, ScrollView, Text, View} from "react-native";

import {Header} from "../../components/Header";
import {Search} from "../../components/Search";
import {CategorySelect} from "../../components/CategorySelect";
import {Food} from "../../components/Food";

import {theme} from "../../global/styles/theme";
import {styles} from "./styles";

export function Home() {
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    const foods = [
        {
            id : '1',
            title: 'Veggie tomato mix',
            image: 'https://blog.duogourmet.com.br/wp-content/uploads/2019/07/37-Duo-Gourmet-sushi.jpg ',
            price: 'N5,900'
        },{
            id : '2',
            title: 'Egg and cucmber...',
            image: 'https://fortissima.com.br/wp-content/uploads/2015/03/comida-peruana-tt-width-640-height-420-bgcolor-FFFFFF.jpg',
            price: 'N1,800'
        },
        {
            id : '3',
            title: 'Moi-moi and ekpa.',
            image: 'https://www.vinhocapital.com/wp-content/uploads/2018/10/Bandeja-Paisa_La-Rubia-Caf%C3%A9_Foto-de-Raquel-Aviani-1030x683.jpg',
            price: 'N3,600'
        }
    ]

    return (
        <ScrollView style={styles.container}>
            <Header
                iconLeft='align-left'
                iconRight='basket'
                color={theme.colors.gray50}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Deliciouss {'\n'}Food for you
                </Text>
                <Search/>
                <CategorySelect
                    hasCheckBox
                    setCategory={handleCategorySelect}
                    categorySelected={category}
                />
                <FlatList
                    data={foods}
                    keyExtractor={item => item.id}
                    style={styles.flatList}
                    horizontal={true}
                    renderItem={({item}) => (
                        <Food
                            data={item}
                        />
                    )}
                    ItemSeparatorComponent={
                        () => <View style={{ width: 20, backgroundColor: 'transparent' }}/>
                    }
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    )
}
