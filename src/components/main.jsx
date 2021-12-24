import React,{useRef} from 'react';


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
        <input ref={inputRef} type="serch" onKeyPress={handleSearch}></input>
        </>

    ) 
    };

export default Main;