import './success.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const orderData = location.state?.orderData;  
 if (!orderData) {
    return <div>No data available</div>;
  }

  return (
    <div className='successmain'>
      <img className='logo' src="images\iteration-1-images\logo.svg" alt="" />
      <h3 style={{fontFamily:'satisfy', color:'#FDC913'}}>lezzetin yolda</h3>
      <h2 style={{fontFamily:'quattrocento-bold', fontSize:'60px', color:'#FAF7F2'}}>SİPARİŞ ALINDI</h2>
      <hr style={{color:'#FAF7F2', textAlign:'center'}}></hr>
      <h2 style={{color:'#FAF7F2'}}>Position Absolute Acı Pizza</h2>
      <div className='gelenBilgiler'>
      <p>İsim: {orderData.isim}</p>
      <p>Boyut: {orderData.boyut}</p>
      <p>Hamur: {orderData.hamur}</p>
      
      <p>Malzemeler: {orderData.malzemeler.join(', ')}</p>
      <p>Sipariş Notu: {orderData.siparisNotu}</p>
      </div>
      <div className='toplamFiyat'>
      <span>Toplam Fiyat</span>
      <p>{orderData.toplamFiyat}₺</p>
      </div>
    </div>
  );
};

export default Success;
