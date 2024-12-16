import React from 'react';
import styles from './Testimonials.module.css';

function Testimonials() {
    return (
        <div className={styles.testimonialContainer}>
            <div className={styles.testimonialBox}>
                <div className={styles.quote}>
                    <span className={styles.quoteIcon}>“</span>
                    <span className={styles.heading}>Testimonial</span>
                    <br />
                    <span className={styles.testimonialText}>
                        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                    </span>
                </div>
                <div className={styles.com}>
                    <div className={styles.audioPlayer}>
                    </div>
                    <div className={styles.audioPlayerLine}></div>


                    <div className={styles.circle}></div>
                    <svg width="13" height="15" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: "43px", marginLeft: "-25px" }}>
                        <path d="M0 1.82001V12.18C0 12.97 0.87 13.45 1.54 13.02L9.68 7.84001C10.3 7.45001 10.3 6.55001 9.68 6.15001L1.54 0.980008C0.87 0.550008 0 1.03001 0 1.82001Z" fill="#8064A2" />
                    </svg>

                    <div className={styles.time}>0.00
                        <div className={styles.userImage}>
                            <img src="https://i.ibb.co/F0mqyy9/Group-27.png" alt="User" style={{ marginLeft: "60px", marginTop: "-30px" }} />
                        </div>
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.userImage}>
                            <img src="https://i.ibb.co/F0mqyy9/Group-27.png" alt="User" />
                        </div>
                        <div className={styles.userName}>
                            <span>Shubha Nagarajan</span>
                            <span className={styles.userRole}>Classical Dancer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
