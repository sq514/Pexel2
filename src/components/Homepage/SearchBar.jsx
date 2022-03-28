import React, {useState} from "react";
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { useRef} from "react";
import SearchBarContent from "./SearchBarContent";

const SearchBar = ({shouldShowSearchInfo,setShouldShowSearchInfo,height,position}) => {
    const searchInfoHandler = () =>{
        setShouldShowSearchInfo(!shouldShowSearchInfo)
    };

    return(
        <div className='searchAreaWrapper' style={{position}} >
            <div>
                <div className='searchInput'>
                    <input style={{height:height}} onClick={searchInfoHandler} placeholder={'Search for free photos and videos'}/>
                    <SearchIcon/>
                </div>
                <div>
                 {shouldShowSearchInfo && <SearchBarContent shouldShowSearchInfo={shouldShowSearchInfo} setShouldShowSearchInfo={setShouldShowSearchInfo}/>}
             </div>
            </div>
        </div>
    )
};

export default SearchBar;