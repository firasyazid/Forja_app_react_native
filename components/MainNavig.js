/* eslint-disable prettier/prettier */
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from '../screens/Homepage';
import Detail from '../screens/Detail';
import Navbars from '../components/Navbars';
import Search from '../screens/Search';




const Stack = createNativeStackNavigator();

class MainNavig extends React.PureComponent {

    render() {
        return (
      <Stack.Navigator headerMode={'screen'}>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerRight: () => <Navbars/>,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerTransparent: true}}
        />

<Stack.Screen
            name="Search"
            component={Search}
            options={{ headerTransparent: true }}
          />

 

   
</Stack.Navigator>
    );
  }
}

export default MainNavig;