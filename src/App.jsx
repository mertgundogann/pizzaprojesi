import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiparisFormu from './components/siparisformu'; // Form bileşeni
import Success from './components/success'; // Başarı bileşeni
import Homepage from './components/homepage'; // Anasayfa bileşeni
import { useState } from 'react';

function App() {
  const [pizzaData, setPizzaData] = useState(null); // Veriyi burada saklıyoruz

  return (
    <Router>
      <Switch>    
        <Route exact path="/" component={Homepage} />
        <Route 
          path="/siparis" 
          render={(props) => <SiparisFormu {...props} setPizzaData={setPizzaData} />} 
        />
        <Route path="/success" render={(props) => <Success {...props} pizzaData={pizzaData} />} />
      </Switch>
    </Router>
  );
}

export default App;
