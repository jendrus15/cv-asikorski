import React, { Component } from 'react';
import SectionHeader from './SectionHeader.js';

import './css/skills.css';

class SkillStar extends Component {
  render() {

    let stars = [];
    
    if(typeof this.props.data.rate !== 'number') {
      if(typeof this.props.data.rate === 'string') {
        stars.push(
          <span key={0} className='skills-item__rate skills-item__rate-text'>{this.props.data.rate}</span>
        );
      } else {
        return;
      }
    } else {
      for(var i = 1; i <= 5; i++) {
        let className = 'skills-item__rate';
        
        if(this.props.data.rate >= i) {
          className += ' skills-item__rate-matched';
        }
        
        stars.push(
          <span key={i} className={className}>&#10026;</span>
        );
      }
    }
    
    return (
      <div className='skills-item'>
        {this.props.data.icon && 
            <img className='skills-item__icon' src={this.props.data.icon} alt="Icon"/>            
        }
        {!this.props.data.icon && 
            <div className='skills-item__icon'></div>
        }
        <div>
            <div>{this.props.data.name}</div>
            <div>{stars}</div>
        </div>
      </div>
    )
  }
}

class SkillBar extends Component {
  render() {
    return (
      <div className='skills-item'>
        {this.props.data.icon && 
            <img className='skills-item__icon' src={this.props.data.icon} alt="Icon"/>            
        }
        {!this.props.data.icon && 
            <div className='skills-item__icon'></div>
        }
        <div className='skills-item__container'>
            <div>{this.props.data.name}</div>
            <div className='skills-item__bar'><div className={'skills-item__bar-inner skills-item__bar_' + this.props.data.rate * 20}></div></div>
        </div>
      </div>
    )
  }
}

class Skills extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            all: props.data,
            show: (props.max) ? props.data.slice(0, props.max) : props.data,
            showAll: false
        }
        
        this.toggleState = this.toggleState.bind(this);
    }
    
    toggleState() {
        this.setState({
            showAll: !this.state.showAll
        })
    }

  render() {
      
      const usedData = this.state.showAll ? this.state.all : this.state.show;
      const linkText = this.state.showAll ? 'Show less' : 'Show more';
      
    return (
      <div className={this.props.className}>
        <SectionHeader title={this.props.title} />
        
        <div className='skills__items'>
            {usedData.map((item, index) => {
                if(this.props.type === 'bar') return <SkillBar data={item} key={index} />
                return <SkillStar data={item} key={index} />
            })}
        </div>

        {this.props.max &&
            <span className='skills__toggle-button' onClick={this.toggleState}>{linkText}</span>
        }
      </div>
    );
  }
}

export default Skills;