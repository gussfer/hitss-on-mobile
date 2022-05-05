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
      navigation.navigate('EditCourse')
    }

    const handleEdit = (id_course) => {
      navigation.navigate('EditCourse', {id_course: id_course})
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
        <Text style={styles.text}>Cursos Disponíveis</Text>
        <Button 
          style={styles.item}
          title={"+ Adicionar curso"}
          color={"green"}
          onPress={addNew}
          />
          <AdminList 
          listItems={courses} 
          field={"Title"} 
          navigation={navigation} 
          addNew={() => addNew()}
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
    text: {
      marginTop: 10,
      fontSize: 30,
      fontWeight: "bold",
    },
    item: {
      top: 20,
      width: 340,
      borderRadius: 3,
      margin: 4,
      padding: 5,
      backgroundColor: "green",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      },
    button: {
      backgroundColor: "#ffff3f",
      borderRadius: 3,
      marginRight: 15,
    }
  });