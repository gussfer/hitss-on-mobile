import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


export default function NavBar({navigation}) {
    return (
        <View style={StyledNav.bar}>
            <Text style={StyledNav.logo} onPress={() => navigation.navigate('Home')}>Hitss On</Text>
            <Icon name="login-variant"style={StyledNav.login} onPress={() => navigation.navigate('Login')}/>
        </View>
  );
}

const StyledNav = StyleSheet.create ({
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        marginTop: 20,
        paddingVertical: 8,
        borderWidth: 2,   
        backgroundColor: "#293351",
    },
    logo: {
        color: "#ffff3f",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 15,
    },
    login: {
        color: "#ffff3f",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 5,
        marginRight: 15,
      }
})