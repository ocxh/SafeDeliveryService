import React,{useRef} from 'react';
import styles from './main.module.css';

const Main = ({Click}) => {
    const inputRef = useRef();
    const handleSearch = (event) =>{
        if(event.key === "Enter"){
            const search_value = inputRef.current.value;
            Click(search_value);
        }

    }
    return(
        <>
        <div className={styles.head}>
            <input className={styles.searchBar} ref={inputRef} type="serch" onKeyPress={handleSearch}></input>
        </div>
        </>
    ) 
    };

export default Main;