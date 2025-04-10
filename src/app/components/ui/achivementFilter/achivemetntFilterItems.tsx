import styles from "./style.module.css"

type TypeOptions = "difficultLevel" | "complided" | "rejected"  | "acepded"

type OptionsType = {
    type : TypeOptions , 
    difficult : string, 
    color : string
}

const options:OptionsType[] = [
    {type : "difficultLevel" , difficult : "Legendary" , color : "249, 228, 0"},
    {type : "difficultLevel" ,difficult : "Mythical" , color : "92, 3, 224"},
    {type : "difficultLevel" , difficult : "Epic" , color : "157, 45, 45"},
    {type : "difficultLevel" ,difficult : "Unique" , color : "35, 176, 40"},
    {type : "difficultLevel" , difficult : "Default" , color : "222, 222, 222"},
    {type : "complided" , difficult : "Default" , color : "222, 222, 222"},
    {type : "rejected" , difficult : "Default" , color : "222, 222, 222"},
    {type : "acepded" , difficult : "Default" , color : "222, 222, 222"},
]

const AchivemetDifficultItems = () => {
    
    return (
        <div className = {styles.filterItems}>
            {
                options.map(({type , difficult , color}) => (
                    <div className = {styles.filterItem} style = {{backgroundColor : `rgb(${color})`}}>
                        <img src={`${type}.png`} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default AchivemetDifficultItems