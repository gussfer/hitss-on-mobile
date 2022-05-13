import { StyleSheet, View, Text, Button } from 'react-native';
import NavBar from '../components/NavBar';
import React from 'react';
import api from '../services/api'
import {Video, AVPLaybackStatus} from "expo-av"


export default function LessonPage({navigation, route}) {
  
  const [ showMore, setShowMore ] = React.useState(false);
  const [lesson,setLesson] = React.useState([])
  const [videoP,setVideo] = React.useState([])
  const [course,setCourse] = React.useState({})
  const [status, setStatus] = React.useState({});
  const {id_course, lessonNumber} = route.params;
  const video = React.useRef(null);

  React.useEffect(() => {
    api.get(`course/${id_course}`).then((resp) => {
      setCourse(resp.data[0])
    api.get(`/courses/video/${id_course}/${lessonNumber}`).then((response) => {
        console.log(response.data)
      setLesson(response.data)
    })
  })
  }, []);
 
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation}/>
      <Text style={styles.text}>{course.Title}</Text>
      <View style={styles.container2}>
              <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: lesson.video_path
                }}
                useNativeControls
                resizeMode='contain'
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}/>
        </View>
      <Text style={styles.text}>{lesson.title}</Text>
      <View style={{width: '90%', marginLeft: 15}}>
        <Text style={styles.description}>
                {showMore ? lesson.lesson_resume : `Descrição`}
                    <Text onPress={()=> setShowMore(!showMore)}>
                      {showMore ? " ...ver menos" : "...ver mais"}
                    </Text>
              </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* <View style={styles.button}> */}
                <Button color={"red"} onPress={() => navigation.push('LessonPage', {id_course: id_course, lessonNumber: lessonNumber - 1})} title={"Aula anterior"}/>
                <Button color={"red"} onPress={() => navigation.push('LessonPage', {id_course: id_course, lessonNumber: lessonNumber + 1})} title={"Próxima aula"}/>
            {/* </View> */}
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
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "whitesmoke"
  },
  video: {
      alignSelf: 'center',
      width: 320,
      height: 300,
  },
  button: {
    marginLeft: 15,
    backgroundColor: "#ffdf32",
    width: 100,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginBottom: 20,
  },
});
