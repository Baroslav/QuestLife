import React from "react";
import style from "./index.module.css"

type QuestBtnProps = {
    contetnType :  "done" | "refuse" | "edit",
    type : "questDone" | "questRefuse" | "questEdit" | "achieveDote" | "achieveRefuse" | "achieveEdit" 
};

const btnVariant:Record<QuestBtnProps["contetnType"] , {icon : string , text : string}> = {
    done : {icon : "/seal.png" , text : "Done"} ,
    refuse : {icon : "/decline.png", text : "Refuse"},
    edit : {icon : "/pen.png" , text : "Edit"}
}

const btnStyleVariant:Record<QuestBtnProps["type"] , {styleBtn : string, btnType : string}> = {
    questDone : {styleBtn : style.questDoneBtn , btnType : style.quest},
    questRefuse : {styleBtn : style.questRefuseBtn , btnType : style.quest},
    questEdit : {styleBtn : style.questEditBtn , btnType : style.quest},
    achieveDote : {styleBtn : style.achiveDoneBtn , btnType : style.achive},
    achieveRefuse : {styleBtn : style.achiveRefuseBtn , btnType : style.achive},
    achieveEdit : {styleBtn : style.achiveEditBtn , btnType : style.achive},
}

const Btn:React.FC<QuestBtnProps> = ({contetnType,  type}) => {
    const {icon , text} = btnVariant[contetnType]
    const {styleBtn , btnType} = btnStyleVariant[type]

    return (
        <button className={`${styleBtn} , ${btnType}`}>
            <p>{text}</p>
            <img src={icon} alt="" />
        </button>
    )
}


export default Btn