import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  searchHandle = (event) => {
    // console.log(event.target.value);
    this.props.onSearch(event);
  };

  render() {
    const { searchText } = this.props;
    return (
      <div className="form-container">
        <form className="form-wrapper">
          <input
            type="text"
            id="search"
            value={searchText}
            placeholder="Search for..."
            onChange={this.searchHandle}
          />
        </form>
      </div>
    );
  }
}

// const SearchBar = ({ onSearch, searchText }) => {

//   return (

//   );
// };

export default SearchBar;
