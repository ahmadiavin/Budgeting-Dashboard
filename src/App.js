import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
