import Botao from "components/Botao";
import styles from "./NovoVideo.module.css"

function NovoVideo(){
    return(
        <section className={styles.novoVideo}>
            <div className={styles.titulo}>
                <h1>Novo vídeo</h1>
                <p>Complete o formulário para criar um novo card de vídeo</p>
            </div>
            
            <h2>Criar vídeo</h2>

            <form className={styles.criar}>
                <section>

                    <div>
                        <label>Titulo</label>
                        <input placeholder="Insira o título do vídeo"/>
                    </div>
                    
                    <div>

                        <label>Categoria</label>
                        <select>
                            <option>Front end</option>
                            <option>Back end</option>
                            <option>Inovação</option>
                            <option>Gestão</option>
                        </select>
                    </div>

                    <div>
                        <label>Imagem</label>
                        <input type='url' placeholder="Insira a url da imagem"/>

                    </div>

                    <div>
                        <label>Vídeo</label>
                        <input type='url' placeholder="Insira o link do vídeo"/>

                    </div>

                    <div>
                        <label>Descrição</label>
                        <textarea placeholder="Sobre o que é o vídeo?"></textarea>
                    </div> 
                </section>

                <div className={styles.botoes}>
                    <Botao type="submit">Salvar</Botao>
                    <Botao>Limpar</Botao>
                </div>
            </form>

        </section>
    )
}

export default NovoVideo;