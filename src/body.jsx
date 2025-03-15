import styles from './cs1.module.css';

function Body() {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Happy Holi...❤️</h1>

            <div className={styles.videoContainer} >

                <video 
                   
                    src="./holy1.mp4" 
                    controls 
                    autoPlay 
                    loop 
                    muted 
                    className={styles.video}
                />
            </div>

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

            <div className={styles.colorSection}>
                <div className={styles.colorContainer}>
                    {["red", "blue", "green", "orange", "black", "gray", "white"].map(color => (
                        <div key={color} className={styles[color]}>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Body;
