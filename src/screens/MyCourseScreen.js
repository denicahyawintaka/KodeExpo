import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import colors from '../../styles/colors'

import LoginShow from '../components/LoginShow';
import LoginModal from '../components/LoginModal';


export default class MyCourseScreen extends React.Component {
    render() {

        if(this.props.screenProps.isLoggedIn){
            return (
                <View style={styles.container}>
                    <Text style={styles.font}>
                        Course Anda !!!
                    </Text>
                
                </View>
            )
        }else{
            return (
                <View style={styles.container}>
                    
                    <LoginShow 
                        onPress={() => {
                            this.props.screenProps.ModalVisibleHandler(!this.props.screenProps.modalVisible)
                        }} />
                    <LoginModal 
                    onPress={() => {
                        this.props.screenProps.ModalVisibleHandler(!this.props.screenProps.modalVisible)
                        this.props.screenProps.LoginHandler(!this.props.screenProps.isLoggedIn)
                    }}
                    modalVisible={this.props.screenProps.modalVisible}/>
                </View>
            )}
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems:'center',
      paddingHorizontal:20
    },
    font: {
        fontSize:16, 
        fontWeight:'bold'
    },
});