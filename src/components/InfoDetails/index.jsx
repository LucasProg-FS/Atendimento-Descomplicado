import "./styles.scss"


import {BiLabel} from 'react-icons/bi'
import BtnAncor from "../shared/BtnAncor"

const InfoDetails = () => {
  return (
    <div className="container07">
      <h1 className="with-bg-purple">Conheça o Atendimento Descomplicado por dentro:</h1>
      <ul className="details">
        <li><span><BiLabel/></span>35 Scripts para prestação de serviço;</li>
        <li><span><BiLabel/></span>34 Scripts para produtos digitais;</li>
        <li><span><BiLabel/></span>37 Scripts para produtos físicos;</li>
        <li><span><BiLabel/></span>31 Scripts para lidar com objeções mais comuns dos clientes;</li>
        <li><span><BiLabel/></span>29 Scripts para remarketing;</li>
        <li><span><BiLabel/></span>10 tabela de objeções universais + Situações ( Vácuos, concorrentes e etc);</li>
        <li><span><BiLabel/></span>10 scripts para comemoração;</li>
        <li><span><BiLabel/></span>10 scripts para promoções;</li>
        <li><span><BiLabel/></span>19 scripts para informar novidades;</li>
        <li><span><BiLabel/></span>10 ideias para manter seus clientes engajados.</li>
      </ul>
      <BtnAncor content={"QUERO MEUS SCRIPTS"} effect={true} link={"#offer"}/>
    </div>
  )
}

export default InfoDetails