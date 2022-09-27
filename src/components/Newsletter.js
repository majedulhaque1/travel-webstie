import React from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import styles from './Newsletter.module.css';
const Newsletter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>Newsletter</h2>
                <h5>Subtitle or something</h5>
            </div>
            <input placeholder='Description' type="text" />
            <input placeholder='Enter email' type="email" />
            <button><HiMail></HiMail></button>
        </div>
    );
};

export default Newsletter;