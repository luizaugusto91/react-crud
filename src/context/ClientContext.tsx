// src/context/ClientContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ClientContextProps {
    selectedClientId: number | null;
    setSelectedClientId: (id: number) => void;
}

const ClientContext = createContext<ClientContextProps | undefined>(undefined);

export const ClientProvider = ({ children }: { children: ReactNode }) => {
    const [selectedClientId, setSelectedClientId] = useState<number | null>(null);

    return (
        <ClientContext.Provider value={{ selectedClientId, setSelectedClientId }}>
            {children}
        </ClientContext.Provider>
    );
};

export const useClientContext = () => {
    const context = useContext(ClientContext);
    if (!context) {    
        throw new Error('useClientContext must be used within a ClientProvider');
    }
    return context;
};