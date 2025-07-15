import styles from "./download.module.css"

const Download = () => {
    return (
        <div className = {styles.download}>
            <div className = {styles.downloadGrop}>
                <img className = {styles.downloadImg} src="./arrow.png" alt="" />
                <span></span>
            </div>
            <p>Download your image</p>
        </div>
    )
}

export default Download