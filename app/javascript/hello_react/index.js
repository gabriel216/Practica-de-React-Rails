import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Image from './images/image.jpg';
import './stylesheets/style';

const Hello = props => (
	<div className='col-md-4 col-md-offset-4'>
  	<div className='text-center '>Hello {props.name}!
      <img src={Image} width='20px'/>
  	</div>
  </div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="Erick"/>,
    document.body.appendChild(document.createElement('div'))
  )
})