"use client"
import { useState } from "react"
import styles from "./achievementWindw.module.css"


const diffs = ['legendary', 'mythicaly', 'epic', 'unique', 'default']

const AchievemetDiffs = () => {

    const [diffsOpen, setDiffsOpen] = useState<boolean>(false)
    const [selectedDiffs, setSelectedDiffs] = useState<number>()

    const diffsClick = (index : number) => {
        if(selectedDiffs != index) {
            setSelectedDiffs(index)
        }
        console.log(selectedDiffs)
    }


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
                    diffs.map((item , index) => (
                        <div 
                        key={item} 
                        className = {styles.diffsItem}
                        onClick = {() => diffsClick(index)}
                        >
                            <p className = {`${styles[item]} ${selectedDiffs == index ? styles.activeDiifs : ""}`}>{item}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AchievemetDiffs