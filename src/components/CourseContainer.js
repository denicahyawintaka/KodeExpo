import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CourseItem from '../components/CourseItem'

export default class CourseContainer extends Component{
    constructor(props){
        super(props);
    }
    
    get Courses() {
        const  { courses } = this.props;
     
        return courses.map((courses) => {
            return(
                <CourseItem 
                key={courses.id}
                courses={courses}
                />
            );
        });
    }

    render(){
        return(
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:10}} >
                {this.Courses}
            </ScrollView>
         );
    }
};

