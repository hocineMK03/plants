import React from 'react'
import { FaCanadianMapleLeaf } from "react-icons/fa";
import '../../styles/landingpage/tellmemore.css'
import tellmoreImage from '../../assets/tellmore.png'
const TellMore = () => {
  return (
    <div className='more'>
      <div className='more-container'>
        <div className='more-image'>
        <img  src={tellmoreImage}/>
        <h2>Customers Satisfied</h2>
        <span>Based On 2000 Reviews</span>
        </div>
        <div className='more-text'>
        <h1>Assemble Your Own Unique Plant </h1>
        <p id='moretext'>get customised arrangements based on your preferences</p>

        <div className='more-features'>
        <div className='more-feature'>
            <FaCanadianMapleLeaf />
            <p>Get exclusive and floral offers</p>
        </div>

        <div className='more-feature'>
            <FaCanadianMapleLeaf />
            <p>Get your unique plants every week</p>
        </div>
        <div className='more-feature'>
            <FaCanadianMapleLeaf />
            <p>Save 15% on your order</p>
        </div>
        </div>
        <button>Tell Me More</button>
        </div>
      </div>
    </div>
  )
}

export default TellMore
