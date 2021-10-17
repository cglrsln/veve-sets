//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function App() {
  const [sets, setSets] = useState([])

  useEffect(() => {
    let path = `current.json`
    axios.get(path)
      .then(response => {
        setSets(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  })


  sets.sort((a, b) => b.total - a.total)

  const rows = sets.map((item, index) => {
    return(
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.season}</td>
        <td>{item.collectibles.length}</td>
        <td>${item.total.toFixed(2)}</td>
      </tr>
    )
  })

  return (
    <Container className="p-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Set</th>
            <th>Season</th>
            <th># of Collectibles</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </Container>
  )
}

export default App;
