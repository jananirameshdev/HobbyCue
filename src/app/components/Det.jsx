"use client";

import React, { useState } from "react";
import styles from "./Det.module.css";
import pppp from "./pppp";

function Det() {
    return (
        <div className={styles.detail}>
            {pppp.map((pro, index) => {
                const [isHovered, setIsHovered] = useState(false);

                return (
                    <div
                        key={index}
                        className={`${styles.box} ${styles[`box${index}`]}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className={styles.top}>
                            <img
                                src={isHovered ? pro.hoverImage : pro.image}
                                alt={pro.topic}
                                className={styles.image}
                            />
                            <div className={styles.topic}>{pro.topic}</div>
                        </div>
                        <div className={styles.content}>{pro.content}</div>
                        <button className={styles.but}>{pro.btnContent}</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Det;
