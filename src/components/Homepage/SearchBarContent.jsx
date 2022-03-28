import React, {useEffect, useRef, useState} from "react";
import './SearchBar.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';
const SearchBarContent = ({shouldShowSearchInfo,setShouldShowSearchInfo}) =>{
    const searchHistory = ['Clouds','Sd'];
    const collections = [{name:'People At Night',num:52,url:'https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},{name:'Night Lights',num:31,url:'https://images.pexels.com/photos/3751387/pexels-photo-3751387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},{name:'Cities In The Night',num:12,url:'https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},{name:'Starry Night',num:98,url:'https://images.pexels.com/photos/2423959/pexels-photo-2423959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}];
    const trendingTopics = ['Fruit','Flower','Clouds','Sunshine','Sea','Child','Happiness','Car','Minimalist'];
    const [searchHistoryStates,setSearchHistoryStates] = useState(true);
    const removeHistoryHandler = () =>{
        setSearchHistoryStates(false)
    };
    const wrapperRef= useRef(null);
    useEffect(()=>{
        const handleClickOutside = (e) =>{
            if(!wrapperRef.current.contains(e.target)){
                setShouldShowSearchInfo(false);
            }
        };
        window.addEventListener("click",handleClickOutside);
        return ()=>{window.removeEventListener("click",handleClickOutside)}
    },[wrapperRef]);
    return(
        <div className='searchContentWrapper' ref={wrapperRef}>
            {searchHistoryStates && <div className='recentSearchWrapper'>
                <div className='recentSearchContent' >
                    <div className='searchTitle'>
                        <div>Recent searches</div>
                        <HighlightOffIcon onClick={removeHistoryHandler}/>
                    </div>
                    <div className='searchHistoryWords'>
                        {searchHistory.map((i)=><div className='searchHistory'>
                            <div className='searchHistoryText'>{i}</div>
                            <SearchIcon/>
                        </div>)}
                    </div>
                </div>
            </div>}

            <div className='subContentWrapper'>
                <div className='subContentTitle'>Collections</div>
                <div className='collectionContentWrapper'>
                    {collections.map((i)=>
                        <div className='collectionElementsWrapper'>
                            <div className='collectionPhoto'>
                                <div className='photoWrapper' style={{backgroundImage:`url(${i.url})`}}/>
                            </div>
                            <div className='collectionInf'>
                                <div className='collectionName'>{i.name}</div>
                                <div className='collectionNum'>{i.num}  photos</div>
                            </div>
                        </div>)}
                </div>

            </div>
            <div className='subContentWrapper'>
                <div className='subContentTitle'>Trending topics</div>
                <div className='trendingTopicsContentWrapper'>
                    {trendingTopics.map((topic)=><div className='trendingTopicsElements'>
                        <div className='trendingTopicsPhoto' />
                        <div className='trendingTopicsTitle'>{topic}</div>
                    </div>)}
                </div>
            </div>
        </div>
    )
};
export default SearchBarContent;