import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../styles/colors'
import CircleButton from '../components/CircleButton'

const LoginShow = props => {
    return(
        <View style={styles.card}>
        <View style={{alignItems:'center', marginBottom:20}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>
                Silahkan login untuk melihat halaman ini
            </Text>
        </View>

        <CircleButton
            title="Login"
            bcolor='tomato'
            tcolor={colors.onPrimary}
            onPress={props.onPress}
        />
    </View>

    );
};

const styles = StyleSheet.create({
    card:{
        width:'100%', 
        paddingVertical:20,
        backgroundColor:colors.surface, 
        borderRadius:15
    },
});

export default LoginShow;