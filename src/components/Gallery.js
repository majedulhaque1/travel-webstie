import React from 'react';
import styles from './Gallery.module.css';
import img from '../Asssets/images/mae-mu-_C5zsV_p-YI-unsplash 1.png';
import img1 from '../Asssets/images/adam-birkett-75EFpyXu3Wg-unsplash 1.png';
import img2 from '../Asssets/images/Rectangle 44.png';
import img3 from '../Asssets/images/Rectangle 45.png';
import img4 from '../Asssets/images/Rectangle 47.png';
const Gallery = () => {
    return (
        <div className={styles.container}>
            <img src={img} alt="" />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
    );
};

export default Gallery;