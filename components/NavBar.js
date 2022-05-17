import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {MainContext} from "../contexts/MainContext"

export default function NavBar({navigation}) {
const {userInfo, setUserInfo} = React.useContext(MainContext)

    return (
        <View style={StyledNav.bar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={StyledNav.logo}>Hitss On</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                {
                    !userInfo.user ? <Icon name="login-variant"style={StyledNav.login}/> 
                    : 
                    <Text style={StyledNav.name}>{userInfo.user.first_name}</Text>
                }
            </TouchableOpacity>
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
        color: "#ffdf32",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 15,
    },
    name: {
        color: "#ffdf32",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 15,
        marginTop: 7,
    },
    login: {
        color: "#ffdf32",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 5,
        marginRight: 15,
      }
})