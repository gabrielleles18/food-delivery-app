import {View} from "react-native";
import {BorderlessButton} from "react-native-gesture-handler";
import React, {useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

import {Login} from "../screens/Login";
import {Singin} from "../screens/Singin";
import {Home} from "../screens/Home";
import {Search} from "../screens/Search";
import {Profile} from "../screens/Profile";
import {Favorites} from "../screens/Favorites";
import {FoodDetails} from "../screens/FoodDetails";
import {Delivery} from "../screens/Delivery";
import {Cart} from "../screens/Cart";
import {History} from "../screens/History";

import {theme} from "../global/styles/theme";

export function Routes() {
    const [isFavorite, setIsFavorite] = useState(false);

    const Stack = createNativeStackNavigator();
    const Tab = createMaterialBottomTabNavigator();

    const optionsScreen: any = {
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontFamily: theme.fonts.rounded700,
            fontSize: 18,
            color: theme.colors.black
        },
        headerStyle: {
            backgroundColor: theme.colors.gray20
        }
    };

    function Tabs() {
        return (
            <Tab.Navigator
                activeColor={theme.colors.primary}
                inactiveColor={theme.colors.gray55}
                labeled={false}
                barStyle={{backgroundColor: 'transparent'}}
                screenOptions={({route}) => ({
                    tabBarIcon: ({color}) => {
                        const icons: any = {
                            Fead: 'home',
                            Favorites: 'heart-outline',
                            Profile: 'account',
                            History: 'history',
                        };

                        return (
                            <MaterialCommunityIcons
                                name={icons[route.name]}
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
                <Stack.Screen
                    name='Singin'
                    component={Singin}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='Cart'
                    component={Cart}
                    options={optionsScreen}
                />
                <Stack.Screen
                    name='Home'
                    component={Tabs}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='FoodDetails'
                    component={FoodDetails}
                    options={{
                        ...optionsScreen,
                        ...{
                            title: '',
                            headerRight: () => (
                                <View>
                                    <BorderlessButton onPress={() => (setIsFavorite(!isFavorite))}>
                                        <MaterialIcons size={22} name={isFavorite ? 'favorite' : 'favorite-border'}/>
                                    </BorderlessButton>
                                </View>
                            )
                        }
                    }}
                />
                <Stack.Screen
                    name='Delivery'
                    component={Delivery}
                    options={{...optionsScreen, ...{title: 'Checkout'}}}
                />
                <Stack.Screen
                    name='Search'
                    component={Search}
                    options={{...optionsScreen, ...{title: 'Search'}}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
