import "./Logo.css"
import logo from "../../imagens/logo.png"

function Logo () {
    return(
        <div className="Logo">
          <img src={logo} alt="Logo do site isBook" className="logo-img"/>
        </div>
    )
}

export default Logo;