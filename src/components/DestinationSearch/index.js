import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchinput: ''}

  onchange = event => {
    this.setState({
      searchinput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchinput} = this.state

    const result = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchinput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="search">
          <input
            type="search"
            value={searchinput}
            onChange={this.onchange}
            className="input"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="img-search"
          />
        </div>
        <ul className="list-container">
          {result.map(eachitem => (
            <DestinationItem
              key={eachitem.id}
              name={eachitem.name}
              URL={eachitem.imgUrl}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
