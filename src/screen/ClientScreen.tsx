// components/ClientScreen.tsx
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import ItemCard from '../component/ItemCardComponent';
import { supabase } from "../../services/supabase";

export default function ClientScreen({ navigation }: any) {
    // const [clients, setClients] = useState([]);

    const [newCliente, setNewCliente] = useState({
        cpf: "",
        nome: "",
        data_nascimento: "",
        profissao: "",
        renda_mensal: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        celular: ""
    });
    const [clientes, setClientes] = useState([]);
    const [editingClienteId, setEditingClienteId] = useState(null);
    const [editingCliente, setEditingCliente] = useState({
        cpf: "",
        nome: "",
        data_nascimento: "",
        profissao: "",
        renda_mensal: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        celular: ""
    });

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

    function ClientDetail() {
        console.log("DETAIL");
        navigation.navigate('clientDetail');
    }

    return (        
        <View style={{
            flexDirection: 'column',
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'flex-start'
        }}>            
            <View style={styles.pageHeader}>
                <View style={styles.blank}></View>
                <View style={styles.pageField}>
                    <Text style={styles.pageTitle}> Lista de Clientes </Text>
                </View>
                <View style={styles.blank}>
                    <Pressable style={styles.addButton} onPress={() => ClientDetail()}>
                        <Text style={styles.addButtonText}>+</Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView style={styles.scrollView}>
                {clientes.map((cliente) => (
                    <ItemCard id={cliente.id} nome={cliente.nome} key={cliente.id}/>
                ))}                
            </ScrollView>
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
    addButton: {
        width: 40,
        height: 40,
        borderRadius: 30, // Torna o botão circular
        backgroundColor: 'blue', // Cor interna azul
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
        shadowColor: '#000', // Cor da sombra
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.84, // Raio da sombra
        elevation: 5, // Elevação (necessário para sombra no Android)
        borderWidth: 4, // Largura da borda branca
        borderColor: 'white', // Cor da borda branca
        margin: 5
    },
    addButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
});
