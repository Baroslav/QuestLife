import Character from "../character/character"
import NavBar from "../navBar/navBar"
import styles from "./headerGorup.module.css"

const HeaderGoroup = () => {
    return (
        <header className={styles.header}>
            <img src="./logo.png" alt="" />
            <NavBar/>
            <Character/>
        </header>
    )
}

export default HeaderGoroup 