import styles from './index.module.css'

type AddBtnProprs = {
    icon :string;
    buttonText : string;
    addFunc : any;
}

const AddBtn: React.FC<AddBtnProprs> = ({buttonText , icon, addFunc}) => {
    return (
        <button 
        className={styles.addBtn} 
        aria-label='Add item button'
        onClick = {() =>  addFunc()}
        >
            <p>{buttonText}</p>
            <img src={icon} alt="button icon"/>
        </button>
    )
}

export default AddBtn