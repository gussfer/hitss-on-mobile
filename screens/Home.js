import { StyleSheet, View, Text, Button } from 'react-native';
import NavBar from '../components/NavBar';
import React from 'react';
import api from '../services/api'
import HomeList from '../components/HomeList';

export default function Home({navigation}) {
  //Requisição get
  const [courses,setCourses] = React.useState([])
  React.useEffect(() => {
    api.get('/courses').then((response) => {
      setCourses(response.data)
    })
  }, []);
 
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation}/>
      <Text style={styles.text}>Cursos Disponíveis</Text>
      <Button navigation={navigation} onPress={() => navigation.navigate('Admin')} title={"Admin"}/>
      <HomeList listItems={courses} field={"Title"} navigation={navigation}/>
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
  button: {
    backgroundColor: "#ffdf32",
    borderRadius: 3,
    marginRight: 15,
  },
  text: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
});
