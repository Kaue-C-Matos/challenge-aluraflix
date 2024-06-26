import Cabecalho from "components/Cabecalho"
import Rodape from "components/Rodape"
import { Outlet } from "react-router-dom"

function PaginaPadrao(){
    return(
        <section style={{backgroundColor: "rgba(0,0,0,0.9)"}}>
            <Cabecalho/>
            <Outlet/>
            <Rodape/>
        </section>
    )
}

export default PaginaPadrao