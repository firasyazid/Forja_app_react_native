/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions,FlatList,ScrollView,ActivityIndicator } from 'react-native';
import { getUpcomingMovies,getPopulargMovies,getPopularTv,getFamilyMovies,getActionMovie,getDocumentary } from '../services/services';
import { SliderBox } from 'react-native-image-slider-box';
import List from '../components/List';


const dimensions = Dimensions.get('screen');
const Homepage = ({navigation}) => {

  const [movieImages, setMovieImages] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [popularTv, setpopularTv] = useState([]);
  const [familyTv, setFamily] = useState([]);
  const [ActionMovie, setAction] = useState([]);
  const [docMovie, setDoc] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopulargMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getActionMovie(),
      getDocumentary(),
    ]);
  };


  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          documentaryMoviesData,
          actionMovieData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });

          setMovieImages(moviesImagesArray);
          setpopularMovies(popularMoviesData);
          setpopularTv(popularTvData);
          setFamily(familyMoviesData);
          setDoc(documentaryMoviesData);
          setAction(actionMovieData);
        },
      )

      .finally(() => {
        setLoaded(true);
      });
  }, []);



  return (
    <React.Fragment>
{loaded && ( <ScrollView  style={styles.container} onLayout={this.onLayout} >

<View
  style={styles.sliderContainer}>
  <SliderBox
 images={movieImages.slice(0, 5)}
  dotColor="red"
  dotStyle={{ height:15, width:15 , borderRadius:50}}
  sliderBoxHeight={dimensions.height / 2.3}
  autoplay={true}
  circleLoop={true}
  autoplayInterval={3000}
  imageLoadingColor="gray"
  resizeMode="stretch"
  inactiveDotColor="gray"
  inactiveDotOpacity={0.6}
  ImageComponentStyle={styles.sliderImageStyle}
   />
</View>


<View style={styles.carousel}>
<List navigation={navigation} title="Popular Movies" content={popularMovies}  />
</View>

<View style={styles.carousel}>
<List navigation={navigation} title ="Action Movies"
content={ActionMovie}/>
</View>


<View style={styles.carousel}>
<List navigation={navigation}  title ="Documentaries Movies"
content={docMovie}/>
</View>


<View style={styles.carousel}>
<List navigation={navigation}  title ="Popular TV Shows"
content={popularTv}/>
</View>

<View style={styles.carousel}>
<List navigation={navigation} title ="Family TV Shows"
content={familyTv}/>
</View>


</ScrollView> )}
   
{!loaded && <ActivityIndicator size="large" color="#0000ff"/>}
  
 </React.Fragment>);
};







const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:'#050606'       
 
    },

sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

 },

 sliderStyle : {
  height:0,

  },

 carousel: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop:12,

},
sliderImageStyle: {
  borderRadius: 10,
  borderWidth: 2,
 },

  

 });

export default Homepage;

