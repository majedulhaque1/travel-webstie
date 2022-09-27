import React from 'react';
import SectionTitle from './Shared/SectionTitle';
import styles from './InterestingStories.module.css';
import { InterDestinations } from './data';
const InterestingStories = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <SectionTitle
                title='Interesting Stories'
                subtitle='This is an subtitle'
                >
                </SectionTitle>
            </div>
            <div className={styles.interdesContainer}>
                {
                    InterDestinations.map(destination => <>
                        <div className={styles.desItem}>
                            <img src={destination.img} alt="" />
                            <div className={styles.info}>
                                <img src={destination.img1} alt="" />
                                <h2>{destination.name}</h2>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default InterestingStories;