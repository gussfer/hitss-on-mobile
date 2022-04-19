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
    color: 'red',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
