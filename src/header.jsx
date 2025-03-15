import styles from './cs1.module.css';

const Head = () => {
    return (
        <div className={styles.header}>
            <div className={styles.icon}>
                <img src="./holy.jpeg" alt="Icon" />
            </div>
            <nav className={styles.navMenu}>
                {["Home", "About", "Colors", "Objects"].map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </nav>
        </div>
    );
};

export default Head;
