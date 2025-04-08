import React from "react"
import styles from "./index.module.css"
import clsx from "clsx"

type LevelProps = { difficult : string ; color : string}
type DifficultyItemsProps = { open : boolean}

const difficultLevels:LevelProps[] = [
    {difficult : "Legendary" , color : "249, 228, 0"},
    {difficult : "Mythical" , color : "92, 3, 224"},
    {difficult : "Epic" , color : "157, 45, 45"},
    {difficult : "Unique" , color : "35, 176, 40"},
    {difficult : "Default" , color : "222, 222, 222"},
]

const DifficultyItems:React.FC<DifficultyItemsProps> = ({open}) => {
    return (
        <div className={clsx(styles.dificultLevels , {[styles.open] : open})}>
            {
                difficultLevels.map(({difficult, color}) => (
                    <span className={styles.legendaryitem} style={{backgroundColor: `rgba(${color +" ,0.25"})` , color : `rgba(${color})`}}>
                        {difficult}
                </span>
              ))
            }
        </div>

    )
}

export default DifficultyItems 