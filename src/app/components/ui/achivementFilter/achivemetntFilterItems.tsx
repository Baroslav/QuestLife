"use client"
import { useState } from "react"
import styles from "./style.module.css"


type TypeOptions = "difficultLevel" | "status"

type OptionsType = {
    type : TypeOptions , 
    filtering : string, 
    color : string
}

type Filtering = {
    filter : string
}

const options:OptionsType[] = [
    {type : "difficultLevel" , filtering : "Legendary" , color : "249, 228, 0"},
    {type : "difficultLevel" , filtering : "Mythical" , color : "92, 3, 224"},
    {type : "difficultLevel" , filtering : "Epic" , color : "157, 45, 45"},
    {type : "difficultLevel" , filtering : "Unique" , color : "35, 176, 40"},
    {type : "difficultLevel" , filtering : "Default" , color : "222, 222, 222"},
    {type : "status" , filtering: "complided" , color : "222, 222, 222"},
    {type : "status" , filtering : "rejected" , color : "222, 222, 222"},
    {type : "status" , filtering : "acepded" , color : "222, 222, 222"},
]

const AchivemetDifficultItems = () => {
    const [actived , setActived] = useState<Filtering[]>([])

    return (
        <div className = {styles.filterItems}>
            {
                options.map(({type , filtering , color} , i ) => (
                    <div 
                    key={type + filtering + color} 
                    className = {styles.filterItem} 
                    style = {{backgroundColor : `rgb(${color})`}}>
                        <img src={type == "status" ? `${filtering}.png` : ``} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default AchivemetDifficultItems