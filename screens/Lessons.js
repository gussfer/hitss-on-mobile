import { StyleSheet, View, Text, Button } from 'react-native';
import NavBar from '../components/NavBar';
import React from 'react';
import api from '../services/api'
import LessonsList from '../components/LessonsList';
import {MainContext} from "../contexts/MainContext"


export default function Lessons({navigation, route}) {

const [lessons,setLessons] = React.useState([])
const [course,setCourse] = React.useState({})
const [lastSeen,setLast] = React.useState(0)
const {id_course} = route.params;
const {userInfo, setUserInfo} = React.useContext(MainContext)

const [ showMore, setShowMore ] = React.useState(false);

const checkProgress = async (course_id, user_id) => {
  try {
    return await api.get(`courses/progress/${course_id}/${user_id}`)
  } catch (error) {
    console.log('Erro no progresso', error)
    return error
  }
}

const getInfo = async (id, user_id) => {
  const course = await api.get(`course/${id}`)
  const lessons = await api.get(`courses/list/${id}`)
  const progress = await checkProgress(id,  user_id)
  setCourse(course.data[0])
  setLessons(lessons.data)
  setLast(progress.data.lastSeen)
}

React.useEffect(() => {
  getInfo(id_course, userInfo.user.id_users)
}, [id_course, userInfo.user.id_users]);
  
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
        <Button 
          color={"#293351"} 
          onPress={() => navigation.navigate('NewLessons', {id_course: id_course})} 
          title={"+ Adicionar aula"}
        />
      </View>
        <LessonsList 
          listItems={lessons} 
          field={"title"} 
          navigation={navigation}
          lastSeen={lastSeen}/>
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
