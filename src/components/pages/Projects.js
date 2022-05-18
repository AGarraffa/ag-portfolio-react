import React from 'react';
import lunar from '../../assets/images/lunar.jpg'
import lightning from '../../assets/images/lightning.jpg'
import mist from '../../assets/images/mist.jpg'
import accretion from '../../assets/images/homepage-video.mp4'
import alpine from '../../assets/images/alpine.jpg'

export default function Projects() {
    return (
        <section id="work" className="work">
        <div className="work-header">Projects</div>
        <div className="portfolio">
            
            <a href="https://github.com/AGarraffa/accretion" className="card card1">
                <div className="card-title">Accretion</div>
                <video playsinline autoplay muted loop poster=""  className="card1-img"
                source src={accretion} type="video/mp4">
                </video>
            </a>

            <a href="https://agarraffa.github.io/lunar-activities/" className="card card2">
                <div className="card-title">Lunar Activities</div>
                <img className="card2-img" src={lunar} alt="earth from space"></img>
            </a>
            
            <a href="https://agarraffa.github.io/weather-app/" className="card card3">
                <div className="card-title">Weather App</div>
                <img className="card3-img" src={lightning} alt="mountain peak at dusk"></img>
            </a>
            
            <a href="https://agarraffa.github.io/AG-planner/" className="card card4">
                <div className="card-title">Daily Planner App</div>
                <img className="card4-img" src={mist} alt="mountain landscape at dawn"></img>
            </a>
            
            <a href="page/project5" className="card card5">
                <div className="card-title">Project 5</div>
                <img className="card5-img" src={alpine} alt="an alpine valley"></img>
            </a>

        </div>
    </section>
    )
}