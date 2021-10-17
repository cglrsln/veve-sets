import axios from 'axios';
import { useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';

function SetTable() {
  const [sets, setSets] = useState([])
  const [sortOrder, setSortOrder] = useState('')

  useEffect(() => {
    console.log("fetching data")
    let path = `https://cmar.github.io/veve-price-scraper/current.json`
    axios.get(path)
      .then(response => {
        setSets(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  // sets.sort((a, b) => {
  //   if (a.season < b.season) { return -1 }
  //   if (a.season > b.season) { return 1 }
  //   if (a.name < b.name) { return -1 }
  //   if (a.name > b.name) { return 1 }
  //   return b.total - a.total
  // })

  const rows = sets.map((item, index) => {
    const formattedTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                            .format(item.total);

    return(
      <tr key={index}>
        <td>{item.season}</td>
        <td>{item.name}</td>
        <td>{item.collectibles.length}</td>
        <td>{formattedTotal}</td>
      </tr>
    )
  })

  function sortName() {
    let order = (sortOrder === 'name_asc') ? 'name_desc' : 'name_asc'
    let sortedSet = [...sets]

    if (order === 'name_asc') {
      sortedSet = sortedSet.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (order === 'name_desc') {
      sortedSet = sortedSet.sort((a, b) => b.name.localeCompare(a.name))
    }

    setSortOrder(order)
    setSets(sortedSet)
  }

  function sortPrice() {
    let order = (sortOrder === 'price_asc') ? 'price_desc' : 'price_asc'
    let sortedSet = [...sets]

    if (order === 'price_asc') {
      sortedSet = sortedSet.sort((a, b) => a.total - b.total)
    }
    else if (order === 'price_desc') {
      sortedSet = sortedSet.sort( (a, b) => b.total - a.total)
    }

    setSortOrder(order)
    setSets(sortedSet)
  }

  return(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Season</th>
          <th onClick={sortName}>Set</th>
          <th># of Collectibles</th>
          <th onClick={sortPrice}>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}

export default SetTable
