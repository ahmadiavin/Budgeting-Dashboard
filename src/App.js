import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import routes from './routes'
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
        <Footer/>

      </div>
    );
  }
 
}

export default App;
