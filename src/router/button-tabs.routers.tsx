// src/router/button-tabs.routers.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from "../screen/HomeScreen";
import PropertyScreen from "../screen/PropertyScreen";
import ClientScreen from "../screen/ClientScreen";
import ClientFormScreen from "../screen/ClientFormScreen";
import AboutScreen from "../screen/AboutScreen";

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();
const Stack = createStackNavigator();

function ClientStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="clientList"
                component={ClientScreen}
                options={{
                    title: 'Lista de Clientes',
                    headerTintColor: 'blue',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="clientDetail"
                component={ClientFormScreen}
                options={{
                    title: 'Detalhes do Cliente',
                    headerTintColor: 'red',
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    );
}

export function ButtonTabsRoutes() {
    return (
        <TabNavigator>
            <TabScreen
                name="home"
                component={HomeScreen}
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="dashboard" size={size} color={color} />
                    )
                }}
            />
            <TabScreen
                name="property"
                component={PropertyScreen}
                options={{
                    title: "Imóveis",
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#1273de'
                    },
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    )
                }}
            />
            <TabScreen
                name="client"
                component={ClientStack}
                options={{
                    title: "Clientes",
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#1273de'
                    },
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={size} color={color} />
                    )
                }}
            />
            <TabScreen
                name="about"
                component={AboutScreen}
                options={{
                    title: "Sobre",
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#1273de'
                    },
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="info" size={size} color={color} />
                    )
                }}
            />
        </TabNavigator>
    );
}
