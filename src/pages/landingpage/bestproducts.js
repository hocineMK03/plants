  import React from 'react'
  import { FaRegArrowAltCircleRight } from "react-icons/fa";
import '../../styles/landingpage/bestproducts.css'
  import plant1 from '../../assets/zanzibar.png'
  import plant2 from '../../assets/peace-lily.png'
  import plant3 from '../../assets/calathea.png'
  const BestProducts = () => {
    return (
      <div className='product'>
        <div className='product-container'>
        <div className='product-text'>
  <h2>Here Is Our Best Products</h2>
  <div>
    <span>See More</span>
    <FaRegArrowAltCircleRight />
  </div>
  </div>
  <div className='product-card'>
    <div className='card'>
        <div className='card-image'>
            <img src={plant1} alt='plant'/>
        </div>
        <h2>Zanzibar Plant</h2>
        <button>For 19.99 $</button>
    </div>
    <div className='card'>
        <div className='card-image'>
            <img src={plant2} alt='plant'/>
        </div>
        <h2>Peace Lily Plant</h2>
        <button>For 09.99 $</button>
    </div>
    <div className='card'>
        <div className='card-image'>
            <img src={plant3} alt='plant'/>
        </div>
        <h2>calathea Plant</h2>
        <button>For 50.99 $</button>
    </div>
  </div>
        </div>
      </div>
    )
  }

  export default BestProducts
