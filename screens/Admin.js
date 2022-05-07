import React from 'react';
import api from '../services/api'
import AdminList from '../components/AdminList'
import { StyleSheet, View, Text, Button } from 'react-native';
import NavBar from '../components/NavBar';
import AdminTab from '../components/AdminTab';


export default function Admin({navigation}) {
    //Requisição get
    const [courses,setCourses] = React.useState([])
    const [activeTab, setTab] = React.useState(0)
    const TabItems = [
      {
        label: "Gerenciar Cursos",
        id: 0,
      },
      {
        label: "Gerenciar Alunos",
        id: 1,
      },
      {
        label: "Perfil",
        id: 2,
      },

    ]
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
   
    const Panel = (props) => {
      if (props.tab == activeTab) {
        return (
          <View style={styles.container}>
            {props.children}
          </View>
        )
      }
      return null
    }

    return (
      <View style={styles.container}>
        <NavBar navigation={navigation}/>
        <AdminTab
          listItems={TabItems} 
          handleSelect={(id)=> setTab(id)}
          activeTab={activeTab}
        
        />
        <Panel tab={0}>
          <Text style={styles.text}>Cursos Disponíveis</Text>
          <View style={styles.button}>
            <Button 
              title={"+ Adicionar curso"}
              color={"#293351"}
              onPress={addNew}
              />
          </View>
            <AdminList 
            listItems={courses} 
            field={"Title"} 
            navigation={navigation} 
            addNew={() => addNew()}
            handleDelete={(id_course) => handleDelete(id_course)} 
            handleEdit={(id) => handleEdit(id)}/>
        </Panel>
        <Panel tab={1}><Text>Painel 2</Text></Panel>
        <Panel tab={2}><Text>Painel 3</Text></Panel>
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
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 15,
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
      marginLeft: 15,
      backgroundColor: "yellow",
      width: 300,
      borderRadius: 5,
      marginRight: 15,
    }
  });