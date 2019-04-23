import React, { Component } from 'react';
import SectionHeader from './SectionHeader.js';

import './css/education.css';

class School extends Component {
  render() {
    const s = this.props.data;

    return (      
      <div className='education-item'>
        <div className='education-item__school-details'>{s.school}, {s.degree}</div> 
        <div className='education-item__details'>{s.time.from} - {s.time.to}, {s.place}</div> 
      </div>
    )
  }
}

class Education extends Component {
  render() {
    return (
      <div>
        <SectionHeader title={'Education'} />
        
        {this.props.data.map((item, index) => {
          return <School data={item} key={index} />
        })}
      </div>
    );
  }
}

export default Education;