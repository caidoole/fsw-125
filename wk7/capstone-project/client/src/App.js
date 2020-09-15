import React from 'react';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import './StyleSheet.css'
import Home from './pages/Home'
import AddNewKiller from './pages/AddNewKiller'
import Killers from './pages/Killers'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/killers' component={Killers} />
        <Route path='/AddNewKiller' component={AddNewKiller} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
