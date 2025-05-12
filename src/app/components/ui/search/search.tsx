import styles from "./search.module.css"


const Search = () => {
    return(
        <div className={styles.searchGroup}>
            <img src="./telescope.png" className={styles.telescope} alt="" />
            <input className={styles.searchBar} type="text" placeholder="Search achievement"/>
        </div>
    )
}

export default Search