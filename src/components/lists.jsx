import React from 'react';
import styles from './lists.module.css'

const Lists = ({list}) => {
         return(
             <div className={styles.block}>
                <h4 className={styles.name}>{list.fcltyNm}</h4>
                <a className={styles.addr1}>주소</a>
                <a className={styles.addr2} href={`https://map.naver.com/v5/search/${list.lnmadr}`}>
                {list.lnmadr}
                </a>
                <p className={styles.number}>연락처: {list.cstmrCnterPhoneNumber}</p>
                <p className={styles.use1}>사용방법</p>
                <p className={styles.use2}>{list.useRecovryMthDc}</p>
             </div>
         )
    };

export default Lists;