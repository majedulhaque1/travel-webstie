import React from 'react';
import { HiStar } from 'react-icons/hi';
import styles from './Review.module.css';
import image from '../Asssets/images/Rectangle 21.png';
import { Reviews } from './data';
const Review = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>Testimonials and Review</h3>
                <h2>What They're saying</h2>
            </div>
            <div className={styles.wrapper}>
                {
                    Reviews.map(review => <>
                    <div className={styles.reviewItem}>
                    <img src={review.img} alt="" />
                    <article className={styles.article}>
                        <div className={styles.rateIcon}>
                            <HiStar></HiStar>
                            <HiStar></HiStar>
                            <HiStar></HiStar>
                            <HiStar></HiStar>
                            <HiStar></HiStar>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae pariatur porro sapiente dolorem, ea praesentium aliquam expedita! Ipsa, vitae expedita.</p>
                        <div>
                            <h2>{review.name1}</h2>
                            <h4>{review.name2}</h4>
                        </div>
                    </article>
                    </div>
                </>)
                }
            </div>
        </div>
    );
};

export default Review;