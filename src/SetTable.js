import axios from 'axios';
import { useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import SortIcon from './SortIcon';

function SetTable() {
  const [sets, setSets] = useState([])
  const [sortConfig, setSortConfig] = useState({
    field: 'total',
    direction: 'ascending'
  })

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
        setSortConfig({ key: 'total', direction: 'ascending' });
        setSets(convertedSets)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  function compareNumberFn(key, direction) {
    if (direction === 'ascending') {
      return (a, b) => a[key] - b[key]
    } else {
      return (a, b) => b[key] - a[key]
    }
  }

  function compareStringFn(key, direction) {
    if (direction === 'ascending') {
      return (a, b) => a[key].localeCompare(b[key])
    } else {
      return (a, b) => b[key].localeCompare(a[key])
    }
  }

  function compareDateFn(key, direction) {
    if (direction === 'ascending') {
      return (a, b) => a[key].getTime() - b[key].getTime()
    } else {
      return (a, b) => b[key].getTime() - a[key].getTime()
    }
  }

  function sortField(key, compareFn = compareNumberFn) {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    let sortedSet = [...sets]
    sortedSet.sort(compareFn(key, direction))

    setSortConfig({ key, direction });
    setSets(sortedSet)
  }

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

  return(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={(e) => sortField('season')}>Season<SortIcon sortConfig={sortConfig} field='season'/></th>
          <th onClick={(e) => sortField('date', compareDateFn)}>Drop Date<SortIcon sortConfig={sortConfig} field='date'/></th>
          <th onClick={(e) => sortField('name', compareStringFn)}>Set<SortIcon sortConfig={sortConfig} field='name'/></th>
          <th onClick={(e) => sortField('collectiblesCount')}># of Collectibles<SortIcon sortConfig={sortConfig} field='collectiblesCount' /></th>
          <th onClick={(e) => sortField('total')}>Price<SortIcon sortConfig={sortConfig} field='total'/></th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}

export default SetTable
