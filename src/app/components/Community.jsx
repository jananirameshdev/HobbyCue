import styles from './Community.module.css';
function Community() {
    return (
        <div>
            <div className={styles.community}>
                <div className={styles.hob}>
                    Your <span style={{ color: "#8064A2" }}>Hobby </span>, Your <span style={{ color: "#0096C8" }}>Community...</span>
                </div>
                <button className={styles.btn}>Get Started</button>
                <img src="https://i.ibb.co/dbJ8npW/Group-99.png" alt="Group-99" className={styles.image1} />
            </div>
        </div >
    )
}
export default Community;