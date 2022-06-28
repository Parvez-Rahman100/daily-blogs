import React from 'react';
import './topBar.css';
import facebook from '../../assests/icons8-facebook.svg';
import instagram from '../../assests/icons8-instagram.svg';
import github from '../../assests/icons8-github.svg';
import parvez from '../../assests/parvez.jpg';
import search from '../../assests/icons8-search.svg'

const TopBar = () => {
    return (
        <div className='top'>
            <div className="topLeft">
            <img className='topIcons' src={facebook} alt="facebookIcon" />
            <img className='topIcons' src={instagram} alt="instagramIcon" />
            <img className='topIcons' src={github} alt="githubIcon" />
            </div>
            <div className="topCenter">
                <ul className="toplist">
                    <li className='topListItems'>HOME</li>
                    <li className='topListItems'>ABOUT</li>
                    <li className='topListItems'>CONTACT</li>
                    <li className='topListItems'>WRITE</li>
                    <li className='topListItems'>LOGOOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src={parvez} alt="parvezProfile" />
                <img className='searchIcon' src={search} alt="searchIcon" />
            </div>
        </div>
    );
};

export default TopBar;