/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
 


 class Navbars extends React.PureComponent {
   render() {
    const {navigation} = this.props;

    
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>

            <Icon name="search-circle" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
} 
  
export default Navbars;
