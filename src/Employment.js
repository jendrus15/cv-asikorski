import React, { Component } from 'react';
import SectionHeader from './SectionHeader.js';

import './css/employment.css';

class EmploymentItem extends Component {
  render() {
    const e = this.props.data;
    
    return (
      <div className='employment-item'>
        <div className='employment-item__company-details'>{e.as}, {e.company}</div>        
        <div className='employment-item__place'>{e.place}</div>        
        <div className='employment-item__time'>{e.time.from} - {e.time.to || 'Present'}</div>        
        <div className='employment-item__description'>{e.description}</div>
      </div>
    )
  }
}

class Employment extends Component {
  render() {
    return (
      <div className='cv-section'>
        <SectionHeader title={'Employment history'} />
        
        {this.props.data.map((item, index) => {
          return <EmploymentItem data={item} key={index} />
        })}
      </div>
    );
  }
}

export default Employment;