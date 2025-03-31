import React from "react"
import styles from "./index.module.css"

type DifficultyLevelPorps = {
    text : string;
    color : string
}


const DifficultyItem:React.FC<DifficultyLevelPorps> = ({text, color}) => {
    return (
        <span className={styles.legendaryitem} style={{backgroundColor: `rgba(${color +" ,0.25"})` , color : `rgba(${color})`}}>
            {text}
        </span>
    )
}

export default DifficultyItem 