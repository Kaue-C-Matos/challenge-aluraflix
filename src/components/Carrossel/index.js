import styles from "./Carrossel.module.css"

function Carrossel({sessao, cor, children}){
    return(
        <section className={styles.carrossel}>
            <h2 style={{backgroundColor: cor}}>{sessao}</h2>
            {children}
        </section>
    )
}

export default Carrossel