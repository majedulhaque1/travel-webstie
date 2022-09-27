import React from 'react';
import styles from './Ourpartner.module.css';
import img1 from '../Asssets/images/Our Partners.png';
import img2 from '../Asssets/images/image 3.png';
import img3 from '../Asssets/images/image 4.png';
import img4 from '../Asssets/images/image 5.png';
const OurPartner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default OurPartner;