import React, { Component } from 'react';
import './App.css';

import Chips, { Chip } from 'react-chips';
import RecipeList from './components/RecipeList';

class App extends Component {
  state = {
    recipes : [],
    chips : [],
    error: null
  }
  onChange = (chips) => {
    this.setState ({chips}) ;
    //console.log(this.state.chips);
  }
  //making API Call
  getRecipe = async (e) => {
    e.preventDefault();
    let chipsData = "";
    for(let i=0;i<this.state.chips.length;i++)
      chipsData += this.state.chips[i] + ',';
    chipsData = chipsData.slice(0, -1);

    console.log(chipsData);
    const api = await fetch(`https://cors-anywhere.herokuapp.com/`+`http://www.recipepuppy.com/api/?i=${chipsData}`);
    const data = await api.json();
    this.setState({recipes: data.results});
    console.log(data);
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Chips
            value={this.state.chips}
            onChange={this.onChange}
            />
        <button onClick={this.getRecipe} className="form__button"><img src="../res/search-icon.png"/>  Search</button>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;