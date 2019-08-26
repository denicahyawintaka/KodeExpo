import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import BottomTab from './src/navigator/BottomTabNavigator'

export default function App() {
 
  const [modalVisible, setModalVisible] = useState(false)
  const [isLoggedIn, setLogin] = useState(false)


    return (
      
      <View style={{flex:1, paddingTop:StatusBar.currentHeight}}>
        <BottomTab
          screenProps={{
            modalVisible:modalVisible,
            isLoggedIn:isLoggedIn,
            LoginHandler:setLogin,
            ModalVisibleHandler:setModalVisible,
          }}
        />
      </View>
       
      );   
}