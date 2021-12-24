import React from 'react';
import Lists from './lists';

const MkList = ({lists}) => (
    <ul>
        {lists.items&&lists.items.map(list => (
            <Lists list={list} />
        ))}
    </ul>
);

export default MkList;