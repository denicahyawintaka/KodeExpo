import React,{Component} from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

import CourseContainer from '../components/CourseContainer';
import SearchBar from '../components/SearchBar';

import programmingList from '../data/programming';
import personalDevelopmentList from '../data/personalDevelopment';
import BusinessList from '../data/business'

export default class CatalogScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.course}>
                    <SearchBar title="Mau Belajar Apa hari ini?"/> 
                    <CourseContainer courses={programmingList}/>
                </View>

                <View style={styles.course}> 
                    <CourseContainer courses={personalDevelopmentList}/>
                </View>

                <View style={styles.course}> 
                    <CourseContainer courses={BusinessList}/>
                </View>
               
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    course:{
        backgroundColor: colors.surface,
        height:undefined,
        marginBottom:10,
        paddingTop:20
    }
});