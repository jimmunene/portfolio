import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { FaHotdog } from 'react-icons/fa'
import {FaSlack } from 'react-icons/fa'
import {FaTiktok } from 'react-icons/fa'



const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/jim-munene-b1b557170/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/jimmunene" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://ziqweb.slack.com/archives/D05K8T5ESSK" target="_blank" rel="noreferrer"><FaSlack /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaTiktok /></a>
            <a href="https://www.threads.net/@jimbrian" target="_blank" rel="noreferrer"><FaHotdog /></a>
           
           
        </div>
    )
}

export default HeaderSocials