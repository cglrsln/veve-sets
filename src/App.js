//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect} from 'react';

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
    <div className="App">
      <table>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  )
}

export default App;
