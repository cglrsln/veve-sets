import './App.css';
import SetTable from './SetTable';

import { useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <Container>
      <Navbar className="navbar-dark bg-primary mb-3">
        <Container>
          <Navbar.Brand href="#home">
            <h3>VeVe Setlist</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <SetTable/>
      <p>Data provided by <a href="https://ecomiwiki.com/marketplace/floors">ECOMI WIKI</a></p>
    </Container>
  )
}

export default App;
