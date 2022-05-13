import api from '../services/api'
import {Video, AVPLaybackStatus} from "expo-av"
import { StyleSheet, View, Text, Button } from 'react-native';
import React from 'react';



export default function PlayerVideo({navigation, route}) {
    const path = "https://bucket-videos-teste1.s3.amazonaws.com/1652447452890-Aula+25+-+Axios.mp4"
    const [course, setCourse] = React.useState([])
    const [lesson,setLesson] = React.useState([])
    const {id_course, lessonNumber} = route.params;
    const [status, setStatus] = React.useState({});
    const video = React.useRef(null);
    React.useEffect(() => {
      api.get(`course/${id_course}`).then((resp) => {
        setCourse(resp.data[0])
      api.get(`/course/${id_course}/${lessonNumber}`).then((response) => {
        setLesson(response.data)
      })
    })
      }, []);

      return (
          <View style={styles.container}>
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
                <View style={styles.buttons}>
                    <Button
                        title={status.isPlaying ? 'Pause' : 'Play'}
                        onPress={() => 
                            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        } />
                </View>
            </View>
          </View>
      )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
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
          height: 200,
      },
      buttons: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
      },
})