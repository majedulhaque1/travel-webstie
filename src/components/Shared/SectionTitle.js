import React from 'react';
import styles from './SectionTitle.module.css';
const SectionTitle = ({title, subtitle}) => {
    console.log(title, subtitle);
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <h5>{subtitle}</h5>
        </div>
    );
};

export default SectionTitle;