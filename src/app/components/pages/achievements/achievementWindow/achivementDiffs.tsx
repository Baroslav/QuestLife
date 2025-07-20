"use client"
import { useState } from "react"
import styles from "./achievementWindw.module.css"


const diffs = ['legendary', 'mythicaly', 'epic', 'unique', 'default']

const AchievemetDiffs = () => {

    const [diffsOpen, setDiffsOpen] = useState<boolean>(false)
    const [selectedDiffs, setSelectedDiffs] = useState<number>()
    const [selectedDiffname , setSelectedDiffName] = useState<string>("default")

    const diffsClick = (index : number, item : string) => {
        if(selectedDiffs != index) {
            setSelectedDiffs(index)
            setSelectedDiffName(item)
        }
        console.log(selectedDiffname)
        console.log(styles[selectedDiffname])
    }


    return (
        <div className = {`${styles.achiveDiffs} ${styles[selectedDiffname]}`}>
            <div 
            className = {styles.diffsHeader}
            onClick={()=>setDiffsOpen(!diffsOpen)}
            >
                <p>{selectedDiffname != "" ?  selectedDiffname : "Difficult"}</p>
                <img src="./dropDown.svg" alt="" />
            </div>
            <div className = {diffsOpen ? `${styles.diffsItemsOpen}` : `${styles.diffsItems}`}>
                {
                    diffs.map((item , index) => (
                        <div 
                        key={item} 
                        className = {styles.diffsItem}
                        onClick = {() => diffsClick(index, item)}
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