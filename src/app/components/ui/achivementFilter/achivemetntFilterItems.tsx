"use client"
import { useState } from "react"
import styles from "./style.module.css"


type TypeOptions = "difficultLevel" | "status" 

type OptionsType = {
    type : TypeOptions , 
    filtering : string | null, 
    color : string
}

type Filtering = {
    filter : string
}


const options:OptionsType[] = [
    {type : "difficultLevel" , filtering : null , color : "249, 228, 0"},
    {type : "difficultLevel" , filtering : null , color : "92, 3, 224"},
    {type : "difficultLevel" , filtering : null , color : "157, 45, 45"},
    {type : "difficultLevel" , filtering : null , color : "35, 176, 40"},
    {type : "difficultLevel" , filtering : null , color : "222, 222, 222"},
    {type : "status" , filtering: "complided" , color : "222, 222, 222"},
    {type : "status" , filtering : "rejected" , color : "222, 222, 222"},
    {type : "status" , filtering : "acepded" , color : "222, 222, 222"},
]

const AchivemetDifficultItems = () => {
    const [filters , setFilters] = useState<(number)[]>([])

    const choseFilter = (newFilter : number) => {
        console.log(filters)
        if(filters.includes(newFilter)) {
            setFilters(prevFiltes => prevFiltes.filter(val => val !== newFilter) )
        }
        else {
            setFilters(prevFilters => [...filters, newFilter])
        }
    }

    return (
        <div className = {styles.filterItems}>
            {
                options.map(({type , filtering , color} , i ) => (
                    <div 
                    key={i} 
                    className = {styles.filterItem} 
                    onClick={() => choseFilter(i)}
                    style = {{backgroundColor : `rgb(${color})`}}>

                    {
                        type == "status" ? <img src={`${filtering}.png`}/> : null
                    }

                    </div>
                ))
            }
        </div>
    )
}

export default AchivemetDifficultItems