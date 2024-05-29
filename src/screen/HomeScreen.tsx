import { StatusBar } from "expo-status-bar";
import { View, Text, Button, Pressable } from "react-native";

export default function HomeScreen({navigation}:any) {
    return (
        <View style={{flex: 1, backgroundColor: 'orange'}}>
            <Text>
                Home
            </Text>
            <StatusBar style="auto"/>
        </View>
    )
}