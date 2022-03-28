import React, {useEffect, useState} from "react";
import './Header.css'
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchBar from "./SearchBar";

const Header = ({shouldChangeBackgroundColor}) =>{

    const [shouldShowSearchInfo,setShouldShowSearchInfo] = useState(false);

    const exploreContents  = [
        {label:'Discover Photo', onClickFn: () => {console.log('clicked')}},
        {label:'Search', onClickFn: () => {console.log('Search')}},
        {label:'Leaderboard', onClickFn: () => {console.log('Leaderboard')}}
    ];


    return(
        <div className='header' style={{background:shouldChangeBackgroundColor?'#232a34':'None'}}>
            <div className='headerLeft'>
                <div className='headerIcon'> <BedroomBabyIcon/> </div>
                <div className='headerText'>Pexels</div>
            </div>
            {shouldChangeBackgroundColor &&<div className='SubPageSearchBarWrapper'><SearchBar height={50} shouldShowSearchInfo={shouldShowSearchInfo} setShouldShowSearchInfo={setShouldShowSearchInfo} position={'fixed'}/></div>}

            <div className='headerRight'>
                <div className='exploreWrapper'>
                     <div className='headerClass'>Explore</div>
                     <div className='exploreContainer'>
                         {exploreContents.map(content => (
                             <div className='exploreContent' onClick={content.onClickFn}>{content.label}</div>
                         ))}
                     </div>
                </div>
                <div className='headerClass'>License</div>
                <div className='headerRightIcon'><NotificationsNoneIcon/></div>
                <div className='headerRightIcon'><AccountCircleIcon/><KeyboardArrowDownIcon/></div>
                <div className='headerUpload'>Upload</div>
            </div>
         </div>)
};

export default Header;