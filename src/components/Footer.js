import React from 'react';
import styles from './Footer.module.css';
import {FaEnvelope,FaFacebookF,FaArrowDown, FaHome, FaPhoneAlt, FaInstagram, FaTwitter} from 'react-icons/fa';
import logo from '../Asssets/images/logo.png';
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerTop}>
                <div className={styles.left}>
                    <img src={logo} alt="" />
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, asperiores!</p>
                    <div className={styles.left_bottom}>
                        <div>
                            <FaPhoneAlt className={styles.icon}></FaPhoneAlt>
                            <p>+8801xxxxxxxx</p>
                        </div>
                        <div>
                            <FaEnvelope className={styles.icon}></FaEnvelope>
                            <p>example@email.com</p>
                        </div>
                        <div>
                            <FaHome className={styles.icon}></FaHome>
                            <p>Usman center, Uttara 12</p>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.leftTwo}>
                    <h2>Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <h2>Explore</h2>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className={styles.rightTwo}>
                    <h2>Newsletter</h2>
                    <input type="text" /><br />
                    <input type="submit" value='Submit' />
                </div>

            </div>
            <div className={styles.footerBottom}>
                <div className={styles.wrapper}>

                <h2><FaArrowDown></FaArrowDown></h2>
                <div className={styles.socialIcon}>
                    <FaFacebookF className={styles.icon}></FaFacebookF>
                    <FaTwitter className={styles.icon}></FaTwitter>
                    <FaInstagram className={styles.icon}></FaInstagram>
                </div>
                <p>copyright@2022</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;