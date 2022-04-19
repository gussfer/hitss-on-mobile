import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title'

export default function App() {
  return (
    <View style={styles.container}>
      <Title>Hello Mariazinha</Title>
      <StatusBar style="auto" />
      <Title>Como vai você?</Title>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "cursive",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
