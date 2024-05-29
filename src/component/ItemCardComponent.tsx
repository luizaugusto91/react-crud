// components/ItemCardComponent.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useClientContext } from '../context/ClientContext';
import { Button } from 'react-native-elements';

interface ItemCardProps {
    nome: string;
    id: number; // Usando number para representar long
}

const ItemCard: React.FC<ItemCardProps> = ({ nome, id }) => {    

    const handlePressDetail = () => {
        // Lógica para navegação ou ação de detalhe
        console.log("Detalhes do item:", id);
    };

    const handlePressRemove = () => {
        // Lógica para remoção do item
        console.log("Remover item:", id);
    };

    return (
        <View style={styles.card} key={id}>
            <View style={styles.header}>
                <Text style={styles.cardTitle}>Nome: </Text>
                <Text style={styles.cardInfo}>{nome}</Text>
            </View>
            <View style={styles.footer}>
                <Pressable
                    style={({ pressed }) => [
                        styles.buttonActionDetail,
                        pressed && styles.buttonPressed
                    ]}
                    onPress={handlePressDetail}
                    android_ripple={{ color: 'white' }}
                >
                    <Text style={styles.buttonText}>Detalhes</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.buttonActionRemove,
                        pressed && styles.buttonPressed
                    ]}
                    onPress={handlePressRemove}
                    android_ripple={{ color: 'white' }}
                >
                    <Text style={styles.buttonText}>Remover</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: 'lightgray',
        margin: 5,
        borderRadius: 5,
        padding: 10, // Adicionado padding para melhor visualização do conteúdo
    },
    header: {   
        flex: 1,
        flexDirection: 'row',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        flex: 1,
    },
    // Text
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardInfo: {
        fontSize: 20,
        fontWeight: 'normal'
    },
    buttonActionDetail: {
        margin: 5,
        width: Dimensions.get('window').width / 2 - 20, // Metade da tela menos margem
        backgroundColor: "blue",
        borderRadius: 10, // Cantos arredondados
        elevation: 3, // Elevação
        alignItems: 'center',
        justifyContent: 'center',
        height: 40, // Altura fixa para o botão
    },
    buttonActionRemove: {
        margin: 5,
        width: Dimensions.get('window').width / 2 - 20, // Metade da tela menos margem
        backgroundColor: "red",
        borderRadius: 10, // Cantos arredondados
        elevation: 3, // Elevação
        alignItems: 'center',
        justifyContent: 'center',
        height: 40, // Altura fixa para o botão
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonPressed: {
        opacity: 0.75, // Efeito de clique
    },
});

export default ItemCard;
