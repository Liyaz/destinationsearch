// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bgCont">
        <div className="cardCont">
          <h1 className="head">Destination Search</h1>
          <div className="search">
            <input
              type="search"
              placeholder="Search"
              className="input"
              value={searchInput}
              onChange={this.onSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="ime"
              alt="search icon"
            />
          </div>
          <ul className="unis">
            {searchResults.map(each => (
              <DestinationItem destinationItem={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
