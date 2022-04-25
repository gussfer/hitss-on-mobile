import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import NavBar from './components/NavBar';
import React from 'react';
import api from './services/api'

export default function App() {
  const [courses,setCourses] = React.useState([])
  React.useEffect(() => {
    api.get('/courses').then((response) => {
      console.log(response.data)
      setCourses(response.data)
    })
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>
      {item.Title}
      </Text>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <NavBar/>
      <FlatList
      data={courses}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    top: 0,
    backgroundColor: "whitesmoke"
  },
  item: {
    top: 20,
    width: 300,
    borderRadius: 3,
    margin: 4,
    padding: 10,
    backgroundColor: "#293351",
    }
});
