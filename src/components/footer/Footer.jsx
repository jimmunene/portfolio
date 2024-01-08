/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'

import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { FaSlack } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Jim Brian Munene</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="" target="_blank" rel="noreferrer"><FiInstagram /></a>
                <a href="https://www.linkedin.com/in/jim-munene-b1b557170/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/jimmunene" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://ziqweb.slack.com/archives/D05K8T5ESSK" target="_blank" rel="noreferrer"><FaSlack /></a>
                <a href="https://www.figma.com/@jimmunene" target="_blank" rel="noreferrer"><FiFigma /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; 2023 Jim Brian Munene. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer