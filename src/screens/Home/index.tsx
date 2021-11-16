import React, {useState} from "react";
import {Text, View} from "react-native";

import {Header} from "../../components/Header";
import {Search} from "../../components/Search";
import {CategorySelect} from "../../components/CategorySelect";
import {theme} from "../../global/styles/theme";

import {styles} from "./styles";

export function Home() {
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    return (
        <View style={styles.container}>
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
            </View>
        </View>
    )
}
