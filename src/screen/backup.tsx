// components/ClientFormScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useClientContext } from '../context/ClientContext';
import { ClientService } from '../../services/ClientService';

const ClientFormScreen = () => {
    const { selectedClientId } = useClientContext();
    const [client, setClient] = useState({
        cpf: '',
        nome: '',
        data_nascimento: '',
        profissao: '',
        renda_mensal: '',
        endereco: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
        celular: '',
    });

    useEffect(() => {
        if (selectedClientId) {
            const fetchClient = async () => {
                const data = await ClientService.getClient(selectedClientId);
                if (data) {
                    setClient({
                        cpf: data.cpf,
                        nome: data.nome,
                        data_nascimento: new Date(data.data_nascimento).toISOString().split('T')[0],
                        profissao: data.profissao,
                        renda_mensal: data.renda_mensal.toString(),
                        endereco: data.endereco,
                        bairro: data.bairro,
                        cidade: data.cidade,
                        estado: data.estado,
                        cep: data.cep.toString(),
                        celular: data.celular,
                    });
                }
            };
            fetchClient();
        }
    }, [selectedClientId]);

    const handleChange = (field: string, value: string) => {
        setClient({ ...client, [field]: value });
    };

    const handleSubmit = async () => {
        const { cpf, nome, data_nascimento, profissao, renda_mensal, endereco, bairro, cidade, estado, cep, celular } = client;
        /*if (selectedClientId) {
            const updates = {
                cpf,
                nome,
                data_nascimento: new Date(data_nascimento),
                profissao,
                renda_mensal: parseFloat(renda_mensal),
                endereco,
                bairro,
                cidade,
                estado,
                cep: parseInt(cep, 10),
                celular,
            };
            const result = await ClientService.updateClient(selectedClientId, updates);
            if (result) {
                Alert.alert('Sucesso', 'Cliente atualizado com sucesso!');
            } else {
                Alert.alert('Erro', 'Falha ao atualizar cliente.');
            }
        } else {*/
            const newClient = {
                cpf,
                nome,
                data_nascimento: new Date(data_nascimento),
                profissao,
                renda_mensal: parseFloat(renda_mensal),
                endereco,
                bairro,
                cidade,
                estado,
                cep: parseInt(cep, 10),
                celular,
            };
            const result = await ClientService.createClient(newClient);
            if (result) {
                Alert.alert('Sucesso', 'Cliente criado com sucesso!');
                setClient({
                    cpf: '',
                    nome: '',
                    data_nascimento: '',
                    profissao: '',
                    renda_mensal: '',
                    endereco: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    cep: '',
                    celular: '',
                });
            } else {
                Alert.alert('Erro', 'Falha ao criar cliente.');
            }
        //}
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do Cliente</Text>
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={client.cpf}
                onChangeText={(value) => handleChange('cpf', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={client.nome}
                onChangeText={(value) => handleChange('nome', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Data de Nascimento"
                value={client.data_nascimento}
                onChangeText={(value) => handleChange('data_nascimento', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Profissão"
                value={client.profissao}
                onChangeText={(value) => handleChange('profissao', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Renda Mensal"
                value={client.renda_mensal}
                onChangeText={(value) => handleChange('renda_mensal', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Endereço"
                value={client.endereco}
                onChangeText={(value) => handleChange('endereco', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Bairro"
                value={client.bairro}
                onChangeText={(value) => handleChange('bairro', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Cidade"
                value={client.cidade}
                onChangeText={(value) => handleChange('cidade', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Estado"
                value={client.estado}
                onChangeText={(value) => handleChange('estado', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="CEP"
                value={client.cep}
                onChangeText={(value) => handleChange('cep', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Celular"
                value={client.celular}
                onChangeText={(value) => handleChange('celular', value)}
            />
            <Button title="Salvar" onPress={handleSubmit} />
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
