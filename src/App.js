import React from 'react';
import './App.css';

const data = [{
  id: 1,
  name: "Ivel Z3",
  manufacturer: "Ivasim",
  year: 1969,
  origin: "Croatia"
},
{
  id: 2,
  name: "Bally Astrocade",
  manufacturer: "Bally Consumer Products",
  year: 1977,
  origin: "USA"
},
{
  id: 3,
  name: "Sord M200 Smart Home Computer",
  manufacturer: "Sord Computer Corporation",
  year: 1971,
  origin: "Japan"
},
{
  id: 4,
  name: "Commodore 64",
  manufacturer: "Commodore",
  year: 1982,
  origin: "USA"
}]



class Computer extends React.Component {
  renderComputer = (computer) => {
    return <option key={computer.id} value={computer.name}>{computer.name} ({computer.year})</option>
  }
  render() {
    return (
      <select>
        <option value="">-- pick a model --</option>
        {data.map(this.renderComputer)}
      </select>
    )

  }
};


class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Computer />
      </div>
    );
  }
}


export default App;
