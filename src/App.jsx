  import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiparisFormu from './components/siparisformu';
import Success from './components/success';
import Homepage from './components/homepage';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/siparis" component={SiparisFormu} />
      <Route path="/success" component={Success} />
        
      </Switch>
    </Router>
  );
}

export default App;

