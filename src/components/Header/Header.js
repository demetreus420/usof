import React from 'react';
import HeaderForm from './HeaderForm';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className='header-wrapper'>
        <HeaderForm postResult={this.props.setResult} />
      </header>
    );
  }
}
