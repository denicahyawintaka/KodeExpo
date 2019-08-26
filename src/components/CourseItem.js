import React from 'react';
import {View, Text, Image, StyleSheet, TouchableNativeFeedback,Alert} from 'react-native';
import colors from '../../styles/colors';

const CourseItem = props => {
    return(
        <TouchableNativeFeedback
        onPress={()=>{
            Alert.alert(
                'Course Terbuka',
                'Selamat Belajar !!'
              );
              
        }}
        >
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={props.courses.image} style={styles.image} />
                </View>
                
                <View style={styles.subA}>
                    <Text style={{fontSize: 13}}>{props.courses.kategori}</Text>
                    <Text style={{fontSize:13}}>{props.courses.durasi}</Text>
                </View>
            
                <View style={styles.subB}>
                    <Text style={{fontSize:16, fontWeight:'500'}}>
                        {props.courses.judul}
                    </Text>
                </View>
            
                <View style={styles.subC}>
                    <Text style={{fontSize:14}}>{props.courses.mentor}</Text>
                </View>
            </View>  
        </TouchableNativeFeedback>
       
    );
};

const styles = StyleSheet.create({
    card :{
        elevation:2,
        backgroundColor:colors.surface, 
        width:210, 
        height:undefined, 
        borderRadius:10, 
        marginHorizontal:10, 
        marginBottom:30
    },
    imageContainer :{
        height:135, 
        width:undefined, 
        marginBottom:15
    },
    image: {
        height: undefined,
        width: undefined, 
        resizeMode:'cover', 
        flex:1, 
        borderTopLeftRadius:10, 
        borderTopRightRadius:10
    },
    subA :{
        flexDirection:'row', 
        justifyContent:'space-between', 
        paddingHorizontal:15, 
        marginBottom:17
    },
    subB :{
        paddingHorizontal:15,
         marginBottom:33
    },
    subC :{
        paddingHorizontal:15,
        marginBottom:17
    }
    


    
});

export default CourseItem;