/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaIndustry } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                  <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ years Experience in Designops & Software Development projects</small>
                        </article>

                        <article className='about__card'>
                            <FaIndustry className='about__icon' />
                            <h5>Companies</h5>
                            <small>Ziqweb Limited | Embuhutsfarm | Construi Africa | Ui/Ux Diary</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Services</h5>
                            <small>UI/UX Design |Software Development | Data Analytics | Design</small>
                        </article>
                    </div>

                    <p>
                        Transforming Digital Landscapes: Unleashing Innovation and Powering Success with Full-Stack Web Development! 
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About

