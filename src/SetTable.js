import axios from 'axios';
import { useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';

function SetTable() {
 const [sets, setSets] = useState([])

  useEffect(() => {
    let path = `https://cmar.github.io/veve-price-scraper/current.json`
    axios.get(path)
      .then(response => {
        setSets(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  })

  sets.sort((a, b) => {
    if (a.season < b.season) { return -1 }
    if (a.season > b.season) { return 1 }
    if (a.name < b.name) { return -1 }
    if (a.name > b.name) { return 1 }
    return b.total - a.total
  })

  const rows = sets.map((item, index) => {
    const formattedTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                            .format(item.total);

    return(
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.season}</td>
        <td>{item.collectibles.length}</td>
        <td>{formattedTotal}</td>
      </tr>
    )
  })

  return(
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
  )
}

export default SetTable
