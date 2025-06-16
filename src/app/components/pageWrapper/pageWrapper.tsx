import { ReactNode } from "react"
import styles from "./pageWrapper.module.css"


type BgWrappProps = {
    bgImg : string,
    children : ReactNode,
}
const PageWrapper:React.FC<BgWrappProps> = ({bgImg , children }) => {
    return (
        <div className = {styles.bgWrap}>
            <img src = {bgImg} alt="" />
            {children }
        </div>
    )
}

export default PageWrapper