"use client"

import { useState } from "react"
import AchivemetDifficultItems from "./achivemetntFilterItems"
import styles from "./style.module.css"

const AchivementFilter = () => {

    return (
        <div className={styles.filter}>
            <p>Achievement filter</p>
            <AchivemetDifficultItems/>
        </div>
    )
}

export default AchivementFilter