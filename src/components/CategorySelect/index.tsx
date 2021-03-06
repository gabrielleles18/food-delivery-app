import React from "react";
import {ScrollView, View} from "react-native";

import {Category} from "../Category";

import {styles} from "./styles";

type Props = {
    categorySelected: string,
    setCategory: (categoryId: string) => void,
    hasCheckBox?: boolean,
    scrollEnabled: boolean
}

export function CategorySelect({categorySelected, setCategory, hasCheckBox = false, scrollEnabled}: Props) {

    const categories = [
        {id: '1', title: 'Foods',},
        {id: '2', title: 'Drinks',},
        {id: '3', title: 'Snacks',},
        {id: '4', title: 'Fish',},
        {id: '5', title: 'Dessert',},
    ];

    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={scrollEnabled}
        >
            <View style={styles.content}>
                {
                    categories.map(category => (
                        <Category
                            key={category.id}
                            title={category.title}
                            checked={category.id === categorySelected}
                            onPress={() => setCategory(category.id)}
                            hasCheckBox={hasCheckBox}
                        />
                    ))
                }
            </View>
        </ScrollView>
    )

}
