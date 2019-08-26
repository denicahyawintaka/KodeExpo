import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import colors from '../../styles/colors'

const CircleButton = props => {
    return(
        <TouchableOpacity
        onPress={props.onPress}
        style={{paddingHorizontal:20, backgroundColor:props.bcolor, elevation:1, marginHorizontal:20, alignItems:'center',padding:15, borderRadius:30, marginBottom:10}}> 
            <Text style={{fontSize:14, fontWeight:'500', color:props.tcolor}}>{props.title}</Text>
        </TouchableOpacity>

    );
};

export default CircleButton;