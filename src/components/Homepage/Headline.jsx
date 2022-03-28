import React, {useState} from "react";
import './Headline.css';
import SearchBar from "./SearchBar";

const BACKGROUND_URL = 'https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.5&h=500&sharp=10&w=1400';

const Headline = () =>{
    const suggestedWords = ['forest,','moon,','sunset,','city,','cloudy sky,','night sky,','more'];
    const [shouldShowSearchInfo,setShouldShowSearchInfo] = useState(false);
    return(
        <div className='headline'>
            <img src={BACKGROUND_URL}/>
            <div className='headlineContentWrapper'>
                <div className='headlineText'>The best free stock photos, royalty free images & videos shared by creators.</div>
                <SearchBar setShouldShowSearchInfo={setShouldShowSearchInfo}  shouldShowSearchInfo={shouldShowSearchInfo} height={60}/>
                {
                    !shouldShowSearchInfo &&
                    <div className={'suggestedText'}>
                        <div>Suggested:</div>
                        {suggestedWords.map((i) => <div className='suggestedWords'>{i}</div>)}
                    </div>
                }
            </div>
        </div>
    )
};

export default Headline;