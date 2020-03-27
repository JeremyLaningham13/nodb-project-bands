import React from 'react';
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
      <div className='background'>
      <h1 className='title'> favoritebands.fm</h1>
      </div>
        <nav className='btn-group'>
          <button class='button' onClick={() => this.setState({currentView: 'post'})} > Post Page</button>
          <button class='button' onClick={()=> this.setState({currentView: 'bands'})} >Band Page</button>
        </nav>
    {
      this.state.currentView === 'post'
      ?
      <PostFavoriteBands />
      :
      this.state.currentView === 'bands'
      ?
      <ViewFavoriteBands />
      :
      null
    }
     </div>
  );
}
}

export default App;
