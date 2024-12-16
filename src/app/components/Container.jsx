import React from "react";
import styles from "./Container.module.css";

const Container = () => {
    return (
        <div className={styles.container}>
            <div className="lef">
                <div className={styles.heading}>
                    Explore your{" "}
                    <span style={{ color: "#0096C8" }}> hobby </span> or{" "}
                    <span style={{ color: "#8064A2" }}> passion </span>
                </div>
                <div className={styles.subHeading}>
                    Sign-in to interact with a community of fellow hobbyists and an
                    eco-system of experts, teachers, suppliers, classes, workshops, and
                    places to practice, participate or perform. Your hobby may be about
                    visual or performing arts, sports, games, gardening, model making,
                    cooking, indoor or outdoor activities…
                </div>
                <div className={styles.expertInfo}>
                    If you are an expert or a seller, you can Add your Listing and promote
                    yourself, your students, products, services or events. Hop on your
                    hobbyhorse and enjoy the ride.
                </div>
                <div className="vector">
                    <img
                        src="https://i.ibb.co/F0mqyy9/Group-27.png"
                        alt="Group-27"
                        className="image1"
                        style={{
                            marginLeft: "150px",
                            marginTop: "106px",
                            height: "216px",
                        }}
                    />
                </div>
            </div>
            <div className={styles.righ} style={{ marginTop: "90px" }}>
                <div className={styles.tabs}>
                    <button className={`${styles.tab} ${styles.active}`}>Sign In</button>
                    <button className={styles.tab}>Join In</button>
                </div>
                <button className={styles.socialButton}>
                    <img
                        src="https://www.google.com/favicon.ico"
                        alt="Google"
                        className={styles.icon}
                        style={{ marginRight: "30px" }}
                    />
                    Continue with Google
                </button>
                <button className={styles.socialButton}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                        alt="Facebook"
                        className={styles.icon}
                        style={{ marginRight: "10px" }}
                    />
                    Continue with Facebook
                </button>
                <div className={styles.divider}>Or connect with</div>
                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        placeholder="Email"
                        className={styles.input}
                    />
                    <div className={styles.passwordWrapper}>
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                        />
                        <span className={styles.eyeIcon}>👁️</span>
                    </div>
                </div>
                <div className={styles.options}>
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#" className={styles.forgotPassword}>
                        Forgot password?
                    </a>
                </div>
                <button className={styles.submitButton}>Continue</button>
            </div>
        </div>
    );
};

export default Container;
