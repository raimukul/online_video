// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
    <Router>   
         <Switch> <Route exact path='/' component={Home}/> </Switch>
         <Switch><Route  path='/about' component={About} /></Switch>  
         {/* <Switch><Route  path='/college' component={College} /></Switch>  
         <Switch> <Route  path='/news' component={News} /> </Switch>  
         <Switch>  <Route  path='/contact' component={Contact} />   </Switch>  
         <Switch>  <Route  path='/pricing'  component={Pricing} />  </Switch>  */}
  </Router>
  );
}
export default App;
