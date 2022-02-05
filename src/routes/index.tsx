import React from "react";
import {Login} from "../screens/Login";
import {Singin} from "../screens/Singin";
import {Home} from "../screens/Home";
import {Profile} from "../screens/Profile";
import {Favorites} from "../screens/Favorites";
import {Cart} from "../screens/Cart";
import {History} from "../screens/History";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {theme} from "../global/styles/theme";

export function Routes() {
    const Stack = createNativeStackNavigator();
    const Tab = createMaterialBottomTabNavigator();

    function Tabs() {
        return (
            <Tab.Navigator
                activeColor={theme.colors.primary}
                inactiveColor={theme.colors.gray55}
                labeled={false}
                barStyle={{backgroundColor: 'transparent'}}
                screenOptions={({route}: any) => ({
                    tabBarIcon: ({color}) => {
                        const icons = {
                            Fead: 'home',
                            Favorites: 'heart-outline',
                            Profile: 'account',
                            History: 'history',
                        };
                        let nameIcon = route.name;

                        return (
                            <MaterialCommunityIcons
                                name={icons[nameIcon]}
                                color={color}
                                size={24}
                            />
                        );
                    },
                })}
            >
                <Tab.Screen name='Fead' component={Home}/>
                <Tab.Screen name='Favorites' component={Favorites}/>
                <Tab.Screen name='Profile' component={Profile}/>
                <Tab.Screen name='History' component={History}/>
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Singin'>
                <Stack.Screen name='Singin' component={Singin} options={{headerShown: false}}/>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='Cart' component={Cart} options={{headerShown: false}}/>
                <Stack.Screen name='Home' component={Tabs} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
