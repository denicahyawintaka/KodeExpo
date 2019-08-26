import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import CatalogScreen from '../screens/CatalogScreen';
import MyCourseScreen from '../screens/MyCourseScreen';
import ProfilScreen from '../screens/ProfilScreen';


const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Catalog') {
      iconName = `md-book`;
    } else if (routeName === 'MyCourse') {
      iconName = `md-play-circle`;
    } else if (routeName === 'Profil') {
        iconName = `md-person`;
      }
      
    return <IconComponent name={iconName} size={25} color={tintColor} />;
  };

  export default createAppContainer(
    createBottomTabNavigator(
      {
        Catalog: { screen: CatalogScreen },
        MyCourse: { screen: MyCourseScreen },
        Profil: { screen: ProfilScreen },
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle:{
              fontSize:12,
              fontWeight:'bold'
          },
          style:{
              paddingVertical:5
          }
        },
      }
    )
  );

