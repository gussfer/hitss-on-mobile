import { StyleSheet, View, Button, TextInput, Text, Alert,TouchableOpacity } from 'react-native';
import NavBarLesson from './../components/NavBarLesson';
import React from 'react';
import api from './../services/api';
import * as DocumentPicker from 'expo-document-picker'

export default function NewLessons({route, navigation}) { 
  const [form, setForm] = React.useState({
    title: '',
    lesson_resume: '',
    number: 0,
  })

const [singleFile, setSingleFile] = React.useState(null);
const [step, setStep] = React.useState(0);
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
        setStep(1)
      })
  }

  const uploadVideo = () => {
    if (singleFile != null) {
      const fileToUpload = singleFile;
      const formData = new FormData();
      formData.append('video', fileToUpload);
      console.log(`courses/upload/${id_course}/${form.number}`)
      console.log(fileToUpload)
      api.post(`courses/upload/${id_course}/${form.number}`, formData).then((response) => {
        navigation.push('Lessons', {id_course: id_course})
      });
    }
  };

  const selectFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
    setSingleFile(result);
  };

  const getStep = () => {
    switch (step) {
      case 0:
      return (
        <>
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
              style={styles.input}
              placeholder="Descrição"
              onChangeText={newText => setForm({... form, lesson_resume: newText})}
              defaultValue={form.lesson_resume}
            />
            <TextInput
              multiline
              keyboardType='numeric'
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
        </>
      );
    case 1:
      return (
        <>
          <NavBarLesson/>
          <Text style={styles.description}>Aula: {form.number}</Text>
          <Text style={styles.description}>Título: {form.title}</Text>
          <Text style={styles.description}>Resumo da aula: {form.lesson_resume}</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={selectFile}
          >
            <Text style={styles.newLesson}>Selecionar Video</Text>
          </TouchableOpacity>
          <View style={styles.button}>
              <Button
                title={"Salvar"}
                color={"whitesmoke"}
                onPress={uploadVideo}
                />
          </View>
        </>
      );
      default: return null
    }
  }
  return (
    <View style={styles.container}>
      {getStep()}
    </View>
  )
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      top: 0,
      backgroundColor: "whitesmoke"
    },
    text: {
      fontSize: 30,
      fontWeight: "bold",
      margin: 10,
      color: '#293351',
    },
    newLesson: {
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: 20,
      borderRadius: 5
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
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
  

