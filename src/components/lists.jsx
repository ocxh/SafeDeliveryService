import React from 'react';

const Lists = ({lists, Click}) => {
        return(
            <>
            {console.log(lists)}
            <input type="button" onClick={Click}/>
            </>
        ) 
    };

export default Lists;