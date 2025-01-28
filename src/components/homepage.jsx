
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
        </section>


    );

}
export default Homepage;