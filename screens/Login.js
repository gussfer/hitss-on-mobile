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
      <Text>Login</Text>
      <TextInput
        style={{height: 40}}
        placeholder="E-mail"
        onChangeText={newText => setForm({... form, email: newText})}
        defaultValue={form.email}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Senha"
        onChangeText={newText => setForm({... form, password: newText})}
        defaultValue={form.password}
        secureTextEntry={true}
      />
      <Button
        title={"Entrar"}
        color={"#293351"}
        onPress={handleSubmit}
        />
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
    },
  });
  

