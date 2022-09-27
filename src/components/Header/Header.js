import React from 'react';
import { FaArrowLeft, FaArrowRight, FaCircle } from 'react-icons/fa';
import styles from './Header.module.css'
import Navbar from './Navbar';
import TravelInfo from './TravelInfo';
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Navbar/>
                <section className={styles.hero}>
                    <div className={styles.h_left}>
                        <div className={styles.left_top}>
                        <FaCircle className={styles.icon_top}></FaCircle>
                        <h6>United States of America</h6>
                        </div>
                        <h1>Arizona</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora!</p>
                        <div className={styles.btns}>
                            <button className={styles.active}>Book Now</button>
                            <button>Choose Tour</button>
                        </div>
                    </div>
                    <div className={styles.h_right}>
                        <h2>Asia</h2>
                        <div className={styles.right_bottom}>
                        <FaArrowLeft className={styles.right_icon}></FaArrowLeft>
                        <FaArrowRight className={styles.right_icon}></FaArrowRight>
                        </div>
                    </div>
                </section>
                <TravelInfo/>
            </div>
        </div>
    );
};

export default Header;