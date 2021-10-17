import './App.css';
import SetTable from './SetTable';
import { useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container className="p-3">
      <SetTable/>
    </Container>
  )
}

export default App;
