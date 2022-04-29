import { StyleSheet, FlatList, View, Text } from 'react-native';
import React from 'react';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

/*
 Ternário - condição ? express 1 : express 2 
 Se a condição for verdadeira, o operador retorna o valor da expressão 1, senão, retorna valor 2
 */

export default function GenericList({listItems, field}){
 //Hook para efeito "...ver mais"
 const [ showMore, setShowMore ] = React.useState(false);
//Const associada a a FlatList
 const renderItem = ({item}) => (
   <Collapse>
     <CollapseHeader>
       <View style={styles.item}>
         <Text style={styles.itemTitle}>
           {item[field]}
         </Text>
       </View>
     </CollapseHeader>
         <CollapseBody style={styles.itemBody}>
           <Text>
             {showMore ? item.Course_Resume : `${item.Course_Resume.substring(0,55)}`}
             <Text onPress={()=> setShowMore(!showMore)}>
               {showMore ? <i><b> ver menos</b></i>:<i> ...ver mais</i>}
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
      color: "#ffff3f",
    },
    item: {
      top: 20,
      width: 300,
      borderRadius: 3,
      margin: 4,
      padding: 10,
      backgroundColor: "#293351",
      },
    itemBody: {
      top: 13,
      width: 300,
      borderRadius: 3,
      margin: 4,
      padding: 10,
      backgroundColor: "#ffff3f",
    },
  });