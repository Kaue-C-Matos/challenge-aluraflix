import Botao from 'components/Botao';
import styles from './ModalEditar.module.css'
import { IoMdCloseCircleOutline } from "react-icons/io";

function ModalEditar({isOpen, onRequestClose}){
    if (!isOpen) return null

    return(
        <>
            <div className={styles.overlay}/>
            <dialog open={isOpen}>
                <IoMdCloseCircleOutline className={styles.fechar} onClick={onRequestClose}/>
                <h1>Editar Card:</h1>
                <form>
                    <label>Titulo</label>
                    <input/>
                    
                    <label>Categoria</label>
                    <select>
                        <option>Front end</option>
                        <option>Back end</option>
                        <option>Inovação</option>
                        <option>Gestão</option>
                    </select>

                    <label>Imagem</label>
                    <input type='url'/>

                    <label>Vídeo</label>
                    <input type='url'/>

                    <label>Descrição</label>
                    <textarea></textarea>

                    <div className={styles.botoes}>
                        <Botao type="submit">Salvar</Botao>
                        <Botao>Limpar</Botao>
                    </div>
                </form>
            </dialog>
        </>
    )
}

export default ModalEditar;