import { StatusBar } from "expo-status-bar";
import { View, Text, Button, Pressable } from "react-native";

export default function PropertyScreen({navigation}:any) {
    return (
        <View style={{flex: 1, backgroundColor: 'grey'}}>
            <Text>
                Property
            </Text>
            <StatusBar style="auto"/>
        </View>
    )
}