import Banner from "components/Banner";
import Card from "components/Card";
import Carrossel from "components/Carrossel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function PaginaInicial(){
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/videos")
        .then(resposta => resposta.json())
        .then(dados =>{
            setVideos(dados)
        })
    }, [])

    console.log(videos)

    return(
        <section>
            <Banner/>
            <Carrossel sessao="Front end" cor="#6BD1FF">
                {videos
                .filter((video) => video.categoria === "Front end")
                .map((video) =>(
                    <motion.div key={video.id}>
                        <Card
                            id={video.id} 
                            imagem={video.imagem}  
                            titulo={video.titulo}
                            categoria={video.categoria}
                            video={video.video}
                            descricao={video.descricao}
                        />
                    </motion.div>
                ))}
            </Carrossel>

            <Carrossel sessao="Back end" cor="#00C86F">
                {videos
                .filter((video) => video.categoria === "Back end")
                .map((video) =>(
                    <motion.div key={video.id}>
                        <Card
                            id={video.id} 
                            imagem={video.imagem}  
                            titulo={video.titulo}
                            categoria={video.categoria}
                            video={video.video}
                            descricao={video.descricao}
                        />
                    </motion.div>
                ))}
            </Carrossel>

            <Carrossel sessao="Inovação" cor="#FFBA05">
            {videos
                .filter((video) => video.categoria === "Inovação")
                .map((video) =>(
                    <motion.div key={video.id}>
                        <Card
                            id={video.id} 
                            imagem={video.imagem}  
                            titulo={video.titulo}
                            categoria={video.categoria}
                            video={video.video}
                            descricao={video.descricao}
                        />
                    </motion.div>
                ))}
            </Carrossel>

            <Carrossel sessao="Gestão" cor="#B00B69">
            {videos
                .filter((video) => video.categoria === "Gestão")
                .map((video) =>(
                    <motion.div key={video.id}>
                        <Card
                            id={video.id} 
                            imagem={video.imagem}  
                            titulo={video.titulo}
                            categoria={video.categoria}
                            video={video.video}
                            descricao={video.descricao}
                        />
                    </motion.div>
                ))}
            </Carrossel>
        </section>
    )
}

export default PaginaInicial;