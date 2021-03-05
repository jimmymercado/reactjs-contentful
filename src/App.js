import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Blog from './components/Blog';
import Article from './components/Article';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './assets/css/cssbox.css';


class App extends Component{

  render(){
    return(
      <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blogs" component={Blog} />
        <Route exact path="/blogs/:slug" component={Article} />
        <Route exact path="/contact" component={Contact} />
        <Footer/>
      </div>
      </Router>
    )
  }
}



export default App;