import styles from "./headerContetn.module.css"


type AboutItemProps = {
    img : string,
    header : string,
    content : string
}

const AboutItem:React.FC<AboutItemProps> = ({img , header, content}) => {
    return (
        <div className={styles.adoutItem}>
            <div className={styles.itemHeader}>
                <img src = {img} alt="" />
                <p>{header}</p>
            </div>
                <p className = {styles.itemContent}>{content}</p>
        </div>
    )
}

export default AboutItem