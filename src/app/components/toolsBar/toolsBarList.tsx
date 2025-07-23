import React from "react"
import AchivementFilter from "../ui/achivementFilter/achivementFilter"
import AddBtn from "../ui/addBtn/addBtn"
import Search from "../ui/search/search"
import styles from "./toolsBar.module.css"

type ToolsBarProps = {
    btnIcon : string
    btnText : string
    addFunc : any
}

const ToolsBarList:React.FC<ToolsBarProps> = ({btnIcon , btnText , addFunc}) => {
    return (
        <div className = {styles.toolsBar}>
            <AchivementFilter/>
            <Search/>
            <AddBtn buttonText = {btnText} icon = {btnIcon} addFunc = {addFunc}/>
        </div>
    )
}

export default ToolsBarList