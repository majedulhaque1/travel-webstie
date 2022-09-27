import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Hotel from './Hotel';
import styles from './TravelInfo.module.css';
const TravelInfo = () => {
    return (
        <div className={styles.container}>
            <section className={styles.wrapper}>
                <div>
                    <button className={styles.active}>
                        <Link className={styles.active} to='/hotel'>Hotel</Link>
                    </button>
                    <button>
                        <Link to='flights'>Flights</Link>
                    </button>
                    <button>
                        <Link to='cars'>Cars</Link>
                    </button>
                    <button>
                        <Link to='packages'>Packages</Link>
                    </button>
                    <button>
                        <Link to='cruise'>Cruise</Link>
                    </button>
                    <button>
                        <Link to='holiday'>Holiday</Link>
                    </button>
                </div>
                <div className={styles.outlet}>
                {/* <Outlet/> */}
                <Hotel></Hotel>
                </div>
                
            </section>
        </div>
    );
};

export default TravelInfo;