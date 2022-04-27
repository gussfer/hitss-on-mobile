import { StyleSheet, FlatList, View, Text, Button } from 'react-native';
import NavBar from './components/NavBar';
import React from 'react';
import api from './services/api'
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

export default function App() {
  const [courses,setCourses] = React.useState([])
  React.useEffect(() => {
    api.get('/courses').then((response) => {
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
          <CollapseBody style={styles.itemBody}>
            <Text>
              {showMore ? item.Course_Resume : `${item.Course_Resume.substring(0,55)}`}
              <Text onPress={()=> setShowMore(!showMore)}>
                {showMore ? <i><b> ...ver menos</b></i>:<i><b> ...ver mais</b></i>}
              </Text>
              
            </Text>
           
      </CollapseBody>
    </Collapse>
  );
  
  const [ showMore, setShowMore ] = React.useState(false);
  

  return (
    <View style={styles.container}>
      <NavBar/>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
