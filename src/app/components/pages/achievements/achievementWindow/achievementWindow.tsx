import AddBtn from '@/app/components/ui/addBtn/addBtn'
import styles from './achievementWindw.module.css'
import AchievemetDiffs from './achivementDiffs'
import AchievementDescriptipns from './achivementDescriotions'
import Download from '@/app/components/ui/download/download'
import AuthBG from '@/app/components/auth/authBg'
import AchievementBG from './achieveBG'

const AchievementWindow = () => {
    return (
        <div className = {styles.windowWrapper}>
            <AchievementBG/>
            <div className = {styles.acieveWindow}>
            <h2>Create your achievemet</h2>
            <div className = {styles.achiveContent}>
                <div className = {styles.achieveImgContent}>
                    <img className = {styles.achiveImg} src="./quest.png" alt="" />
                    <div className = {styles.downloadWrapper}>
                        <Download/>
                    </div>
                </div>
                
                <div className = {styles.achiveDescribions}>
                    <div className = {styles.achiveDescribion}>
                        <AchievementDescriptipns/>
                        <AchievemetDiffs/>
                        <div className = {styles.btnWrapper}>
                            <AddBtn buttonText='Create Achieve' icon='./seal.svg'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AchievementWindow