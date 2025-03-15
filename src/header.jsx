import styles from './cs1.module.css';

const Head = () => {
    return (
        <div className={styles.header}>
            <div className={styles.icon}>
                <img src="./holy.jpeg" alt="Icon" />
            </div>
            <nav className={styles.navMenu}>
                <div className={styles.navItem}><p>Home</p></div>
                <div className={styles.navItem}><p>About</p></div>
                <div className={styles.navItem}><p>Colors</p></div>
                <div className={styles.navItem}><p>Objects</p></div>
            </nav>
        </div>
    );
};

export default Head;
