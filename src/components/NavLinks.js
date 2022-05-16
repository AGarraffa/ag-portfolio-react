import React from 'react';

// destructuring of the props
function NavLinks({ currentPage, handlePageChange }) {


    // making an array for the navbar
    let navLinks = ['Home', 'About', 'Projects', 'Contact', 'Resume']

    return (
        <ul className="nav nav-tabs">
            {/* navbar is dynamically rendered based on the navLinks array. This will make adding or removing them easier in the long run */}
            {navLinks.map((item, index)=>
            <li class-name="nav-item" key={index}>
                <a href={'"#' + item + '"'}
                onClick = {() => handlePageChange({item})}
                className={currentPage === {item} ? 'nav-link active' : 'nav-link'}
            >{item}</a>
            </li>)}
        </ul>
    )
}

export default NavLinks;