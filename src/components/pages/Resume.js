import React from 'react';
import resume from '../../assets/resume/agarraffa-resume.pdf'

export default function Resume() {
    return (
        <div className='resume'>
            <div className='education'>
                <h1 className='resume-section'>Education</h1>
                <ul>
                    <li>
                        <p className='school'>University of Denver Full Stack Coding Bootcamp</p>
                        <p className='degree'>Certificate</p>
                    </li>
                    <br></br>
                    <li>
                        <p className='school'>South Dakota School of Mines and Technology</p>
                        <p className='degree'>Master's of Science in Geology and Geological Engineering</p>
                        <p className='degree'>Thesis: Exhumation of Medium-Pressure Metamorphic Sole within a High-Pressure Region: The Izmir-Ankara Suture Zone, Orhaneli Area, Turkey</p>
                    </li>
                    <br></br>
                    <li>
                        <p className='school'>University of Massachusetts - Amherst</p>
                        <p className='degree'>Bachelor's of Science in Geology</p>
                    </li>
                </ul>
            </div>

            <div className='prof-exp'>
                <h1 className='resume-section'>Professional Experience</h1>
                <ul>
                    <li>
                        <p className='company'>TD Geosteering</p>
                        <p className='date'>2021</p>
                        <p className='experience'>Onsite Geosteering</p>
                        <p className='explanation'>Provided onsite geosteering for three geologically complex wells within the Marcellus Shale
    using realtime GR data as well as existing seismic.</p>              
                    </li>
                    <br></br>
                    <li>
                        <p className='company'>Bruin E and P Operating LLC</p>
                        <p className='date'>2017-2020</p>
                        <p className='experience'>Operations Geology Manager</p>
                        <p className='explanation'>Managed and operated all wells drilled while at Bruin; responsible for well planning, mapping,
    geosteering, and post well analysis as well as involvement in core analysis and research.</p>  
                    </li>
                    <br></br>
                    <li>
                        <p className='company'>Halcon Resources</p>
                        <p className='date'>2017-2020</p>
                        <p className='experience'>Operations Geologist</p>
                        <p className='explanation'>Responsible for geosteering wells in the Bakken and Three Forks formations. Additionally,
    analyzing core samples and log interpretation as well as basin development.</p>  
                    </li>
                </ul>
            </div>
            <h1 className='resume-section'>Additional Proficiencies</h1>
            
            <div className='geology'>
                <p className='proficiency'>Geology</p>
                <ul className='prof-list'>
                    <li>Williston Basin</li>
                    <li>Geosteering</li>
                    <li>Geophysical Interpretation</li>
                    <li>Subsurface Geologic Mapping</li>
                    <li>Core Analysis</li>
                    <li>GIS software: Petra, GeoGraphix, ArcGIS</li>
                </ul>
            </div>
            <br></br>
            
            <div className='front-end'>
                <p className='proficiency'>Front End</p>
                <ul className='prof-list'>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>JSX</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>Python (currently learning)</li>
                </ul>
            </div>
            <br></br>
            
            <div className='back-end'>
                <p className='proficiency'>Back End</p>
                <ul className='prof-list'>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL/Sequelize</li>
                    <li>MongoDB/Mongoose</li>
                    <li>REST</li>
                </ul>
            </div>
            <button className='download-res'><a href={resume} className='res-link'>Download Resume</a></button>
        </div>
    )
}