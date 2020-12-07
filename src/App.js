// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Faq from './component/Faq'

function App() {
  return (
    <Router>   
         <Switch> 
           <Route exact path='/' component={Home}/>
           <Route  path='/about' component={About} />
           <Route path='/faq' component={Faq} />
         </Switch>  
        
  </Router>
  );
}
export default App;
