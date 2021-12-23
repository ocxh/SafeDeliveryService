
import {useState} from 'react';
import './app.css';
import Lists from './components/lists';

function App({delivery}) {
    const [list, setlist] = useState([]);

    const searching = (city) => {
        delivery
        .Search(city)
        .then(result =>{
            setlist(result)
        });
    }

    return (
        <Lists 
        lists={list}
        Click={searching} 
        />
    )
}

export default App;
