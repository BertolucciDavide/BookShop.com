import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

import HomeScreen from "./screens/HomeScreen"; 
import SearchScreen from "./screens/SearchScreen";
import ProductScreen from "./screens/BookScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app">

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>

      <Footer/>
    </Router>
  );
}

export default App;
