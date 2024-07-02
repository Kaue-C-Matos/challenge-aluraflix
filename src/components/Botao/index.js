import styles from './Botao.module.css'

function Botao({children, type, onClick, onSubmit}){
    return(
        <button onSubmit={onSubmit} onClick={onClick} className={styles.botao} type={type}>
            {children}
        </button>
    )
}

export default Botao;