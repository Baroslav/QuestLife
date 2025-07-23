import AddBtn from '@/app/components/ui/addBtn/addBtn'
import styles from './achievementWindw.module.css'
import AchievemetDiffs from './achivementDiffs'
import AchievementDescriptipns from './achivementDescriotions'
import Download from '@/app/components/ui/download/download'
import AuthBG from '@/app/components/auth/authBg'
import AchievementBG from './achieveBG'
import React from 'react'

type AchievementWindowProps = {
    close : React.Dispatch<React.SetStateAction<boolean>>
}

const AchievementWindow:React.FC<AchievementWindowProps> = ({close}) => {
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
                                {/* <AddBtn buttonText='Create Achieve' icon='./seal.svg'/> */}
                            </div>
                        </div>
                    </div>
                </div>
            <img className = {styles.closeBones} 
            onClick={() => close(false)}
            src="./bones.svg" 
            alt="" 
            />
            </div>
        </div>
    )
}

export default AchievementWindow