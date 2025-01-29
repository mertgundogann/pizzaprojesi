
import './homepage.css'
import {react} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Homepage = () =>{
    const history = useHistory();
    return (
            
        <section id='main'>
            <div className='maindiv'>
            <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" />
            <h1>KOD ACIKTIRIR</h1>
            <h1>PİZZA, DOYURUR</h1>
            <button onClick={() => history.push('/siparis')}>ACIKTIM</button>
            </div>
            <div className='cards'>
            <img src="/images\iteration-2-images\icons\1.svg" alt="" />
            <span>YENİ! Kore</span>
            <img src="images\iteration-2-images\icons\2.svg" alt="" />
            <span>Pizza</span>
            <img src="images\iteration-2-images\icons\3.svg" alt="" />
            <span>Burger</span>
            <img src="images\iteration-2-images\icons\4.svg" alt="" />
            <span>Kızartmalar</span>
            <img src="images\iteration-2-images\icons\5.svg" alt="" />
            <span>Fast Food</span>
            <img src="images\iteration-2-images\icons\6.svg" alt="" />
            <span>Gazlı İçecek</span>
            </div>
        </section>


    );

}
export default Homepage;