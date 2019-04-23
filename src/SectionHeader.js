import React, { Component } from 'react';

class SectionHeader extends Component {
  render() {
    return (
      <div className='cv-section__header'>{this.props.title}</div>
    );
  }
}

export default SectionHeader;