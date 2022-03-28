import React from "react";
import './DiscoverCollection.css'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
const DiscoverCollection = ({data}) =>{
    console.log('test commit')
    return(
        <div className='discoverCollectionWrapper'>
            <div className='discoverCollection'>
                <div className='discoverCollectionTitle'>{data[0].title}</div>
                <div className='discoverCollectionTagsWrapper'>
                        {data[0].tag.map( (i) => <div className='discoverCollectionTags'>{i}</div>)}
                </div>
                <div className='discoverPhotoWrapper'>
                    {data.map((i,index) =>{
                        return index!==0 && (
                            <div className='discoverPhotoSubsectionWrapper'>
                                <div className='discoverCollectionHeaderImg'>
                                    <img src={i.subContentUrl[0]}/>
                                </div>
                                <div className='discoverCollectionImgWrapper'>
                                    {i.subContentUrl.map((url,index) => {
                                        return index!== 0 && (<div className='discoverCollectionImg'>
                                            <img src={url}/>
                                        </div>)
                                    })}
                                </div>
                                <div className='discoverCollectionBottomWrapper'>
                                    <div className='discoverCollectionBottomTitleWrapper'>{i.subTitle}</div>
                                    <div className='discoverCollectionBottomPhotoNum'>
                                        <PhotoLibraryIcon/>
                                        <div>{i.photoNum}</div>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
        </div>
    )
};

export default DiscoverCollection;