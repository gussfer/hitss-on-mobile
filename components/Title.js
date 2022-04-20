import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Title(props) {
  return (
      <Text style={styles.container}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    top: 10,
  },
});
