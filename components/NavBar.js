
import { StyleSheet, Text} from 'react-native';

export default function NavBar() {
    return (
<Text style={StyledNav.bar}>Hitss On</Text>

    );
  }

const StyledNav = StyleSheet.create ({
    bar: {
    width: "100%",
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 0,
    backgroundColor: "#293351",
    color: "yellow",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
    }
})