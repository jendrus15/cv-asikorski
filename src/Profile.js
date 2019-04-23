import React, { Component } from 'react';
import SectionHeader from './SectionHeader.js';

class Profile extends Component {
  render() {
    return (
      <div className='cv-section'>
        <SectionHeader title={'Profile'} />
        <p>Programmer by nature, Frontend by choice. I have been an experienced programmer for 7 years. I started my 
        professional career during my studies, creating a commercial product written in PHP. Over the years I have used 
        various technologies, including PHP, SQL, JavaScript and Drupal 6. In recent years I have focused mainly on 
        JavaScript and Single Page Aplications. Thanks to my extensive experience and knowledge of technologies, I am 
        able to adapt to various challenges.</p>
      </div>
    );
  }
}

export default Profile;