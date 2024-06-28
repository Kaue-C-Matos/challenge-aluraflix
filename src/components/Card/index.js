import { TbTrashX } from "react-icons/tb";
import { PiPencilLineBold } from "react-icons/pi";
import styles from "./Card.module.css"
import { useState } from "react";
import ModalEditar from "components/ModalEditar";

function Card({imagem, titulo}){
    const [modalAberta, setModalAberta] = useState(false)

    return(
        <>
        <figure className={styles.card}>
            <img src={imagem} alt={titulo} onDragStart={event => event.preventDefault()}/>
            <figcaption className={styles.opcoes}>
                <button><TbTrashX/>   Deletar</button>
                <button onClick={()=>setModalAberta(true)}><PiPencilLineBold/>   Editar</button>
            </figcaption>
        </figure>
        <ModalEditar isOpen={modalAberta} onRequestClose={()=> setModalAberta(false)}/>
        </>
    )
}

export default Card;