import style from './DeleteItem.module.scss'

type Props = {onDelete:()=>void}

const DeleteItem = ({onDelete}: Props) => {
    return (
        <div className={style.deleteItem} onClick={onDelete}>✕</div>
    )
}

export default DeleteItem