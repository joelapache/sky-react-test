import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  icon  from '../public/image/logo-blue.jpeg';

export class Footer extends Component {
  render() {
    return (
        <footer className='footer-layout flex-container --row --justify-between --align-center'>
            <div className='links flex-col-50  flex-container --row --justify-start --align-start'>
                <Link to='#'>Privacy</Link>
                <Link to='#'>Terms of using</Link>
                <Link to='#'>Privacy policy</Link>
                <Link to='#'>Contact</Link>
            </div>
            <div className='icon  flex-col-50'>
                <img src={icon} alt="icon" className='carrier-image' />
            </div>
            <div className='copyright  flex-col-50  flex-container --row --justify-end --align-end'>
                <span>&copy; 2022 - Vollis Consulting</span>
            </div>
        </footer>
    )
  }
}

export default Footer