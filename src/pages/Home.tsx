import { Component } from 'react';
import SearchBar from '../components/SearchBar';

import BookData from "./Data.json";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        HOLA
        <SearchBar placeholder = "Hola que hace" data={BookData}/>
      </div>
    );
  }
}
