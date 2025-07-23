import styles from './achivementList.module.css'

const AchieveItemBg = () => {
    return (
        <div className = {styles.itemSword}>
            <img src="./itemSword.svg" alt="" className = {`${styles.leftTop} ${styles.itemSword}`}/>
            <img src="./itemSword.svg" alt="" className = {`${styles.rightTop} ${styles.itemSword}`}/>
            <img src="./itemSword.svg" alt="" className = {`${styles.leftBot} ${styles.itemSword}`}/>
            <img src="./itemSword.svg" alt="" className = {`${styles.rightBot} ${styles.itemSword}`}/>
        </div>
    )
}


export default AchieveItemBg