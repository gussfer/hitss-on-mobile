import { StyleSheet, View, Button, TextInput, Text, Alert } from 'react-native';
import NavBar from './../components/NavBar';
import React from 'react';
import api from './../services/api';
import { MainContext } from '../contexts/MainContext';

export default function Login({navigation}) { 
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  })
  const {userInfo, setUserInfo} = React.useContext(MainContext)
  const handleSubmit = () => {
    if (form.email == "" || form.password == "") {
      return Alert.alert(
        "Campos obrigatórios",
        "Preencha os campos corretamente",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    api.post("/user/login", form).then((response) => {
      setUserInfo(response.data)
      navigation.navigate('Home')
    })
  }
  // React.useEffect(() => {
  //   if (!userInfo || userInfo.token)
  //     navigation.navigate('Home')
  // }, [userInfo])
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation}/>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={newText => setForm({... form, email: newText})}
        defaultValue={form.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={newText => setForm({... form, password: newText})}
        defaultValue={form.password}
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <Button
          title={"Entrar"}
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
  

