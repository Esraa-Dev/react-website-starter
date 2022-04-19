import React from 'react'
import imagePortifolio from '../../images/avataaars.svg'
import './pages.css'
function Portfolio() {
    return (
        <>
        <div className="portfolio">
            <div className="header-content">
            <img src={imagePortifolio} alt="imagePortifolio" />
                <h1>START React</h1>
                <a href="#"><i className="fa fa-star" aria-hidden="true"></i></a>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            </div>
        </>
    )
}

export default Portfolio
