import React, {useEffect, useState} from "react";
import './DiscoverPage.css';
import Header from "../Homepage/Header";
import NavigationBar from "../Homepage/NavigationBar";
import DiscoverCollection from "./DiscoverCollection";
import axios from "axios";
const discoverData1 = [
    {title:'Popular Collections',tag:['Furniture','Winter','Communication','Community','Teacher','Table','Ice Cream','Iphone']},
    {subTitle:"Women's History Month",subContentUrl:['https://images.pexels.com/photos/6954220/pexels-photo-6954220.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360','https://images.pexels.com/photos/8532828/pexels-photo-8532828.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90','https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90','https://images.pexels.com/photos/5915224/pexels-photo-5915224.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90','https://images.pexels.com/photos/4858584/pexels-photo-4858584.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90'],photoNum:126},
    {subTitle:'Business Life',subContentUrl:['https://images.pexels.com/photos/8145352/pexels-photo-8145352.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360','https://images.pexels.com/photos/5816293/pexels-photo-5816293.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90','https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90','https://images.pexels.com/photos/8872548/pexels-photo-8872548.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90','https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90'],photoNum:143},
    {subTitle:'Sunflowers',subContentUrl:['https://images.pexels.com/photos/7527748/pexels-photo-7527748.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360','https://images.pexels.com/photos/10090474/pexels-photo-10090474.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90','https://images.pexels.com/photos/4912037/pexels-photo-4912037.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90','https://images.pexels.com/photos/5340349/pexels-photo-5340349.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90','https://images.pexels.com/photos/5696683/pexels-photo-5696683.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=65&w=90'],photoNum:208}];


const DiscoverPage = () =>{
    const [discoverPageData,setDiscoverPageData] = useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000//api/v1/resources/discover')
            .then(res =>{
                setDiscoverPageData(res.data)
            });
    },[]);

    if(discoverPageData.length===0){
        return <div/>
    }

    console.log(discoverPageData[0].title)
    discoverPageData.map((i)=> console.log(i));

    return(
        <div>
            <Header shouldChangeBackgroundColor={true}/>
            <div className='discoverPageNavWrapper'><NavigationBar/></div>
            <div><DiscoverCollection data={discoverPageData}/></div>
            <div><DiscoverCollection data={discoverPageData}/></div>
            <div><DiscoverCollection data={discoverPageData}/></div>
        </div>
    )
};

export default DiscoverPage;
