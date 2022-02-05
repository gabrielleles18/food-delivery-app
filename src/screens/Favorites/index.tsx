import React, {useState} from "react";
import {ScrollView, Text, View} from "react-native";

import {Button} from "../../components/Button";
import {NotFound} from "../../components/NotFound";

export function Favorites() {

    return (
        <NotFound
            title='No favorites yet'
            subTitle='Lorem Ipsum is simply dummy text of the printing industry'
            icon='heart'/>
    )
}
