import { StyleSheet, View, Button, Text } from 'react-native';
import NavBar from './../components/NavBar';
import React from 'react';

export default function Login({navigation}) { 
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation}/>
      <View style={styles.button}>
        <Button
            title={"Home"}
            color={"#293351"}
            onPress={() => navigation.navigate('Home')}
            />
      </View>
      <Text style={styles.text}>Login Page</Text>
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
    text: {
      backgroundColor: "#ffff3f",
      top: 100,
      fontSize: 100,
    }
  });
  

