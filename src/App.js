import React, { Component } from 'react';
import './App.css';
import Youtube from 'react-youtube';

class App extends Component {
  render() {

    const opts = {
      playerVars: {
        autoplay: 0,
        color: 'white',
        rel: 0,
      }
    }
    return (
      <div className="App">
        <p className="App-intro">
          <Youtube
            videoId="1FJD7jZqZEk"
            opts={opts}
          />
        </p>
      </div>
    );
  }
}

export default App;
