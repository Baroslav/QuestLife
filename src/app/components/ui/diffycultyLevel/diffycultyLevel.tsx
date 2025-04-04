import React from "react"
import DifficultyItem from "./diffycultyItem"
import styles from "./index.module.css"

type Level = { dificult : string ; color : string}

const dificultLevel:Level[] = [
    {dificult : "Legendary" , color : "249, 228, 0"},
    {dificult : "Mythical" , color : "92, 3, 224"},
    {dificult : "Epic" , color : "157, 45, 45"},
    {dificult : "Unique" , color : "35, 176, 40"},
    {dificult : "Default" , color : "222, 222, 222"},
]

const DifficultyLevel = () => {

    return (
        <div className={styles.dificultGroup}>
            <span className={styles.dificultHeader}>
                Achievemet dificult 
                <span className={styles.arrow}></span>
            </span>
            <div className={styles.dificultLevel}>
                {dificultLevel.map((item)=> (
                    <DifficultyItem text = {item.dificult} color={item.color}/>
                ))}
            </div>
        </div>
    )
}

export default DifficultyLevel