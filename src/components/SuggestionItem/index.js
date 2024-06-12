import './index.css'

const SuggestionItem = props => {
  const {suggestionList, OnSuggestItem} = props
  const {suggestion, id} = suggestionList

  const suggestRequest = () => {
    OnSuggestItem(id)
  }

  return (
    <li className="list-items">
      <p className="suggest-para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-img"
        onClick={suggestRequest}
      />
    </li>
  )
}

export default SuggestionItem
