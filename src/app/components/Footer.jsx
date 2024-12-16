import React from 'react';
import styles from './Footer.module.css';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* Hobbycue Section */}
                <div className={styles.section}>
                    <h4>Hobbycue</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Work with Us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* How Do I Section */}
                <div className={styles.section}>
                    <h4>How Do I</h4>
                    <ul>
                        <li>Sign Up</li>
                        <li>Add a Listing</li>
                        <li>Claim Listing</li>
                        <li>Post a Query</li>
                        <li>Other Queries</li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className={styles.section}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Listings</li>
                        <li>Blog Posts</li>
                        <li>Shop / Store</li>
                        <li>Community</li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className={styles.section}>
                    <h4>Social Media</h4>
                    <div className={styles.socialIcons}>
                        <TiSocialFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaGooglePlusG />
                        <FaYoutube />
                        <FaTelegramPlane />
                        <MdEmail />
                    </div>
                </div>

                {/* Invite Friends Section */}
                <div className={styles.section}>
                    <h4 style={{ marginLeft: "950px" }}>Invite Friends</h4>
                    <div className={styles.inviteForm}>
                        <input type="email" placeholder="Email ID" className={styles.emailInput} />
                        <button className={styles.inviteButton}>Invite</button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <p>&copy; Purple Cues Private Limited</p>
            </div>
        </footer>
    );
};

export default Footer;
