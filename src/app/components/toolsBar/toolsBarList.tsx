import React from "react"
import AchivementFilter from "../ui/achivementFilter/achivementFilter"
import AddBtn from "../ui/addBtn/addBtn"
import Search from "../ui/search/search"
import styles from "./toolsBar.module.css"

type ToolsBarProps = {
    btnIcon : string
    btnText : string
}

const ToolsBarList:React.FC<ToolsBarProps> = ({btnIcon , btnText}) => {
    return (
        <div className = {styles.toolsBar}>
            <AchivementFilter/>
            <Search/>
            <AddBtn buttonText = {btnText} icon = {btnIcon}/>
        </div>
    )
}

export default ToolsBarList