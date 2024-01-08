import React from 'react'
import './services.css'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer For Software Development</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design | Designops</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <p>Figma Design System Web and/or App</p>
                        </li>
                        <li>
                            <p>UX: Analysis, Interface Architecture, Sketching & Wireframes, Dynamic Prototype and/or Editing</p>
                        </li>
                        <li>
                            <p>UI: Design references, Graphic interface, Animation prototype, UI guidelines and kit and/or Design Review</p>
                        </li>
                        <li>
                            <p>Logos and/or Banners</p>
                        </li>
                        <li>
                            Design Consulting/Testing
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX LIST */}

                <article className="service">
                    <div className="service__head">
                        <h3>Software Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <p>Websites</p>
                        </li>
                        <li>
                            <p>Apps</p>
                        </li>
                        <li>
                            <p>Web Softwares</p>
                        </li>
                        <li>
                            <p>Data Analytics</p>
                        </li>
                        <li>
                            <p>SEO</p>
                        </li>
                        <li>
                            <p>Web Project Migration/Deployment Services</p>
                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT CREATION */}

            </div>
        </section>
    )
}

export default Services