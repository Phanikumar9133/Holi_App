import styles from './cs1.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>About Holi</h3>
                    <p>
                        Holi, the festival of colors, marks the arrival of spring and the victory of good over evil. 
                        It is celebrated with joyous gatherings, music, and vibrant color play. Let’s spread love and happiness! 
                    </p>
                </div>

                <div className={styles.footerSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Colors</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Contact Us</h3>
                    <p>Email: contact@phani9133@gmail.com</p>
                    <p>Phone: +91 9133760528</p>
                    <p>Location: India</p>
                </div>

                <div className={styles.footerSection}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <p className={styles.icon}><i className="fab fa-facebook"></i></p>
                        <p className={styles.icon}><i className="fab fa-instagram"></i></p>
                        <p  className={styles.icon}><i className="fab fa-twitter"></i></p>
                        <p className={styles.icon}><i className="fab fa-youtube"></i></p>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>©  Holi Festival | All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
 