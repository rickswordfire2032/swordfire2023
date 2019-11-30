import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Components {
  constructor(){
    super();
    this.state = {
      pictures: []
    };
  }

  componentsDidMount(){
    fetch('https://api.flickr.com/services/rest/?method=flickrphotos.search&api_key='+process.env.e5abd6d7c8db8009a59ce85e5b61722e+'%tags=cats&per_page=10&page=1&format=json&nojsoncallback=1')
  .then(function(response){
    return response.json();
  })
  .then(function(j){
    let picArray = j.photos.photo.map((pic) => {
      var srcPath = 'http://farm'+pic.farm+'.staticflickr.com/'+pic.server+pic.id+'_'+pic.server+'/'+pic.secret+'.jpg';
      return(
        <img alt="dogs" src={srcPath}></img>
      )
    })
    this.setState({pictures: picArray});   
  }. bind(this))
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-tittle">WElcome to React</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

}

export default App;
