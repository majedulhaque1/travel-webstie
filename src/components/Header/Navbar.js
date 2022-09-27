import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../Asssets/images/logo.png';
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* left-nav */}
                <div className={styles.left_nav}>
                    <img src={logo} alt="" />
                </div>
                {/* center nav */}
                <div className={styles.center_nav}>
                    <ul>
                        <li><Link className={styles.active}>Home</Link></li>
                        <li><Link>Features</Link></li>
                        <li><Link>Page</Link></li>
                        <li><Link>Tour</Link></li>
                        <li><Link>Car</Link></li>
                        <li><Link>Hotel</Link></li>
                        <li><Link>Flight</Link></li>
                    </ul>
                </div>
                {/* right nav */}
                <div className={styles.right_nav}>
                    <FaSearch className={styles.icon}></FaSearch>
                </div>
            </div>
        </div>
    );
};

export default Navbar;