import { StyleSheet, View, Text } from 'react-native';
import NavBar from './components/NavBar';
import React from 'react';
import api from './services/api'
import GenericList from './components/GenericList';

export default function App() {
  //Requisição get
  const [courses,setCourses] = React.useState([])
  React.useEffect(() => {
    api.get('/courses').then((response) => {
      setCourses(response.data)
    })
  }, []);
 

  return (
    <View style={styles.container}>
      <NavBar/>
      <GenericList listItems={courses} field={"Title"}/>
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
});
