import {View, Text, StyleSheet} from 'react-native'
import React from 'react';

export default function AdminTab({listItems, handleSelect, activeTab}) {
    return (
        <View style={styles.container}>
            {
                listItems.map((item) => (
                    <Text 
                        style={activeTab == item.id ? selectedTab : styles.tab} 
                        onPress={() => handleSelect(item.id)}>
                        {item.label}
                    </Text>
                ))
            }
        </View>

    );
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        marginTop: 0,
        paddingVertical: 16,   
        backgroundColor: "rgba(41,51, 81, 0.3)",
    },
    tab: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 5,
        marginRight: 5
    },
    selected: {
        color: "#ffdf32",
    },
});
const selectedTab = StyleSheet.compose(styles.selected, styles.tab)