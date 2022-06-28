import React from 'react';
import './sidebar.css';
import parvez from '../../assests/parvez.jpg';
import facebook from '../../assests/icons8-facebook.svg';
import instagram from '../../assests/icons8-instagram.svg';
import github from '../../assests/icons8-github.svg';


const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItmes">
                <div className="sidebarTitle">
                    <span>ABOUT ME</span>
                </div>
                <img className='sidebarImg' src={parvez} alt="parvezProfilePic" />
                <p className='sidebarText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem voluptatum minima nisi minus id eos. Quibusdam deserunt earum architecto?</p>
            </div>
            <div className="sidebarItems">
            <div className="sidebarTitle">
            <span>CATAGORIES</span>
            </div>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>
            <div className="sidebarItems">
                <div className="sidebarTitle">
                    <span>FOLLOW ME</span>
                    </div>
                    <div className="followSocial">
                    <img className='sidebarIcons' src={facebook} alt="facebookIcon" />
                    <img className='sidebarIcons' src={instagram} alt="instagramIcon" />
                    <img className='sidebarIcons' src={github} alt="githubIcon" />
                    </div>
            </div>
        </div>
    );
};

export default SideBar;