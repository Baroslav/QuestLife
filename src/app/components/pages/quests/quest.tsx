import ToolsBarList from "../../toolsBar/toolsBarList"
import AddBtn from "../../ui/addBtn/addBtn"
import WhiteLine from "../../whiteLine/whiteLine"
import styles from "./quest.module.css"

const QuestsPage = () => {
    return (
        <section className = {styles.quests}>
            <h1>Achievement</h1>
            <WhiteLine/>
            <ToolsBarList btnText="Add achievement" btnIcon="./swords.png"/>
        </section>
    )
}

export default  QuestsPage