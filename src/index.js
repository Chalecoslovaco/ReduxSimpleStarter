import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyDkx3SsRxZO4t2lQOrWwMBKShA0inux0pA';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('.container'));