import AchivemetList from "./achivementList/achivementlist"
import ToolsBarList from "../../toolsBar/toolsBarList"
import AddBtn from "../../ui/addBtn/addBtn"
import WhiteLine from "../../ui/whiteLine/whiteLine"
import styles from "././achievements.module.css"
import AchievementWindow from "./achievementWindow/achievementWindow"

const AchivementPage = () => {
    return (
        <section className = {styles.quests}>
            <h1>Achievement</h1>
            <WhiteLine/>
            <ToolsBarList btnText="Add achievement" btnIcon="./swords.png"/>
            {/* <AchivemetList/> */}
            <AchievementWindow/>
        </section>
    )
}

export default  AchivementPage