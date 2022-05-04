import React from 'react';
import api from '../services/api'
import AdminList from '../components/AdminList'
import { StyleSheet, View, Text, Button } from 'react-native';
import NavBar from '../components/NavBar';


export default function Admin({navigation}) {
    //Requisição get
    const [courses,setCourses] = React.useState([])
    React.useEffect(() => {
      api.get('/courses').then((response) => {
        setCourses(response.data)
      })
    }, []);

    const addNew = () => {
        console.log('Add')
    }

    const handleEdit = () => {
        console.log('Edit')
    }

    const handleDelete = (id_course) => {
        api.delete(`course/${id_course}`).then((response) => {
            api.get('/courses').then((response) => {
                setCourses(response.data)
              })
        })
    }
   
    return (
      <View style={styles.container}>
        <NavBar navigation={navigation}/>
        <AdminList listItems={courses} 
        field={"Title"} 
        navigation={navigation} 
        handleDelete={(id_course) => handleDelete(id_course)} 
        handleEdit={(id) => handleEdit(id)}/>
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