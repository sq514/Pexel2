import React, {useEffect, useState} from "react";
import './HomepageContent.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom";
import axios from 'axios';
const HomepageContent = ({scrollY}) =>{
    const [homepagePhotoData,setHomepagePhotoData]=useState([]);
    const catPhoto = [
        [{id:15,url:'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},{id:16,url:'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}],
        [{id:25,url:'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},{id:26,url:'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}],
        [{id:35,url:'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},{id:36,url:'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}]
    ];

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000//api/v1/resources/homepage/photos')
            .then(res =>{
                setHomepagePhotoData(res.data)
            });
    },[]);

    useEffect(()=>{
            if(Math.ceil(window.innerHeight + scrollY) >= document.documentElement.scrollHeight){

                const newHomepageData = [];
                newHomepageData.push(homepagePhotoData[0].concat(catPhoto[0]));
                newHomepageData.push(homepagePhotoData[1].concat(catPhoto[1]));
                newHomepageData.push(homepagePhotoData[2].concat(catPhoto[2]));

                setHomepagePhotoData(newHomepageData);
            }
        }

    ,[scrollY]);

    return(
        <div className='homepageContentPhotoWrapper'>
            <div className='homepageContentTitleWrapper'>
                <div className='homepageContentTitleText'>
                    <div >Free Stock Photos</div>
                </div>
                <div className='homepageContentTrendingWrapper'>
                    <div className='homepageContentTrending'>Trending</div>
                    <ArrowDropDownIcon/>
                    <div className='trendingContainer'>
                        <div className='trendingContainerContent'>Trending</div>
                        <div className='trendingContainerContent'>New</div>
                        <div className='trendingContainerContent'>Following</div>
                    </div>
                </div>
            </div>

            <div className='homepagePhotoWrapper'>
                {homepagePhotoData.map((i)=>
                    <div className='homepagePhotoSub'>
                    {i.map((photo)=>
                    <Link to={`/photo?id=${photo.id}`}><img src={photo.url}/></Link>
                    )}
                     </div>
                )}
            </div>


         </div>)
};

export default HomepageContent;