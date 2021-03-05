import React, {Component} from 'react';
import '../assets/css/Footer.css';

class Footer extends Component{
  render(){

    return(

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>

    );
  }
}

export default Footer;