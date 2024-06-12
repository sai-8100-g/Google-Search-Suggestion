import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.suggestionsList,
      searchInput: '',
    }
  }

  OnSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  OnSuggestItem = id => {
    const {list} = this.state
    const filteredItem = list.filter(eachObj => eachObj.id === id)

    this.setState({searchInput: filteredItem[0].suggestion})
  }

  render() {
    const {list, searchInput} = this.state
    const filteredList = list.filter(eachObj =>
      eachObj.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="google-suggestions-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-icon"
        />
        <div className="search-ul-container">
          <div className="search-input">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />

            <input
              type="search"
              onChange={this.OnSearchInput}
              value={searchInput}
              placeholder="Search Google"
            />
          </div>
          <div className="ul-container">
            <ul>
              {filteredList.map(eachObj => (
                <SuggestionItem
                  suggestionList={eachObj}
                  key={eachObj.id}
                  OnSuggestItem={this.OnSuggestItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
