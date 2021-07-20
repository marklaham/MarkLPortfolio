import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; 
import PortfolioContainer from "./components/PortfolioContainer";

class App extends Component {
    render() {
      return (
        <div>
          <Header />
          <PortfolioContainer />
          <Footer />
          
        </div>
      );
    }
  }

export default App;
