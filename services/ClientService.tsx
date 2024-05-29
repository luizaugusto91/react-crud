// service/ClientService.tsx
import { supabase } from "./supabase";

interface Client {
    id?: number;
    cpf: string;
    nome: string;
    data_nascimento: Date;
    profissao: string;
    renda_mensal: number;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: number;
    celular: string;
}
  
export const ClientService = {
    createClient: async (client: Client) => {
        const { data, error } = await supabase
            .from('clientes')
            .insert([client]);
  
        if (error) {
            console.error('Erro ao criar cliente:', error);
            return null;
        }
        return data;
    },
  
    getClient: async (id: number) => {
        const { data, error } = await supabase
            .from('clientes')
            .select('*')
            .eq('id', id)
            .single();
  
        if (error) {
            console.error('Erro ao buscar cliente:', error);
            return null;
        }
        return data;
    },
  
    updateClient: async (id: number, updates: Partial<Client>) => {
        const { data, error } = await supabase
            .from('clientes')
            .update(updates)
            .eq('id', id);
  
        if (error) {
            console.error('Erro ao atualizar cliente:', error);
            return null;
        }
        return data;
    },
  
    deleteClient: async (id: number) => {
        const { data, error } = await supabase
            .from('clientes')
            .delete()
            .eq('id', id);
  
        if (error) {
            console.error('Erro ao deletar cliente:', error);
            return null;
        }
        return data;
    },
  
    listClients: async () => {
        const { data, error } = await supabase
            .from('clientes')
            .select('*');
  
        if (error) {
            console.error('Erro ao listar clientes:', error);
            return null;
        }
        return data;
    }
};