import React from 'react';
import './SharedStyles.css';
import './SearchBar.css';

class SearchBar extends React.Component {

  state = {term: ''};

  onInputChange = (e) => {
    this.setState({term: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar shared-styles">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Video Search:
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }

}

export default SearchBar;