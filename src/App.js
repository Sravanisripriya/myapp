import React from 'react';
import './App.css';
import Nav from './Nav';
import ProductData from './Productdata';



function App() {
  const currentHour= new Date().getHours() > 9 ?new Date().getHours():'0' + new Date().getHours();
  const currentMinute=new Date().getMinutes() > 9 ?new Date().getMinutes():'0' + new Date().getMinutes()
  return (
    <div className='App'>
     <Nav></Nav>

    <div className='main-cont'>
       <div className='product-preview'>
          {/* <img src='https://www.switchingtomac.com/wp-content/uploads/2022/12/preview-media-01-Title-Image.jpeg'/> */}
          <img src='https://t4.ftcdn.net/jpg/05/23/21/91/240_F_523219110_mFhsfV3mm1bsuChrvYTARTPO4HmF3hY2.jpg' alt='Violet'/>
          {/* <div className='feature-time'>
            <p>{`${currentHour}:${currentMinute}`}</p>
          </div> */}

          <div className='feature-Heart'>
          <i class="bi bi-heart-pulse-fill"></i>
            <p>78</p>
          </div>
       </div>

    <div className='productData'>
      <h1 className='p-title'>{ProductData.title}</h1>
      <p className='p-description'>{ProductData. description}</p>
      <h3 className='p-color'>Select color</h3>
      <div>
        <img className={['p-img select-img'].join(' ')}src='https://t4.ftcdn.net/jpg/05/23/21/91/240_F_523219110_mFhsfV3mm1bsuChrvYTARTPO4HmF3hY2.jpg' alt='Violet'/>
        <img className='p-img' src='https://t3.ftcdn.net/jpg/05/23/21/90/240_F_523219097_qvZQsD4hQuBRKg2ApLSkHrPlqkqQ6AuB.jpg' alt='Blue'/>
        <img className='p-img' src='https://t4.ftcdn.net/jpg/05/23/21/91/240_F_523219127_yQJYPOGpD3oTTAhHnm2oJxM4CM4rakfW.jpg' alt='Red'/>
        <img className='p-img' src='https://t3.ftcdn.net/jpg/05/23/21/90/240_F_523219098_PkTnAqWf05kitGVBxEvxzzLbWCxrRHX2.jpg' alt='Brown'/>
        <img className='p-img' src='https://t4.ftcdn.net/jpg/05/23/21/91/240_F_523219118_6YWmC8CFnkRSLW3EJA7NRvgh2wbRSNy7.jpg'alt='Orange'/>
        {/* <img className='p-img' src='https://t4.ftcdn.net/jpg/05/23/55/05/240_F_523550547_ws7nb0TfjrOVOwgh81mLyS8mQdU2rX61.jpg' alt='Pink'/> */}
      </div>
      <h3 className='p-color'>Features</h3>
      <div>
        <button className='f-btn selected-btn'>Time</button>
        <button className='f-btn'>Heart Rate</button>
      </div>
      <button className='buy-btn'>Buy Now</button>

    </div>
  </div>
</div>
  );
}

export default App;
