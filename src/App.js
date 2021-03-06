import React, { Component } from 'react';
import SectionHeader from './SectionHeader.js';

import './css/App.css';
import './css/info.css';
import {info, employment, education, courses, skills, languages} from './data.js';

import Employment from './Employment.js';
import Education from './Education.js';
import Courses from './Courses.js';
import Skills from './Skills.js';
import Profile from './Profile.js';


class App extends Component {
  render() {
    return (
      <div className="Cv">
        <header className="cv-header">
          <img src={info.pic} className="cv-header__logo" alt="Profile" />
          <div>
            <h1 className="cv-header__text cv-header__name">{info.name}</h1>
            <h3 className="cv-header__text cv-header__position">{info.position}</h3>
          </div>
        </header>
        <main>
          <div className="cv-main__left">

            <div className="cv-section">
              <SectionHeader title={'Info'} />
              <div className="info-details">
                <div className="info-details__detail">
                    <div className="info-details__name">Phone</div>
                    <a className="info-details__link" target="_blank" rel="noopener noreferrer" href={`callto:${info.phone}`}>{info.phone}</a>
                </div>
                
                <div className="info-details__detail">
                    <div className="info-details__name">Email</div>
                    <a className="info-details__link" target="_blank" rel="noopener noreferrer" href={`mailto:${info.email}`}>{info.email}</a>
                </div>
              </div>
            </div>
            
            <div className="cv-section">
              <SectionHeader title={'Links'} />
              <div className="info-links">
                {info.links.map((link, i) => {
                  return <a target="_blank" rel="noopener noreferrer" key={i} href={link.href}>{link.name}</a>
                })}
              </div>
            </div>
            
            <Skills data={skills} title={'Skills'} max={10} type="star" className={"cv-section skills__items__left"}/>
            
            <Skills className={"cv-section"} data={languages} title={'Languages'} type="bar" />

          </div>

          <div className="cv-main__right">
            <Profile className="cv-section" />
            <Employment className="cv-section" data={employment} />
            <Education className="cv-section" data={education} />
            
            <Skills className="cv-section skills__items__main" 
                data={skills} 
                title={'Skills'} 
                max={10}
                type={'bar'}
            />
            
            <Courses className="cv-section" data={courses} />
            
            <div className="cv-section">
              <SectionHeader title={'Hobbies'} />
              <div className="info-hobbies">
                {info.hobby.map((hobby, i) => {
                  return <div key={i}>{hobby}</div>
                })}
              </div>
            </div>

          </div>
        </main>
      </div>
    );
  }
}

export default App;
