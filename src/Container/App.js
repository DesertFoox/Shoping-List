import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UnAuthenticationApp from '../App/UnAuthenticationApp'
export default function App() {
  return (
    <UnAuthenticationApp />
  );
}


