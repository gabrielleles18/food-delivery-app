import React from "react";
import {FlatList, Image, ScrollView, Text, View} from "react-native";
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Food} from "../../components/Food";

import {styles} from './styles';
import {foods} from "../../data";
import {Title} from "../../components/Title";

export function Search({navigation}: NativeStackHeaderProps) {

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={foods}
                keyExtractor={item => item.id}
                style={styles.flatList}
                contentContainerStyle={{paddingHorizontal: 30}}
                horizontal={false}
                renderItem={({item}) => (
                    <Food
                        widthContent={140}
                        data={item}
                        onPress={() => navigation.navigate('FoodDetails', item)}
                    />
                )}
                ItemSeparatorComponent={() => <View style={{width: 20, backgroundColor: 'transparent'}}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
