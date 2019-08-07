import React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav'
import routes from './routes'
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: {}
    }
    this.updateUser = this.updateUser.bind(this);
  }
  updateUser(user) {
    this.setState({
      user
    })
  }
  render() {
    const {user} = this.state;
    return (
      <div className="App">
        <Nav user={user} updateUser={this.updateUser} />
        {routes}
        <Footer/>

      </div>
    );
  }
 
}

export default App;
