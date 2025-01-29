import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Formdosyasi from './components/Form'; 
import Success from './components/success';
import Homepage from './components/homepage';

function App() {
  const [pizzaData, setPizzaData] = useState(null);
  const handleFormSubmit = (pizzaData) => {
    setPizzaData(pizzaData);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/siparis">
          <Formdosyasi onFormSubmit={handleFormSubmit} />  
        </Route>
        <Route path="/success">
          <Success pizzaData={pizzaData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
