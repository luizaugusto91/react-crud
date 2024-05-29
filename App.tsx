// src/App.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RoutesTab } from './src/router';
import { ClientProvider } from './src/context/ClientContext';

export default function App() {
  return (
    <NavigationContainer>
      <ClientProvider>
        <RoutesTab />
      </ClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
