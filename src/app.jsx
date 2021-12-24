
import {useState} from 'react';
import './app.css';
import Main from './components/main';
import MkList from './components/mklist';

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
        <>
        <Main
        Click={searching} 
        />
        <MkList 
        lists={list}
        />
        </>
    )
}

export default App;
