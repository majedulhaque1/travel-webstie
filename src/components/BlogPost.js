import React from 'react';
import styles from './BlogPost.module.css';
import SectionTitle from './Shared/SectionTitle';
import img from '../Asssets/images/Rectangle 22.png';
import { blogs } from './data';
const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <SectionTitle
                title='Recent Blog Post'
                subtitle='This is subtitle'
                >
                </SectionTitle>
            </div>
            <div className={styles.blogItems}>
                {
                    blogs.map(blog => <>
                <div className={styles.blogitem}>
                    <img src={img} alt="" />
                    <h6>Stream</h6>
                    <div className={styles.blogadmin}>
                        <img src={img} alt="" />
                        <h2>{blog.date_author}</h2>
                    </div>
                    <p>{blog.article}</p>
                </div>
                </>)
                }

            </div>
        </div>
    );
};

export default BlogPost;