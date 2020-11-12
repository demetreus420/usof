import React from 'react';
import './Main.css';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <h2>Result</h2>
        <ul className={this.props.result ? 'result-list' : ''}>
            {/* {console.log(this.props.result)} */}
          {this.props.result !== null && this.props.result.items !== undefined
            ? this.props.result.items.map((itm) => {
                return (
                  <li className='result-list__elem' key={itm.question_id}>
                    <img
                      className='icon'
                      src={itm.owner.profile_image}
                      alt='shit'
                    ></img>
                    <span className="owner-name">{itm.owner.display_name}:</span><span className="question">{itm.title}</span>
                  </li>
                );
              })
            : ''}
        </ul>
      </main>
    );
  }
}
