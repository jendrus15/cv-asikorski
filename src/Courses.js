import React, { Component } from 'react';
import SectionHeader from './SectionHeader.js';

class Course extends Component {
  render() {
    return (
      <div>{this.props.data.name}, {this.props.data.time}</div>
    )
  }
}

class Courses extends Component {
  render() {
    return (
      <div>
        <SectionHeader title={'Courses'} />
        
        {this.props.data.map((item, index) => {
          return <Course data={item} key={index} />
        })}
      </div>
    );
  }
}

export default Courses;