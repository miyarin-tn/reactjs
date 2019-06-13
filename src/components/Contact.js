import React from 'react';
import { Prompt, Link } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
          <Link to="/" exac>Back to Home</Link>
          <Prompt
            when={true}
            message={'Are you sure you want to leave?'}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
