import html from './images/html_5.png';
import sass from './images/sass.png';
import js from './images/js.png';
import es6 from './images/es6.png';
import react from './images/react.png';
import redux from './images/redux.png';
import node from './images/node.png';
import jquery from './images/jquery.png';
import webpack from './images/webpack.png';
import git from './images/git.png';
import grunt from './images/grunt.png';
import ko from './images/knockout.png';

import english from './images/eng.png';
import polish from './images/pl.png';

export const info = {
  name: 'Andrzej Sikorski',
  position: 'Web Developer',
  pic: 'https://pl.gravatar.com/userimage/35724175/4b345c0221c9a3181edbc9d4b6058761?size=200',
  email: 'andrzej.zbigniew.sikorski@gmail.com',
  phone: '+48 501 752 021',
  links: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/andrzej-sikorski' }
  ],
  hobby: ['Guitar, Piano and Drums']
};

export const employment = [
  {
    company: 'Casamundo GmbH',
    place: 'Szczecin, West Pomeranian District, Poland',
    as: 'Web Developer',
    time: {
      from: 'Jun 2013',
      to: ''
    },
    description: 'Remote job, maintenance, repair and modernisation of frontend part of Casamundo platform, which allows you to browse, compare and book holiday rental properties.'
  },
  {
    company: 'Marpo Systemy Informacyjne',
    place: 'Szczecin, West Pomeranian District, Poland',
    as: 'Web Developer',
    time: {
      from: 'Aug 2010',
      to: 'May 2013'
    },
    description: 'Creating web tool for browsing and analyzing public contracts in Poland and UE, including history and competition data for contractors and private companies.'
  }
];

export const education = [
  {
    school: 'West Pomeranian University of Technology in Szczecin',
    time: {
      from: 'Sep 2011',
      to: 'Jun 2013'
    },
    degree: 'Master of Computer Science',
    place: 'Szczecin'
  },
  {
    school: 'University of Szczecin',
    time: {
      from: 'Sep 2007',
      to: 'Jun 2011'
    },
    degree: 'Bachelor of Computer Science',
    place: 'Szczecin'
  }
];

export const courses = [
  {
    name: 'Scrum Master',
    time: 'June 2012'
  }
];

export const skills = [
  { name: 'HTML & CSS', rate: 5, icon: html },
  { name: 'SASS', rate: 4, icon: sass },
  { name: 'JavaScript', rate: 4, icon: js },
  { name: 'jQuery', rate: 4, icon: jquery },
  { name: 'ES6', rate: 3, icon: es6 },
  { name: 'React', rate: 2, icon: react },
  { name: 'Redux', rate: 2, icon: redux },
  { name: 'Webpack', rate: 2, icon: webpack },
  { name: 'Node.js', rate: 2, icon: node },
  { name: 'Git', rate: 4, icon: git },
  { name: 'Grunt', rate: 4, icon: grunt },
  { name: 'Knockout.js', rate: 4, icon: ko }
];

export const languages = [
  { name: 'English', rate: 4, icon: english },
  { name: 'Polish', rate: '(native speaker)', icon: polish }
];