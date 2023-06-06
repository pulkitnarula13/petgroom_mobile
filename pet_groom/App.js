import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './routes/homeStack.js'
export default function App() {
  return (
    <PaperProvider>
    <Navigator />
    </PaperProvider>
  );
}


