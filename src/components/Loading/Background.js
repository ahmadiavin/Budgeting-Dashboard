import React, { Component } from 'react';
import './_background.scss'

class Background extends Component {
  render() {
    return (
      
        <div className='overlay'>
          
            {this.props.children}
          
        </div>
      
    )
  }
}

export default Background