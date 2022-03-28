import React, {useEffect, useState} from 'react'
import './PhotoPage.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Header from "../Homepage/Header";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReplyIcon from '@mui/icons-material/Reply';
import InfoIcon from '@mui/icons-material/Info';
import SearchBar from "../Homepage/SearchBar";
import axios from "axios";
import {useSearchParams} from "react-router-dom";

const PhotoPage = () =>{
    const followerNumber = 419;
    const [shouldShowSearchInfo,setShouldShowSearchInfo] = useState(false);
    const [photoPageData,setPhotoPageData]=useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    useEffect(()=>{
        axios.get(`http://127.0.0.1:5000//api/v1/resources/photo?id=${id}`)
            .then(res =>{
                setPhotoPageData(res.data)
            })
    },[]);
    return(
        <div className='photoPageContentWrapper'>
            <Header shouldChangeBackgroundColor={true}/>
            <div className='SubPageSearchBarWrapper'>
                <SearchBar
                    setShouldShowSearchInfo={setShouldShowSearchInfo}
                    shouldShowSearchInfo={shouldShowSearchInfo}
                    height={50}/>
            </div>
            <div className='photoTop'>
                <div className='photoTopLeft'>
                    <div className='authorInformation'>
                        <div className='authorIcon'><img src={'https://images.pexels.com/users/avatars/157994802/mathilde-langevin-554.jpeg?auto=compress&fit=crop&h=256&w=256'}/></div>
                        <div className='authorNameWrapper'>
                            <div className='authorName'>Mathilde Langevin</div>
                            <div className='followerNumber'>{followerNumber} followers</div>
                        </div>
                    </div>
                    <div className='photoLeftButton'>Follow</div>
                    <div className='photoLeftButton'>Donate</div>
                </div>
                <div className='photoTopRight'>
                    <div className='photoRightButton'>
                        <FavoriteBorderIcon/>
                        <div>40 Likes</div>
                    </div>
                    <div className='photoRightButton'>
                        <AddCircleOutlineIcon/>
                        <div className='photoCollectionText'>Collect</div>
                    </div>
                    <div className='photoFreeDownloadButton'>
                        <div className='freeDownloadText'>Free Download</div>
                        <div className='freeDownloadIcon'><ExpandMoreIcon/></div>
                    </div>
                </div>
            </div>
            <div className='selectedPhotoWrapper'>
                <div className='selectedPhotoContent'>
                    <div><img src={photoPageData.url}/></div>
                    <div className='photoBottom'>
                        <div className='photoViews'>
                            <div><VisibilityIcon/></div>
                            <div>296K Views</div>
                        </div>
                        <div className='freeToUse'>
                            <div><CheckCircleIcon/></div>
                            <div>Free to use</div>
                        </div>
                    </div>
                    <div className='photoBottomButtonWrapper'>
                        <div className='photoBottomButton'>
                            <div><ReplyIcon/></div>
                            <div>share</div>
                        </div>
                        <div className='photoBottomButton'>
                            <div><InfoIcon/></div>
                            <div>Info</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='similarPhotosWrapper'>
                <div className='similarPhotosTitle'>Similar photos</div>
                <div className='similarPhotosContentWrapper'>
                    <div className='similarPhotosSub'>
                        <img src={'https://images.pexels.com/photos/10306975/pexels-photo-10306975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/3155586/pexels-photo-3155586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}/>
                        <img src={'https://images.pexels.com/photos/1846362/pexels-photo-1846362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/3609781/pexels-photo-3609781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                    </div>
                    <div className='similarPhotosSub'>
                        <img src={'https://images.pexels.com/photos/8103077/pexels-photo-8103077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/7354760/pexels-photo-7354760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/4021880/pexels-photo-4021880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/3851911/pexels-photo-3851911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                    </div>
                    <div className='similarPhotosSub'>
                        <img src={'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/7354593/pexels-photo-7354593.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/4045567/pexels-photo-4045567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/4467151/pexels-photo-4467151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                    </div>
                    <div className='similarPhotosSub'>
                        <img src={'https://images.pexels.com/photos/3654619/pexels-photo-3654619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/8217514/pexels-photo-8217514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/4045567/pexels-photo-4045567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                        <img src={'https://images.pexels.com/photos/4467151/pexels-photo-4467151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PhotoPage;