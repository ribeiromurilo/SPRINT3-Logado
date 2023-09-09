import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CadastroBike from './components/pages/CadastroBike';
import Vistoria from './components/pages/Vistoria';
import Entrar from './components/pages/Entrar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route>
          <Route path='/' exact component={Home} />
          <Route path='/cadastro-bike' component={CadastroBike} />
          <Route path='/vistoria' component={Vistoria} />
          <Route path='/entrar' component={Entrar} />
        </Route>
      </Router>
    </>
  );
}

export default App;
