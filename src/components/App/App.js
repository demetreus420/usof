import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };

    this.setResult = this.setResult.bind(this);
  }

  setResult(result) {
    console.log(result);
    this.setState({ result });
  }

  render() {
    return (
      <div className='app-wrapper'>
        <Header setResult={this.setResult}/>
        <Main result={this.state.result}/>
        <Footer />
      </div>
    );
  }
}
