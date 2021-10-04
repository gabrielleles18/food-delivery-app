import React, {useState} from "react";
import {Image, ScrollView, Text, TextInput, View} from "react-native";

import iconPng from '../../assets/icon.png';
import {styles} from './styles';
import {LinkPress} from "../../components/LinkPress";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

export function Login() {
    const [isCheckedLogin, setIsCheckedLogin] = useState(true);
    const [isCheckedSignUp, setIsCheckedSignUp] = useState(false);

    function handleCheckedLogin() {
        setIsCheckedLogin(!isCheckedLogin);
        setIsCheckedSignUp(false)
    }

    function handleCheckedSignUp() {
        setIsCheckedSignUp(!isCheckedSignUp);
        setIsCheckedLogin(false)
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={iconPng} style={styles.image} resizeMode='contain'/>
                <View style={styles.links}>
                    <LinkPress title='Login' isChecked={isCheckedLogin} onPress={handleCheckedLogin}/>
                    <LinkPress title='Sign-up' isChecked={isCheckedSignUp} onPress={handleCheckedSignUp}/>
                </View>
            </View>
            <View style={styles.footer}>
                {isCheckedSignUp && <Input title="Full name" type='name'/>}
                <Input title="Email address" type='emailAddress'/>
                <Input title="Password" type='password'/>
                {isCheckedSignUp && <Input title="Confirm password" type='password'/>}
                {isCheckedLogin && <Text style={styles.forgot}>Forgot passcode?</Text>}
                <Button title='Login'/>
            </View>
        </ScrollView>
    )
}
