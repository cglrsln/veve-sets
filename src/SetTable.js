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
        const filteredSets = response.data.filter(item => item.collectibles)
        const convertedSets = filteredSets.map(item => {
          item.date = new Date(item.date)
          item.collectiblesCount = item.collectibles.length
          return item
        })
        const sortedSet = convertedSets.sort((a, b) => a.total - b.total)
        setSets(convertedSets)
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

    const formattedDate = item.date.toLocaleString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })

    return(
      <tr key={index}>
        <td>{item.season}</td>
        <td>{formattedDate}</td>
        <td>{item.name}</td>
        <td>{item.collectiblesCount}</td>
        <td>{formattedTotal}</td>
      </tr>
    )
  })

  function sortDropDate() {
    let order = (sortOrder === 'drop_date_asc') ? 'drop_date_desc' : 'drop_date_asc'
    let sortedSet = [...sets]

    if (order === 'drop_date_asc') {
      sortedSet = sortedSet.sort((a, b) => a.date.getTime() - b.date.getTime())
    }
    else if (order === 'drop_date_desc') {
      sortedSet = sortedSet.sort((a, b) => b.date.getTime() - a.date.getTime())
    }

    setSortOrder(order)
    setSets(sortedSet)
  }

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

  function sortCollectibles() {
    let order = (sortOrder === 'collectibles_asc') ? 'collectibles_desc' : 'collectibles_asc'
    let sortedSet = [...sets]

    if (order === 'collectibles_asc') {
      sortedSet = sortedSet.sort((a, b) => a.collectiblesCount - b.collectiblesCount)
    }
    else if (order === 'collectibles_desc') {
      sortedSet = sortedSet.sort( (a, b) => b.collectiblesCount - a.collectiblesCount)
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

  function sortSeason() {
    let order = (sortOrder === 'season_asc') ? 'season_desc' : 'season_asc'
    let sortedSet = [...sets]

    if (order === 'season_asc') {
      sortedSet = sortedSet.sort((a, b) => a.season - b.season)
    }
    else if (order === 'season_desc') {
      sortedSet = sortedSet.sort( (a, b) => b.season - a.season)
    }

    setSortOrder(order)
    setSets(sortedSet)
  }

  return(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={sortSeason}>Season</th>
          <th onClick={sortDropDate}>Drop Date</th>
          <th onClick={sortName}>Set</th>
          <th onClick={sortCollectibles}># of Collectibles</th>
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
