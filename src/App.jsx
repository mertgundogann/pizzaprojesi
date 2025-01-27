  import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiparisFormu from './components/siparisformu';

import Homepage from './components/homepage';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/siparis" component={SiparisFormu} />
        
      </Switch>
    </Router>
  );
}

export default App;

