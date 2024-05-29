// src/router/stack.routers.tsx
import { createStackNavigator } from "@react-navigation/stack";

const {Screen, Navigator} = createStackNavigator();
 
import ClientScreen from "../screen/ClientScreen";
import ClientFormScreen from "../screen/ClientFormScreen";
 
export function StackClientRoutes() {
    return (
        <Navigator>
            <Screen
                name="clientList"
                component={ClientScreen}
                options={{
                    title:'Lista de Clientes',
                    headerTintColor: 'blue',
                    headerShown: true,
                }}
            >
            </Screen>
            <Screen
                name="clientDetail"
                component={ClientFormScreen}
                options={{
                    title:'Detalhes do Cliente',
                    headerTintColor: 'red',
                    headerShown: true,
                }}
                >
            </Screen>
        </Navigator>
    )
}