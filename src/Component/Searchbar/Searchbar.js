import React, {Component} from 'react';
import style from './Searchbar.module.css';
const INITIAL_STATE = {
  searchQuery: '',
};
class Searchbar extends Component {
  state = {
    ...INITIAL_STATE,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSearchQuery(this.state.searchQuery);
    this.removeInput();
  };
  handleInputSearch = (event) => {
    const {value} = event.target;
    this.setState({searchQuery: value});
  };
  removeInput = () => {
    this.setState({...INITIAL_STATE});
  };
  render() {
    const {searchQuery} = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={style.form}>
          <article>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies..."
              onChange={this.handleInputSearch}
              value={searchQuery}
              className={style.input}
            />
            <button type="submit" className={style.button}>
              Search
            </button>
          </article>
        </form>
      </>
    );
  }
}

export default Searchbar;
