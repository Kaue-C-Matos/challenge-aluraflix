import styles from './Botao.module.css'

function Botao({children, type}){
    return(
        <button className={styles.botao} type={type = "button"}>
            {children}
        </button>
    )
}

export default Botao;