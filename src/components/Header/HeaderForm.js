import React from 'react';
import './HeaderForm.css';

let DEFAULT_QUERY = 'node';
let PATH_BASE = 'https://api.stackexchange.com';
let PATH_SEARCH = '/2.2/search?';
let PARAM_SEARCH = `order=desc&sort=votes&intitle=${DEFAULT_QUERY}&site=stackoverflow`;
let URL = `${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}`;

export default class HeaderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultQuery: DEFAULT_QUERY,
      path_base: PATH_BASE,
      path_search: PATH_SEARCH,
      param_search: PARAM_SEARCH,
      result: null,
      url: URL,
    };

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //   componentDidMount() {
  //       this.setState({url: `${this.state.path_base}${this.state.path_search}${this.state.param_search}`},() => { console.log('new state', this.state); });
  //   }

  setSearchTopStories(result) {
    this.setState({ result: result }, () => {
      //   console.log('new state', this.state);
    });
  }

  onSearchChange(event) {
    setTimeout(() => {
      this.setState(
        { defaultQuery: event.target.value },
        () => {
          let shit = this.state.defaultQuery;
          let PARAM = `order=desc&sort=votes&intitle=${shit}&site=stackoverflow`;
          let URL_NEW = `${this.state.path_base}${this.state.path_search}${PARAM}`;

          this.setState({
            param_search: PARAM,
            url: URL_NEW,
          });
        },
        () => {
          //   console.log('new state', this.state);
        }
      );
    }, 1000);
  }

  onDismiss() {}

  onSubmit(event) {
    if (this.state.defaultQuery === '') return;
    event.preventDefault();
    let shit = this.state.defaultQuery;
    let PARAM = `order=desc&sort=votes&intitle=${shit}&site=stackoverflow`;
    let URL_NEW = `${this.state.path_base}${this.state.path_search}${PARAM}`;

    this.setState(
      {
        param_search: PARAM,
        url: URL_NEW,
      },
      () => {
        // console.log('new state', this.state);
      }
    );

    fetch(this.state.url)
      .then((response) => response.json())
      .then((result) => this.setSearchTopStories(result))
      .catch((error) => error);

    setTimeout(() => this.props.postResult(this.state.result), 1000);
  }

  render() {
    return (
      <form className='form-container' onSubmit={this.onSubmit}>
        <input type='text' onChange={(event) => this.onSearchChange(event)} />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
