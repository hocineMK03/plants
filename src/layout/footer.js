import React from 'react'
import '../styles/layout/footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
     <div className='footer-wrapper'>
     <div className='footer-details'>
        <div>
            <h3>MENU</h3>
            <h4>Gallery</h4>
            <h4>Category</h4>
            <h4>Best Offer</h4>
            <h4>Promo</h4>


        </div>


        <div>

        <h3>FAQ</h3>
            <h4>Payment</h4>
            <h4>Order</h4>
            <h4>Manage Delivery</h4>
            <h4>Contact Us</h4>
        </div>



        <div>
        <h3>SUPPORT</h3>
            <h4>Call Of Delivery</h4>
            <h4>Online Chat</h4>
            <h4>Call Center</h4>

        </div>

      </div>
      <div className='footer-line'>

      </div>

      <div className='footer-copyright'>
        <a>2024@All rights reserved,Design Made by Nur Mohammed && Developement By Hocine</a>
        <a>terms and conditions</a>

      </div>
     </div>
    </footer>
  )
}

export default Footer
