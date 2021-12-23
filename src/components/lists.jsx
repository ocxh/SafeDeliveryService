import React,{useRef} from 'react';

const Lists = ({lists, Click}) => {
        const inputRef = useRef();
        const handleSearch = (event) =>{
            if(event.key === "Enter"){
                const search_value = inputRef.current.value;
                Click(search_value);
            }

        }
        return(
            <>
            {console.log(lists)}
            <input type="button" onClick={Click}/>
            <input ref={inputRef} type="serch" onKeyPress={handleSearch}></input>
            </>

        ) 
    };

export default Lists;