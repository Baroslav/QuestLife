'use client'

import React, { useState } from "react"
import DifficultyItem from "./diffycultyItem"
import styles from "./index.module.css"
import clsx from "clsx"

type Level = { dificult : string ; color : string}

const dificultLevel:Level[] = [
    {dificult : "Legendary" , color : "249, 228, 0"},
    {dificult : "Mythical" , color : "92, 3, 224"},
    {dificult : "Epic" , color : "157, 45, 45"},
    {dificult : "Unique" , color : "35, 176, 40"},
    {dificult : "Default" , color : "222, 222, 222"},
]

const DifficultyLevel = () => {
    const [open , setOpen] = useState<boolean>(false)

    const openFilter = () => {
        setOpen(!open)
    }

    return (
        <div className={styles.dificultGroup}>

            <div className={styles.dificultHeaderGroup} onClick={openFilter}>
                <span className={styles.dificultHeader}>
                    Achievemet dificult 
                </span>
                
                <span className={clsx(styles.opener , {[styles.rotate] : open})}></span>
            </div>

            <div className={clsx(styles.dificultLevels , {[styles.open] : open})}>
                {dificultLevel.map((item)=> (
                    <DifficultyItem key={item.dificult} text = {item.dificult} color={item.color}/>
                ))}
            </div>

        </div>
    )
}

export default DifficultyLevel