import React, {useEffect, useState} from 'react';
import './Homepage.css'
import Headline from "./Headline";
import NavigationBar from "./NavigationBar";
import HomepageContent from "./HomepageContent";
import Header from "./Header";

const Homepage = () =>{
    const[shouldChangeBackgroundColor,setShouldChangeBackgroundColor]=useState(false);
    const[scrollY,setScrollY] = useState(-1);
    useEffect(()=>{
        const backgroundColorHandler =() =>{
          window.scrollY <=1 ? setShouldChangeBackgroundColor(false):setShouldChangeBackgroundColor(true);
          setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", backgroundColorHandler);
        return ()=>{window.removeEventListener("scroll",backgroundColorHandler)}
    },[]);

    return(
    <div className='homepageWrapper'>
        <Header shouldChangeBackgroundColor={shouldChangeBackgroundColor}/>
        <div className='headlineWrapper'>
            <Headline/>
        </div>
        <div className='navigationBarWrapper'>
            <NavigationBar/>
        </div>
        <div className='homepageContentWrapper'>
            <HomepageContent scrollY={scrollY}/>
        </div>
    </div>
    )
};

export default Homepage;