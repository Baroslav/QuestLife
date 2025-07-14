"use client"
import { useState } from "react"
import styles from "./achievementWindw.module.css"


const diffs = ['legendary', 'mythicaly', 'epic', 'unique', 'default']

const AchievemetDiffs = () => {

    const [diffsOpen, setDiffsOpen] = useState<boolean>(false)


    return (
        <div className = {styles.achiveDiffs}>
            <div 
            className = {styles.diffsHeader}
            onClick={()=>setDiffsOpen(!diffsOpen)}
            >
                <p>Achievemet dificult</p>
                <img src="./dropDown.svg" alt="" />
            </div>
            <div className = {diffsOpen ? `${styles.diffsItemsOpen}` : `${styles.diffsItems}`}>
                {
                    diffs.map((item) => (
                        <div key={item} className = {styles.diffsItem}>
                            <p>{item}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AchievemetDiffs