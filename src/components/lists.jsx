import React from 'react';

const Lists = ({list}) => {
         return(
             <div>
                <h4>{list.fcltyNm}</h4>
                <a>주소: {list.lnmadr}</a>
                <p>연락처: {list.cstmrCnterPhoneNumber}</p>
                <p>사용방법: {list.useRecovryMthDc}</p>
             </div>
         )
    };

export default Lists;