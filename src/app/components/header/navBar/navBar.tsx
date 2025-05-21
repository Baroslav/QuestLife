import NavItem from "../navItems/navItems"
import styles from "../navBar/navBar.module.css"

type HeaderItemsType = {icon: string , linkText: string}

const headerItems:HeaderItemsType[] = [
    {icon : "castle.png" , linkText : "Home"},
    {icon : "headerQuest.png" , linkText : "Quests"},
    {icon : "mythical.png" , linkText : "Achivements"},
    {icon : "openbook.png" , linkText : "Statistics"},

]


const NavBar = () => {
    return (
        <div className={styles.navBar }>
            {
                headerItems.map(({icon , linkText}) => (
                    <NavItem icon={icon} linkText={linkText}/>
                ))
            }
        </div>
    )
}


export default NavBar