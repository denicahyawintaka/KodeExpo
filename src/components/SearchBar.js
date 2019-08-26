import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = props => {
    return(
    <View style={styles.container}>
        <View style={styles.search}>
            <Ionicons name="md-search" size={20} color="gray" />
            <TextInput 
            style={{width:'85%'}}
            placeholder={props.title}/>
        </View>

        <View>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Course</Text>
            <Text>Pelajari materi sesuai minatmu</Text>
        </View>
    </View>    

    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20, 
        marginBottom:40
    },
    search:{
        flexDirection:'row',
        elevation:1, 
        width:'100%',
        height:undefined, 
        marginBottom:35, 
        borderRadius:10, 
        padding:10, 
        justifyContent:'space-around', 
        alignItems:'center' 
    }
});

export default SearchBar;