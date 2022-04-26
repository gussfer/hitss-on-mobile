import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text, Button } from 'react-native';
import NavBar from './components/NavBar';
import React from 'react';
import api from './services/api'
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

export default function App() {
  const [courses,setCourses] = React.useState([])
  React.useEffect(() => {
    api.get('/courses').then((response) => {
      console.log(response.data)
      setCourses(response.data)
    })
  }, []);

  const renderItem = ({item}) => (
    <Collapse>
      <CollapseHeader>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>
          {item.Title}
          </Text>
        </View>
      </CollapseHeader>
      <CollapseBody style={styles.itemBody} numberOfLines={2} ellipsizeMode='tail'>
            <Text>{item.Course_Resume}</Text>
          </CollapseBody>
    </Collapse>
  );
  
  return (
    <View style={styles.container}>
      <NavBar/>
      <FlatList
      data={courses}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
      <View style={styles.Button}>
        <Button 
        title={"Login"}
        style={styles.Button}
        color={"#293351"}
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
  itemTitle: {
    color: "yellow",
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
  Button: {
    top: -160,
    backgroundColor: "#ffff3f",
    borderRadius: 3,
  }
});
