import React, { Component } from 'react';
import './card.css'
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : robots,
            searchfield : ''
        }
    }

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const filterrobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className='tc'>
                <h1>RobFriends</h1>
                <SearchBox searchChange = {this.onsearchChange} />
                <CardList robots ={filterrobots}/>
            </div> 
        );
    }
}

export default App;