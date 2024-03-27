import React from 'react';
import '../../styles/landingpage/smalldescription.css';
import herosectionImage from '../../assets/herosection.png';

const SmallDescription = () => {
    return (
        <div className='desc'>
            <div className='desc-container'>
                <h1>
                    Learn how We Take Care Of The Plants At Every Stage Of Growth From Seed TO Your Home
                </h1>
                <img src={herosectionImage} alt='plant'/>
            </div>
        </div>
    );
}

export default SmallDescription;
