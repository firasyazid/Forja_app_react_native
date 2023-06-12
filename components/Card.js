/* eslint-disable prettier/prettier */

import React from 'react'
import {TouchableOpacity,StyleSheet, Image} from 'react-native';

class Card extends React.PureComponent {

     render() {
        const {navigation,item}= this.props;
    return <TouchableOpacity 
    onPress={() => navigation.navigate('Detail' , {movieId: item.id} )} style ={styles.container}>

    <Image
    resizeMode='cover'
    style= {styles.image}
     source={{uri:'https://image.tmdb.org/t/p/w500' + item.poster_path}} />  

    </TouchableOpacity>;
    }
}
const styles=StyleSheet.create({ 
container : { 
    paddingTop:0,
    padding:5 , 
    position:'relative',
},

image:{ 
    height:150,
    width:100,
    borderRadius:15,
}

 
});

export default Card;