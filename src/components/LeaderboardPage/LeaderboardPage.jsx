import React, {useEffect, useState} from "react";
import './LeaderboardPage.css';
import Header from "../Homepage/Header";
import SearchBar from "../Homepage/SearchBar";
import NavigationBar from "../Homepage/NavigationBar";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ReactTooltip from 'react-tooltip';
import axios from "axios";

const LeaderboardPage = () =>{
    const [shouldShowSearchInfo,setShouldShowSearchInfo] = useState(false);
    // TODO Combine to one state with String
    const [timeRangeState,setTimeRangeState] = useState('last30Days');
    const timeRangeSelectionHandler = (timeRange)  => () => {
        setTimeRangeState(timeRange);
    };

    const [leaderboardPageData,setLeaderboardPageData] = useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000//api/v1/resources/leaderboard')
            .then(res =>{
                setLeaderboardPageData(res.data)
            });
    },[]);

    return(
        <div>
            <Header shouldChangeBackgroundColor={true}/>
            <div className='SubPageSearchBarWrapper'><SearchBar setShouldShowSearchInfo={setShouldShowSearchInfo}  shouldShowSearchInfo={shouldShowSearchInfo} height={50}/></div>
            <div className='discoverPageNavWrapper'><NavigationBar/></div>
            <div className='leaderboardWrapper'>
                <div className='leaderboardTitleWrapper'>
                    <div className='leaderboardTitleTop'>Photographer Leaderboard</div>
                    <div className='leaderboardTitleBottom'>Users with the most views of <div className='leaderboardTitleBottomBold'>photos and videos uploaded in the last 30 days</div></div>
                </div>
                <div className='leaderboardContentWrapper'>
                    <div className='leaderboardNavigationBar'>
                        <div className='leaderboardNavigationBarButtonWrapper' onClick={timeRangeSelectionHandler('last30Days')}>
                            <div className='leaderboardNavigationBarButton' style={{color:timeRangeState==='last30Days'? 'rgba(0, 0, 255, 0.84)':'gray'}}>Last 30 Days </div>
                            {timeRangeState==='last30Days' && <div className='leaderboardNavigationBarButtonUnderline'/>}
                        </div>
                        <div className='leaderboardNavigationBarButtonWrapper' onClick={timeRangeSelectionHandler('allTime')}>
                            <div className='leaderboardNavigationBarButton' style={{color:timeRangeState==='allTime'? 'rgba(0, 0, 255, 0.84)':'gray'}}>All-Time</div>
                            {timeRangeState==='allTime' && <div className='leaderboardNavigationBarButtonUnderline'/>}
                        </div>
                    </div>
                    <div className='leaderboard'>
                        {timeRangeState==='last30Days' &&
                        leaderboardPageData.map((i,index)=><div className='last30DaysLeaderboard'>
                            <div className='leaderboardSubsection'>
                                <div className='leaderboardRankWrapper'>
                                    <div className='rankNumber'>{index+1}</div>
                                    <div className='viewsNumber'>{i.views}</div>
                                    <div className='viewsText'>Views</div>
                                </div>
                                <div className='leaderboardPersonalInfoWrapper'>
                                    <div className='leaderboardPersonalIconWrapper'><img src={i.iconUrl}/></div>
                                    <div className='leaderboardPersonalNameWrapper'>
                                        <div>{i.name}</div>
                                        <div className='leaderboardAddButton' data-tip="follow">
                                            <AddOutlinedIcon/>
                                            <ReactTooltip/>
                                        </div>
                                    </div>
                                </div>
                                <div className='leaderboardPersonalPhotoWrapper'>
                                    <div className='leaderboardSinglePhotoWrapper'>
                                    {i.photoUrl.map((url)=><img src={url}/>)}
                                    </div>
                                </div>
                            </div>
                        </div>)}


                        {timeRangeState==='allTime' && <div className='allTimeLeaderboard'>board2</div>}
                    </div>
                </div>
            </div>
        </div>
            )
};

export default LeaderboardPage;