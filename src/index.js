import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
const API_KEY = 'AIzaSyDkx3SsRxZO4t2lQOrWwMBKShA0inux0pA';


class App extends Component{
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, videos => { this.setState({ videos })}); //before ES6 -> this.setState({ videos: videos })
    }

    render(){
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('.container'));