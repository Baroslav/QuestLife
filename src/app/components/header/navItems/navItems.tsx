import Link from "next/link"
import React from "react";
import styles from "./navItem.module.css"

type NavItemPrors = {
    icon : string;
    linkText : string;
}

const NavItem:React.FC<NavItemPrors> = ({icon , linkText}) => {
    return (
        <div className={styles.navItem}>
            <Link className={styles.navLink} href={""}>
                <img src={icon} alt="" />
                <p>{linkText}</p>
            </Link>
            <span>
                
            </span>
        </div>
    )
}


export default NavItem