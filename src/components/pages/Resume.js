import React from 'react';

export default function Resume() {
    return (
        <div>
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

            <h1 className='resume-section'>Professional Experience</h1>
            <ul>
                <li>
                    <p className='date'>2021</p>
                    <p className='company'>TD Geosteering</p>
                    <p className='experience'>Onsite Geosteering</p>
                    <p className='explanation'>Provided onsite geosteering for three geologically complex wells within the Marcellus Shale
using realtime GR data as well as existing seismic.</p>              
                </li>
                <br></br>
                <li>
                    <p className='date'>2017-2020</p>
                    <p className='company'>Bruin E and P Operating LLC</p>
                    <p className='experience'>Operations Geology Manager</p>
                    <p className='explanation'>Managed and operated all wells drilled while at Bruin; responsible for well planning, mapping,
geosteering, and post well analysis as well as involvement in core analysis and research.</p>  
                </li>
                <br></br>
                <li>
                    <p className='date'>2013-2017</p>
                    <p className='company'>Halcon Resources</p>
                    <p className='experience'>Operations Geologist</p>
                    <p className='explanation'>Responsible for geosteering wells in the Bakken and Three Forks formations. Additionally,
analyzing core samples and log interpretation as well as basin development.</p>  
                </li>
            </ul>

            <h1 className='resume-section'>Additional Proficiencies</h1>
            <p className='proficiency'>Geology</p>
            <ul>
                <li>Williston Basin</li>
                <li>Geosteering</li>
                <li>Geophysical Interpretation</li>
                <li>Subsurface Geologic Mapping</li>
                <li>Core Analysis</li>
                <li>GIS software: Petra, GeoGraphix, ArcGIS</li>
            </ul>
            <br></br>
            <p className='proficiency'>Front End</p>
            <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Python (currently learning)</li>
            </ul>
            <br></br>
            <p className='proficiency'>Back End</p>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL/Sequelize</li>
                <li>MongoDB/Mongoos</li>
                <li>REST</li>
            </ul>

            <p>Insert link to a pdf resume</p>
        </div>
    )
}