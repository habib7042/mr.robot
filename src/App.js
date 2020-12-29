import React, { Component } from 'react';
//Css link
import './App.css'
import './card.css'
//Component link
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()
        )
        .then(user => this.setState({robots: user}))
    }

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const filterrobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return(
                <h1 className='tc loading'>Loading..</h1>
            )
        } else {
            
        return (
            <div className='tc'>
                <h1 className='f1'>RobFriends</h1>
                <SearchBox searchChange = {this.onsearchChange} />
                <CardList robots ={filterrobots}/>
            </div> 
        );
        }

    }
}

export default App;