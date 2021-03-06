import { StyleSheet, View, Text, Button } from 'react-native';
import NavBar from '../components/NavBar';
import React from 'react';
import api from '../services/api'
import HomeList from '../components/HomeList';
import {MainContext} from "../contexts/MainContext" 

export default function Home({navigation}) {
  const {userInfo, setUserInfo} = React.useContext(MainContext) 
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
      {
        userInfo.user && 
        <Button 
          title={"Admin"}
          color={"#ffdf32"}
          navigation={navigation} 
          onPress={() => navigation.navigate('Admin')} 
        />
      }
      <HomeList 
        listItems={courses} 
        field={"Title"} 
        navigation={navigation}
        userInfo={userInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
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
