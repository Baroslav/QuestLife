import DefBtn from "../ui/defBtn/defBtn"
import AboutItem from "./aboutitem"
import styles from "./headerContetn.module.css"

const MainContet = () => {
    return (
        <main className={styles.main}>
            <img className={styles.mainImg} src="./swordAndShield.svg" alt="" />
            <h1>Welcome, brave Adventurer!</h1>
            <div className={styles.mainContent}>
               <div>
                    <div className = {styles.aboutHeader}>
                        <h2>Time to go on a great adventure!</h2>
                        <p className = {styles.subtitles}>Many quests, challenges, and victories await you on your journey, adventurer! And our app shall be your steadfast guide through this grand adventure!</p>
                    </div>
                    <div className={styles.about}>
                            <AboutItem img={"quest.png"} header = {"Quest"} content="    Forge Your Adventure Map!  From simple daily challenges to legendary missions—every step brings you closer to your glory! "/>
                            <AboutItem img={"mythical.png"} header = {"Achivments"} content="    Mark Your Great Deeds! Collect trophies, celebrate your triumphs, and become the hero of your own legend! "/>
                            <AboutItem img={"openBook.png"} header = {"Statistics"} content="       Track Your Feats!  Count your victories, follow your progress, and watch as your legend grows!  "/>
                    </div>
               </div>

               <div className = {styles.callToAction}>
                    <img src="swordBook.png" alt="" />
                    <p>Hero, onward to glory!  Your adventure begins now, and with every quest, every achievement, you grow stronger. Set forth on your journey—conquer the heights, achieve the impossible, and leave your mark upon the world! </p>
                    <DefBtn content={"Start your advanture"}/>
               </div>
            </div>
        </main>
    )
}


export default MainContet