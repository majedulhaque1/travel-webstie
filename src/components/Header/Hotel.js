import React from 'react';
import styles from './Hotel.module.css';
import {FaMapMarkerAlt} from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
const Hotel = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form} action="">
                <div className={styles.input_group}>
                    <label htmlFor=""><span><FaMapMarkerAlt></FaMapMarkerAlt></span> Going To</label><br />
                    <input type="text" placeholder='Location here' />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor=""><span><HiUserAdd></HiUserAdd></span> Check In</label><br />
                    <input type="date" />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor=""><span><HiUserAdd></HiUserAdd></span> Check Out</label><br />
                    <input type="date" />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor=""><span><HiUserAdd></HiUserAdd></span> Travelers</label><br />
                    <input type="date" />
                </div>
                <div className={styles.input_group}>
                    <input type="submit" value='Search' />
                </div>
                    
            </form>
        </div>
    );
};

export default Hotel;