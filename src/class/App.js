import React, { Component } from 'react';
//Css link
import './App.css'
import '../components/card.css'
//Component link
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

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
        const {robots, searchfield} = this.state;

        const filterrobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
                <h1 className='tc loading'>Loading..</h1> :
                (
            <div className='tc'>
                <h1 className='f2'>RobFriends</h1>
                <SearchBox searchChange = {this.onsearchChange} />
                <Scroll>
                    <CardList robots ={filterrobots}/>
                </Scroll>
            </div> 
        )
        }

    }


export default App;