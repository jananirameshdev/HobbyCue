import styles from './Add.module.css';
function Add() {
    return (
        <div className={styles.add}>
            <div className={styles.box}>
                <div className={styles.to}>
                    <div className={styles.plus}>+</div>
                    <div className={styles.topic}>Add your own</div>
                </div>
                <div className={styles.content}>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</div>
                <button className={styles.button}>Add new</button>
            </div>
        </div >
    )
}

export default Add;