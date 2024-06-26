import Banner from "components/Banner";
import Card from "components/Card";
import Carrossel from "components/Carrossel";

function PaginaInicial(){
    return(
        <section>
            <Banner/>
            <Carrossel sessao="Front end" cor="#6BD1FF">
                <Card/>
            </Carrossel>

            <Carrossel sessao="Back end" cor="#00C86F">

            </Carrossel>

            <Carrossel sessao="Inovação" cor="#FFBA05">

            </Carrossel>

            <Carrossel sessao="Gestão" cor="#B00B69">

            </Carrossel>
        </section>
    )
}

export default PaginaInicial;