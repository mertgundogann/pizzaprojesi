
import './homepage.css'
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Button } from 'reactstrap';


const Homepage = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/siparis");
  }
  return (

    <>

      <div id="main">
        <div className="maindiv">
          <div className='basliklar'>
            <img className='logo' src="images\iteration-1-images\logo.svg" alt="" />
            <h3 className='satisfy'>fırsatı kaçırma</h3>
            <h1>KOD ACIKTIRIIR!</h1>
            <h1>PİZZA, DOYURUR</h1>
            <button onClick={handleClick}>ACIKTIM</button>
          </div>

        </div>

      </div>
      <div className='icons'>
        <img src="images/iteration-2-images/icons/1.svg" alt="" />
        <span>Yeni Kore!</span>
        <img src="images/iteration-2-images/icons/2.svg" alt="" />
        <span>Pizza</span>
        <img src="images/iteration-2-images/icons/3.svg" alt="" />
        <span>Burger</span>
        <img src="images/iteration-2-images/icons/4.svg" alt="" />
        <span>Kızartmalar</span>
        <img src="images/iteration-2-images/icons/5.svg" alt="" />
        <span>Yeni Kore!</span>
        <img src="images/iteration-2-images/icons/6.svg" alt="" />
        <span>Gazlı İçecek</span>
      </div>
      <div>
      </div>
      <div className='cards '>
        <div className='solkart'>
          <Card inverse className='cardimages card border-0'>
            <CardImg
              alt="Card image cap"
              src="images/iteration-2-images/cta/kart-1.png"
              style={{
                height: 680,
                width: 750,
                border: 0
              }}
              width="100%"
            />
            <CardImgOverlay className='carddiv'>
              <CardTitle tag="h1">Özel</CardTitle>
              <CardTitle tag="h1">Lezzetus</CardTitle>
              <CardText className='cardspan'>Position : Absolute Acı Burger</CardText>
              <Button>SİPARİŞ VER</Button>
            </CardImgOverlay>
          </Card>
        </div>

        <div className="sagkart">
          <Card inverse className='cardimages border-0'>
            <CardImg
              alt="Card image cap"
              src="images/iteration-2-images/cta/kart-2.png"
              style={{
                height: 550,
                width: 700
              }}
              width="100%"
            />
            <CardImgOverlay className='carddiv '>
              <CardTitle tag="h3">Hacklathlon</CardTitle>
              <CardTitle tag="h3">Burger Menü</CardTitle>
              <Button>SİPARİŞ VER</Button>
            </CardImgOverlay>
          </Card>

          <Card inverse className='cardimages border-0'>
            <CardImg
              alt="Card image cap"
              src="images/iteration-2-images/cta/kart-3.png"
              style={{
                height: 550,
                width: 700
              }}
              width="100%"
            />
            <CardImgOverlay className='carddiv'>
              <CardTitle tag="h3" style={{ color: "#CE2829" }} >Çook hızlı</CardTitle>
              <CardTitle tag="h3" style={{ color: "#292929" }}>npm gibi kurye</CardTitle>

              <Button>SİPARİŞ VER</Button>
            </CardImgOverlay>
          </Card>
        </div>
      </div>
      <div className='yazilarorta'>
        <h2 style={{ color: 'red', textAlign: 'center', fontFamily: 'satisfy', backgroundColor: '  ' }}>en çok paketlenen menüler</h2>
        <h2 style={{ textAlign: 'center', fontFamily: 'quattrocento-bold ', marginBottom: '0' }}>Acıktıran Kodlara Doyuran Lezzetler</h2>
      </div>
      <div className='alticons '>
        <button><img src="images/iteration-2-images/icons/1.svg" alt="my image" />Ramen</button>
        <button style={{ backgroundColor: '#292929', color: 'white' }}><img src="images/iteration-2-images/icons/2.svg" alt="my image" />Pizza</button>
        <button><img src="images/iteration-2-images/icons/3.svg" alt="my image" />Burger</button>
        <button><img src="images/iteration-2-images/icons/4.svg" alt="my image" />French fries</button>
        <button><img src="images/iteration-2-images/icons/5.svg" alt="my image" />Fast food</button>
        <button><img src="images/iteration-2-images/icons/6.svg " alt="my image" />Soft drinks</button>

      </div>
      <div className='yemekler'>
        <div className='resim1'>
          <img src="images\iteration-2-images\pictures\food-1.png" alt="" />
          <h3>Terminal Pizza</h3>

          <h2 style={{ color: '#5F5F5F' }}>4.9</h2>
          <h2>60 ₺</h2>
        </div>
        <div className='resim2'>
          <img src="images\iteration-2-images\pictures\food-2.png" alt="" />
          <h3>Position Absolute Acı Pizza</h3>

          <h2 style={{ color: '#5F5F5F' }}>4.4</h2>
          <h2>70 ₺</h2>
        </div>
        <div className='resim3'>
          <img src="images\iteration-2-images\pictures\food-3.png" alt="" />
          <h3>useEffect Tavuklu Burger</h3>

          <h2 style={{ color: '#5F5F5F' }}>4.1</h2>
          <h2>85 ₺</h2>
        </div>


      </div>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-section">
            <img className='logo' src="images\iteration-1-images\logo.svg" alt="" />
            <img src="images\iteration-2-images\footer\icons\icon-1.png" alt="" />
            <span>341 Londonderry Road,Istanbul Turkiye</span><br></br>
            <img src="images\iteration-2-images\footer\icons\icon-2.png" alt="" />
            <span>aciktim@teknolojikyemekler.com</span><br></br>
            <img src="images\iteration-2-images\footer\icons\icon-3.png" alt="" />
            <span>+90 555 55 55 55</span>
          </div>

          <div class="footer-section">
            <h3>Sıccacık Menüler</h3>
            <p>5 Kişilik Pepperoni Pizza</p>
            <p>Sucuklu Pizza</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
            <p>Beyaz Console Frosty</p>
          </div>

          <div class="footer-section">
            <h3 style={{ textAlign: 'left' }}>Instagram</h3>
            <div class="instagram">
              <img src="images\iteration-2-images\footer\insta\li-0.png" alt="" />
              <img src="images\iteration-2-images\footer\insta\li-1.png" alt="" />
              <img src="images\iteration-2-images\footer\insta\li-2.png" alt="" />
              <img src="images\iteration-2-images\footer\insta\li-3.png" alt="" />
              <img src="images\iteration-2-images\footer\insta\li-4.png" alt="" />
              <img src="images\iteration-2-images\footer\insta\li-5.png" alt="" />
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="footer-bottom">
          <p>&copy; 2023 Teknolojik Yemekler </p>

          <i class="fa-brands fa-twitter"></i>
        </div>
      </footer>

    </>

  );

}
export default Homepage;