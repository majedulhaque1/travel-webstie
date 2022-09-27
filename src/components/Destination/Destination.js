import React from 'react';
import styles from './Destination.module.css';
import SectionTitle from '../Shared/SectionTitle';
import { FaArrowLeft, FaArrowRight, FaCircle, FaIdBadge } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi';
import image from '../../Asssets/images/Rectangle 22.png';
import image2 from '../../Asssets/images/Rectangle 21.png';
import image1 from '../../Asssets/images/Vector 1.png';

const Destination = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <SectionTitle
                    title='Most Populars Tour'
                    subtitle='This is a sub title'
                    >
                </SectionTitle>
                <div className={styles.title_right}>
                    <h5>View All Tour</h5>
                    <FaArrowLeft className={styles.right_icon}></FaArrowLeft>
                    <FaArrowRight className={styles.right_icon}></FaArrowRight>
                </div>
            </div>
            <div className={styles.alldestinations}>
                <div className={styles.desItem}>
                    <img src={image} alt="" />
                    <div className={styles.desInfo}>
                        <div className={styles.desTop}>
                            <h3><FaCircle className={styles.desTopIcon}></FaCircle> Australia</h3>
                            <img src={image1} alt="" />
                        </div>
                        <div className={styles.desBottom}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                            <div className={styles.desBottomInfo}>
                                <h5><span>5</span>days | from <strong>$500</strong></h5>
                                <div className={styles.desRate}>
                                    <HiStar></HiStar>
                                    <HiStar></HiStar>
                                    <HiStar></HiStar>
                                    <HiStar></HiStar>
                                    <HiStar></HiStar>
                                </div>
                                <h5><span>3</span> Reviews</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.desItem}>
                    <img src={image2} alt="" />
                    <div className={styles.desInfo}>
                        <div className={styles.desTop}>
                            <h3><FaCircle className={styles.desTopIcon}></FaCircle> Australia</h3>
                            <img src={image1} alt="" />
                        </div>
                        <div className={styles.desBottom}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                            <div className={styles.desBottomInfo}>
                                <h5><span>5</span>days | from <strong>$500</strong></h5>
                                <div className={styles.desRate}>
                                    <HiStar></HiStar>
                                    <HiStar></HiStar>
                                    <HiStar></HiStar>
                                    <HiStar></HiStar>
                                    <HiStar></HiStar>
                                </div>
                                <h5><span>3</span> Reviews</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;