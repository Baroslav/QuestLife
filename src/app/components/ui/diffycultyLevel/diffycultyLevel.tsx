'use client'

import React, { useState } from "react"
import DifficultyItemss from "./diffycultyItems"
import styles from "./index.module.css"
import clsx from "clsx"
import DifficultyItems from "./diffycultyItems"
import { opendir } from "node:fs"


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

            <DifficultyItems open = {open}/>

        </div>
    )
}

export default DifficultyLevel