import { StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons"

/*
 Ternário - condição ? express 1 : express 2 
 Se a condição for verdadeira, o operador retorna o valor da expressão 1, senão, retorna valor 2
 */

export default function LessonsList({listItems, field, navigation, lastSeen}){
//Hook para efeito "...ver mais"
const [ showMore, setShowMore ] = React.useState(false);


//Const associada a a FlatList
 const renderItem = ({item}) => (
   <Collapse>
     <CollapseHeader>
          <View style={lastSeen + 1 < item.number ? styles.itemBlock : styles.item}>
              <TouchableOpacity style={styles.itemTitle} 
                onPress={() => 
                lastSeen + 1 < item.number ? console.log("Não permitido") 
                :     
                navigation.push('LessonPage', {id_course: item.id_course, lessonNumber: item.number})}
                
                >
                 <View style={styles.borderStyle}>
                    <Text style={styles.itemTitle}>
                      {item[field]}
                    </Text>
                 </View>
              </TouchableOpacity>
                  <Icon name="menu" style={styles.sideIcon}/>
          </View>
     </CollapseHeader>
     <CollapseBody style={styles.itemBody}>
            <Text>
              {showMore ? item.lesson_resume : `${item.lesson_resume.substring(0,55)}`}
                  <Text onPress={()=> setShowMore(!showMore)}>
                    {showMore ? " ...ver menos" : "...ver mais"}
                  </Text>
            </Text>
     </CollapseBody>
   </Collapse>
 ); 

 return (
    <FlatList
    data={listItems}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    />
 );

}

const styles = StyleSheet.create({
    itemTitle: {
      color: "#ffdf32",
      fontSize: 20,
      margin: 5
    },
    sideIcon: {
      color: "#ffdf32",
      fontSize: 20,
    },
    item: {
      top: 20,
      width: 300,
      borderRadius: 3,
      margin: 4,
      padding: 15,
      backgroundColor: "#293351",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      },
      itemBlock: {
        top: 20,
        width: 300,
        borderRadius: 3,
        margin: 4,
        padding: 15,
        backgroundColor: "#6666",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        },
    itemBody: {
      top: 13,
      width: 300,
      borderRadius: 3,
      margin: 4,
      padding: 10,
      backgroundColor: "#ffdf32",
    },
    borderStyle: {
      borderWidth: 2,
      borderColor: "rgba(255, 255, 63, .2)",
      borderRadius: 3,
    }
  });