import styles from './cs1.module.css';

function Body() {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Happy Holi...❤️</h1>

            {/* Video Section */}
            <div className={styles.videoContainer}>
                <video 
                    id="video1" 
                    src="./holy1.mp4" 
                    controls 
                    autoPlay 
                    loop 
                    muted 
                    className={styles.video}
                />
            </div>

            {/* Holi Festival Description */}
            <div className={styles.desc}>
                <h2 className={styles.subTitle}>Festival of Colors & Joy</h2>
                <p className={styles.text}>
                    Holi is an ancient Hindu festival that celebrates the arrival of spring, love, and new beginnings. 
                    People gather to throw vibrant colors, dance to joyful music, and enjoy festive delicacies.  
                    The festival symbolizes the victory of good over evil and the end of winter blues.  
                </p>
                <p className={styles.text}>
                    Traditionally, Holi begins with a bonfire called Holika Dahan, followed by a day of playing with colors, known as Rangwali Holi. 
                    It is a time for unity, friendship, and spreading happiness.  
                </p>
            </div>

            {/* Color Palette Section */}
            <div className={styles.colorSection}>
                <h2 className={styles.subTitle}>Colors of Holi</h2>
                <div className={styles.colorContainer}>
                    {["red", "blue", "green", "orange", "black", "gray", "white"].map(color => (
                        <div key={color} className={styles[color]}></div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>Holi is not just about colors, it's about spreading love, laughter, and positivity! 🎨✨</p>
            </footer>
        </div>
    );
}

export default Body;
