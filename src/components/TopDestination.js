import React, { useEffect, useState } from 'react';
import SectionTitle from './Shared/SectionTitle';
import styles from './TopDestination.module.css';
import { TopDestinations } from './data';
const TopDestination = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <SectionTitle
                title='Top Destinations'
                subtitle='This is subtitle here'
                >
                </SectionTitle>
                <h5>View all Destination</h5>
            </div>
            <div className={styles.topdesContainer}>
                {
                    TopDestinations.map(destination => <>
                        <div className={styles.desItem}>
                            <img src={destination.img} alt="" />
                            <div className={styles.info}>
                                
                                <h2>{destination.name}</h2>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default TopDestination;