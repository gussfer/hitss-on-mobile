import { StyleSheet, View, Text, Button } from 'react-native';
import NavBar from '../components/NavBar';
import React from 'react';
import api from '../services/api'
import LessonsList from '../components/LessonsList';

export default function Lessons({navigation, route}) {
  
 const [ showMore, setShowMore ] = React.useState(false);
  const [lessons,setLessons] = React.useState([])
  const [course,setCourse] = React.useState([])
  const {id_course} = route.params;
  React.useEffect(() => {
    api.get(`course/${id_course}`).then((response) => {
      setCourse(response.data[0])
    api.get(`courses/list/${id_course}`).then((response) => {
      setLessons(response.data)
    })
  })
  }, []);
  // onPress={() => navigation.navigate('LessonPage', {id_course: id_course})}
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation}/>
      <Text style={styles.text}>{course.Title}</Text>
      <View style={{width: '90%', marginLeft: 15}}>
        <Text style={styles.description}>
                {showMore ? course.Course_Resume : `Descrição`}
                    <Text onPress={()=> setShowMore(!showMore)}>
                      {showMore ? " ...ver menos" : "...ver mais"}
                    </Text>
              </Text>
        </View>
      <View style={styles.button}>
        <Button color={"#293351"} onPress={() => navigation.navigate('NewLessons', {id_course: id_course})} title={"+ Adicionar aula"}/>
      </View>
      <LessonsList listItems={lessons} field={"title"} navigation={navigation}/>
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
    marginLeft: 15,
    backgroundColor: "#ffdf32",
    width: 300,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    marginBottom: 20,
  },
});
