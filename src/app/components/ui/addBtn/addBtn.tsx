import styles from './index.module.css'

type AddBtnProprs = {
    icon :string ;
    buttonText : string;
}

const AddBtn: React.FC<AddBtnProprs> = ({buttonText , icon}) => {
    return (
        <button className={styles.addBtn} aria-label='Add item button'>
            <p>{buttonText}</p>
            <img src={icon} alt="button icon"/>
        </button>
    )
}

export default AddBtn