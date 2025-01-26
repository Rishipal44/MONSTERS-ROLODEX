import { Component } from "react";
import { SearchBox } from "./components/searchBox/SearchBox";
import { CardList } from "./components/card-list/Card-list";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      serachField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({serachField: e.target.value});
  }

  render() {

    const {monsters, serachField} = this.state;

    const filteredMonsters = monsters.filter((monster)=> 
      monster.name.toLowerCase().includes(serachField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters" 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;