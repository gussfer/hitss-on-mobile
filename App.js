import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar'

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    backgroundColor: "whitesmoke"
  },
});
