// components/ClientFormScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
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
        if (selectedClientId !== null) {
            ClientService.getClient(selectedClientId).then(clientData => {
                if (clientData) {
                    setClient({
                        cpf: clientData.cpf,
                        nome: clientData.nome,
                        data_nascimento: clientData.data_nascimento,
                        profissao: clientData.profissao,
                        renda_mensal: clientData.renda_mensal,
                        endereco: clientData.endereco,
                        bairro: clientData.bairro,
                        cidade: clientData.cidade,
                        estado: clientData.estado,
                        cep: clientData.cep,
                        celular: clientData.celular,
                    });
                } else {
                    Alert.alert('Erro', 'Não foi possível carregar os dados do cliente.');
                }
            }).catch(error => {
                Alert.alert('Erro', 'Não foi possível carregar os dados do cliente.');
            });
        }
    }, [selectedClientId]);

    const handleChange = (field: string, value: string) => {
        setClient({ ...client, [field]: value });
    };

    const handleSave = () => {
        if (selectedClientId !== null) {
            ClientService.updateClient(selectedClientId, client).then(() => {
                Alert.alert('Sucesso', 'Dados do cliente atualizados com sucesso.');
            }).catch(error => {
                Alert.alert('Erro', 'Não foi possível salvar os dados do cliente.');
            });
        } else {
            ClientService.createClient(client).then(() => {
                Alert.alert('Sucesso', 'Cliente criado com sucesso.');
            }).catch(error => {
                Alert.alert('Erro', 'Não foi possível criar o cliente.');
            });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>CPF</Text>
                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    value={client.cpf}
                    onChangeText={(value) => handleChange('cpf', value)}
                />
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={client.nome}
                    onChangeText={(value) => handleChange('nome', value)}
                />
                <Text style={styles.label}>Data de Nascimento</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Data de Nascimento"
                    value={client.data_nascimento}
                    onChangeText={(value) => handleChange('data_nascimento', value)}
                />
                <Text style={styles.label}>Profissão</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Profissão"
                    value={client.profissao}
                    onChangeText={(value) => handleChange('profissao', value)}
                />
                <Text style={styles.label}>Renda Mensal</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Renda Mensal"
                    value={client.renda_mensal}
                    onChangeText={(value) => handleChange('renda_mensal', value)}
                />
                <Text style={styles.label}>Endereço</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Endereço"
                    value={client.endereco}
                    onChangeText={(value) => handleChange('endereco', value)}
                />
                <Text style={styles.label}>Bairro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Bairro"
                    value={client.bairro}
                    onChangeText={(value) => handleChange('bairro', value)}
                />
                <Text style={styles.label}>Cidade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    value={client.cidade}
                    onChangeText={(value) => handleChange('cidade', value)}
                />
                <Text style={styles.label}>Estado</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Estado"
                    value={client.estado}
                    onChangeText={(value) => handleChange('estado', value)}
                />
                <Text style={styles.label}>CEP</Text>
                <TextInput
                    style={styles.input}
                    placeholder="CEP"
                    value={client.cep}
                    onChangeText={(value) => handleChange('cep', value)}
                />
                <Text style={styles.label}>Celular</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Celular"
                    value={client.celular}
                    onChangeText={(value) => handleChange('celular', value)}
                />
                <Button title="Salvar" onPress={handleSave} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label:{
        fontWeight: 'bold',
        margin: 3
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
