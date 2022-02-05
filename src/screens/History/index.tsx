import React, {useState} from "react";
import {ScrollView, Text, View} from "react-native";

import {Button} from "../../components/Button";
import {NotFound} from "../../components/NotFound";

export function History() {

    return (
        <NotFound
            title='No history yet'
            subTitle='Lorem Ipsum is simply dummy text of the printing industry'
            icon='clock'/>
    )
}
