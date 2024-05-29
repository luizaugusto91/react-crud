// components/ClientScreen.tsx
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from "react-native";
import ItemCard from '../component/ItemCardComponent';
import { supabase } from "../../services/supabase";
import { Button } from "react-native-elements";
import { useClientContext } from '../context/ClientContext';

export default function ClientScreen({ navigation }: any) {
    const { setSelectedClientId } = useClientContext();
    const [clientes, setClientes] = useState([]);

    const fetchClientes = async () => {
        const { data, error } = await supabase
            .from("clientes")
            .select("*");
        if (error) {
            console.error(error);
        } else {
            setClientes(data);
        }
    }

    useEffect(() => {
        fetchClientes();
    }, []);

    const handleAddNewClient = () => {
        setSelectedClientId(null);  // Define selectedClientId como null para um novo cliente
        navigation.navigate('clientDetail');  // Navega para a tela de detalhes do cliente
    };

    return (        
        <View style={{
            flexDirection: 'column',
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'flex-start'
        }}>
            <ScrollView style={styles.scrollView}>
                {clientes.map((cliente) => (
                    <ItemCard id={cliente.id} nome={cliente.nome} key={cliente.id}/>
                ))}                
            </ScrollView>
            <View>
                <Button title="Adicionar novo" style={styles.add} onPress={handleAddNewClient} />
            </View>
            <StatusBar style="auto" />
        </View>            
    );
}

const styles = StyleSheet.create({
    pageHeader: {
        flexDirection: "row",
        marginTop: 40
    },
    blank: {
        flex: 1
    },
    pageField: {
        flex: 3,
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center"
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#42aadc",
        margin: 5,
        alignContent: "center",
        justifyContent: "center"
    },
    scrollView: {
        flex: 1,
        flexDirection: "column",
    },
    buttonContainer: {
        margin: 10,
        alignItems: 'center',
    },
    add: {
        margin: 10,
    },
    addButton: {
        width: '100%',
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
