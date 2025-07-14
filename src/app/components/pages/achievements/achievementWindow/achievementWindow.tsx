import AddBtn from '@/app/components/ui/addBtn/addBtn'
import styles from './achievementWindw.module.css'
import AchievemetDiffs from './achivementDiffs'
import AchievementDescriptipns from './achivementDescriotions'

const AchievementWindow = () => {
    return (
        <div className = {styles.acieveWindow}>
            <h2>Create your achievemet</h2>
            <div className = {styles.achiveContent}>
                <img className = {styles.achiveImg} src="./quest.png" alt="" />
                <div className = {styles.achiveDescribions}>
                    <div className = {styles.achiveDescribion}>
                        <AchievementDescriptipns/>
                        <AchievemetDiffs/>
                        <AddBtn buttonText='Create Achieve' icon='./seal.svg'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AchievementWindow