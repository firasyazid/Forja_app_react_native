/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Text,ScrollView,Image,StyleSheet,Dimensions, View,Modal, Pressable} from 'react-native';
import {getMovie}  from '../services/services';
import { ActivityIndicator } from '@react-native-material/core';
import StarRating from 'react-native-star-rating';
import PlayButton from './PlayButton';
import VideoPlayer from 'react-native-video-controls';
import Navbars from '../components/Navbars';
import { useNavigation } from '@react-navigation/native';

const height= Dimensions.get('screen').height;
const Detail = ({ route, navigation }) => {
const movieId = route.params.movieId;



   const [moviedetail, setMovieDetail] = useState();
   const [loaded, SetLoaded] =useState(false);
   const [modalVisible, setModalVisible] = useState(false);


   useEffect(() => {  
    getMovie(movieId).then(movieData => { 

      setMovieDetail(movieData);
      SetLoaded(true)
    });

    }, [movieId]);

    
  
const videoShown = ()=>{ 
  setModalVisible(!modalVisible)
 }

  return (
    <React.Fragment>
{loaded && (
<View>
<ScrollView > 

  <Image
    resizeMode="cover"
    style= {styles.image}
     source={{uri:'https://image.tmdb.org/t/p/w500' + moviedetail.poster_path}} />
 

     <View style={styles.container}>
      <View style= {styles.button}>

<PlayButton handlePress={videoShown} 



/>    

      </View>

      <Text style={styles.movieTitle}> {moviedetail.title }</Text>
      <View style= {styles.genre}
 >

        {moviedetail.genres.map(genre => { 
          return <Text style= {styles.textgenre} key={genre.id} >{genre.name}</Text>
        })}      
         </View>      
         <StarRating          
         maxStars={5}
         disabled={true}
         starSize={30}
        rating={moviedetail.vote_average /2}
        fullStarColor={'gold'}
 />

<Text style= {styles.overview} > {moviedetail.overview} </Text>
<Text style= {styles.release}> {'Release Date:' + moviedetail.release_date} </Text>


      </View>
    </ScrollView>
    <Modal  animationType="slide" 
     visible={modalVisible}
     
    >
    <View style={styles.video}>
    <VideoPlayer
      onBack={()=> { 
        videoShown()
          }}
          navigator={navigation}

  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}

 />
  
</View>
    </Modal>
    </View>
    )}
    {!loaded && <ActivityIndicator size ="large" color="#0000ff" />}

      </React.Fragment>
   );
};




const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

  image:{ 
      height:height/2,
    },

   movieTitle :{  
    fontSize:25,
    fontWeight: 'bold', 
    marginTop:10,
    marginBottom:10,
    color:'black'
},

genre : { 
flexDirection:'row', 
alignContent:'center',
marginTop:10,
marginBottom:20,

 },

 textgenre :{

  fontWeight:'bold',
  marginRight:10,
  marginLeft:10,
  color:'black'
 },
  
overview: {

padding:15,
fontWeight:'bold', 

 }, 

release:{ 

  fontWeight:'bold', 
  color:'black'

},
button :{ 

  position:'absolute',  
  top: -30, 
  right: 20,
},
video :{ 

flex:1 , 
justifyContent:'center', 
alignItems:'center'

}

  });


export default Detail;
