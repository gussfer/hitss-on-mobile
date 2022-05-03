import { StyleSheet, View, Text } from 'react-native';
import NavBar from './../components/NavBar';
import React from 'react';
import api from './../services/api'
import GenericList from './../components/GenericList';

export default function TestScreen({navigation}) {
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
      <GenericList listItems={courses} field={"Title"} navigation={navigation}/>
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
    backgroundColor: "#ffff3f",
    borderRadius: 3,
    marginRight: 15,
  }
});
