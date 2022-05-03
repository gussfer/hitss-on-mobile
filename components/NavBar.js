import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function NavBar({navigation}) {
    return (
        <View style={StyledNav.bar}>
            <Text style={StyledNav.logo} onPress={() => navigation.navigate('Home')}>Hitss On</Text>
            <Text style={StyledNav.login} onPress={() => navigation.navigate('Login')}>Login</Text>

            {/* <View style={StyledNav.button}>
                <Button
                    title={"Login"}
                    color={"#ffff3f"}
                    onPress={() => navigation.navigate('Login')}
                    />
            </View> */}
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
        marginRight: 15,

      }
})