import { StyleSheet, View, Button, TextInput, Text, Alert } from 'react-native';
import NavBar from './../components/NavBarAll';
import React from 'react';
import api from './../services/api';

export default function EditCourse({route, navigation}) { 
  const [form, setForm] = React.useState({
    Title: '',
    Course_Resume: '',
  })

const {id_course} = route.params;

  const handleSubmit = () => {
    if (form.Title == "" || form.Course_Resume == "") {
      return Alert.alert(
        "Campos obrigatórios",
        "Preencha os campos corretamente",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    if (id_course !== null) {
        api.put(`course/${id_course}`, form).then((response) => {
          navigation.push('Admin')
        })
    } else {
        api.post(`course`, form).then((response) => {
          navigation.push('Admin')
        })
    }
  }
  
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation}/>
      <Text style={styles.text}>{id_course !== null ? "Editar Curso" : "Novo Curso"}</Text>
      <Text>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        onChangeText={newText => setForm({... form, Title: newText})}
        defaultValue={form.Title}
      />
      <Text>Descrição</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Descrição"
        onChangeText={newText => setForm({... form, Course_Resume: newText})}
        defaultValue={form.Course_Resume}
      />
      <View style={styles.button}>
        <Button
          title={"Salvar"}
          color={"whitesmoke"}
          onPress={handleSubmit}
          />
      </View>
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
      fontSize: 30,
      fontWeight: "bold",
      margin: 10,
      color: '#293351',
    },
    button: {
      backgroundColor: "#293351",
      borderRadius: 3,
      fontWeight: "bold",
      margin: 10,  
      height: 40,
      width: '90%',    
    },
    input: {
      borderWidth: 1,
      height: 40,
      width: '90%',
      borderRadius: 3,
      margin: 3,
      marginBottom: 10,
    }
  });
  

