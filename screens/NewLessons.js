import { StyleSheet, View, Button, TextInput, Text, Alert } from 'react-native';
import NavBarLesson from './../components/NavBarLesson';
import React from 'react';
import api from './../services/api';

export default function NewLessons({route, navigation}) { 
  const [form, setForm] = React.useState({
    title: '',
    lesson_resume: '',
    number: 0,
  })

const {id_course} = route.params;

  const handleSubmit = () => {
    if (form.title == "" || form.lesson_resume == ""|| form.number == 0) {
      return Alert.alert(
        "Campos obrigatórios",
        "Preencha os campos corretamente",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    api.post(`course/video`, {... form, id_course: id_course}).then((response) => {
        navigation.push('Lessons', {id_course: id_course})
      })
  }
  
  return (
    <View style={styles.container}>
      <NavBarLesson navigation={navigation}/>
      <Text style={styles.text}>Nova Aula</Text>
      <Text>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        onChangeText={newText => setForm({... form, title: newText})}
        defaultValue={form.title}
      />
      <Text>Resumo da Aula</Text>
      <TextInput
        multiline
        keyboardType='numeric'
        style={styles.input}
        placeholder="Descrição"
        onChangeText={newText => setForm({... form, lesson_resume: newText})}
        defaultValue={form.lesson_resume}
      />
      <TextInput
        multiline
        style={styles.input}
        placeholder="Número"
        onChangeText={newText => setForm({... form, number: Number(newText)})}
        defaultValue={form.number}
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
  

