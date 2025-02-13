import Sacola from "../../imagens/sacola.svg"
import Perfil from "../../imagens/perfil.svg"
import './Icones.css'

function Icones () {
    return (
        <div className="Icones">
            <img className="sacola" src={Sacola} alt="compras" />
            <img className="perfil" src={Perfil} alt="perfil" />
        </div>
    )
}

export default Icones;