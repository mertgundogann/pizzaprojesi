import React from 'react';

import './success.css';

const Success = ({ pizzaData }) => {
    if (!pizzaData) return <div>Veri yükleniyor...</div>;
    return (
        <section id='mainsuccess'>
            <div className='successdiv'>
            <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" />
            <div className='succeslogo'>
            <h3 className='satisfy' style={{color:'#FDC913'}}>fırsatı kaçırma</h3>
             <h1 style={{color:'#FAF7F2', fontSize:'4rem', fontFamily:'quattrocento-bold'}}>SİPARİŞİNİZ ALINDI</h1>
             <hr style={{color:'white', width:'50%', margin:'0 auto', marginTop:'5rem'}}></hr>
             <h3>İsim: {pizzaData.isim}</h3>
            <p>Boyut: {pizzaData.boyut}</p>
            <p>Hamur: {pizzaData.hamur}</p>
            <p>Malzemeler: {pizzaData.malzeme.join(', ')}</p>
            <p>Toplam Fiyat: {pizzaData.toplamFiyat}₺</p>
            <p>Sipariş Notu: {pizzaData.siparisNotu}</p>
             </div> 
            </div>
        </section>
    )
};

export default Success;
