// components/ClientFormScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useClientContext } from '../context/ClientContext';
import { ClientService } from '../../services/ClientService';

const ClientFormScreen = () => {    
    return (
        <View style={styles.container}>
            {/*<Text style={styles.title}>Detalhes do Cliente</Text>*/}
            <TextInput
                style={styles.input}
                placeholder="CPF"
                //value={client.cpf}
                //onChangeText={(value) => handleChange('cpf', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome"
                //value={client.nome}
                //onChangeText={(value) => handleChange('nome', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Data de Nascimento"
                //value={client.data_nascimento}
                //onChangeText={(value) => handleChange('data_nascimento', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Profissão"
                //value={client.profissao}
                //onChangeText={(value) => handleChange('profissao', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Renda Mensal"
                //value={client.renda_mensal}
                //onChangeText={(value) => handleChange('renda_mensal', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Endereço"
                //value={client.endereco}
                //onChangeText={(value) => handleChange('endereco', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Bairro"
                //value={client.bairro}
                //onChangeText={(value) => handleChange('bairro', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Cidade"
                //value={client.cidade}
                //onChangeText={(value) => handleChange('cidade', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Estado"
                //value={client.estado}
                //onChangeText={(value) => handleChange('estado', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="CEP"
                //value={client.cep}
                //onChangeText={(value) => handleChange('cep', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Celular"
                //value={client.celular}
                //onChangeText={(value) => handleChange('celular', value)}
            />
            <Button title="Salvar" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default ClientFormScreen;
