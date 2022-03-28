import React from "react";
import './NavigationBar.css'
import {Link} from "react-router-dom";

const navigationClasses = [{title: 'Home', link: '/'}, {title: 'Discover', link: '/discover'}, {
    title: 'Leaderboard',
    link: '/leaderboard'
}];
const NavigationBar = () => {
    const pathName = window.location.pathname;
    return (
        <div className='NavigationBar'>
            {navigationClasses.map((i) => <Link to={i.link}>
                <div className='navTextWrapper' style={{color:i.link===pathName?'rgba(0, 0, 255, 0.84)':'gray'}}>{i.title}</div>
                {i.link === pathName && <div className="navigationUnderline"/>}
            </Link>)}
        </div>)
};

export default NavigationBar;