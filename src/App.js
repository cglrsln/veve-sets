import './App.css';
import SetTable from './SetTable';

import { useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <Container>
      <Navbar bg="light" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">VeVe Sets</Navbar.Brand>
        </Container>
      </Navbar>
      <SetTable/>
    </Container>
  )
}

export default App;
