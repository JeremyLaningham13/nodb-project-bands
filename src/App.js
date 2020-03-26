import React from 'react';
//import logo from './logo.svg';
import './App.css';

//Components here
import PostFavoriteBands from './Components/PostFavoriteBands'
import ViewFavoriteBands from './Components/ViewFavoriteBands'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentView: ''
    }
  }

  render() {

  return (
    <div className="App">
      <h1>Favorite Bands</h1>
      <div>
        <button onClick={() => this.state({currentView: 'post'})} >Post Page</button>
        <button onClick={()=> this.state({currentView: 'bands'})} >Band Page</button>
      </div>
      <PostFavoriteBands />
      <ViewFavoriteBands />
    </div>
  );
}
}

export default App;
