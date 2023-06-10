import BtnAncor from "../shared/BtnAncor"
import DivError from "./DivError"
import "./styles.scss"

const Failure = () => {
  return (
    <div className="container03" id="cont-03">
      <div className="errors">
        <DivError title={"Você não tem feito um bom RDC. "} description={"Um relacionamento ruim com os clientes por mensagem pode levar a insatisfação, perda de vendas e má reputação da marca. "}/>
        <DivError title={"Faz tudo sem um otimizador de tempo. "} description={"Quando não se otimiza o tempo com clientes por mensagem, as conversas podem se estender por muito tempo, levando à perda de produtividade e até mesmo à insatisfação do cliente."}/>
        <DivError title={"Seu atendimento está complicado. "} description={"Sabemos que muitas empresas falham em simplificar o relacionamento com seus clientes, trazendo mais confusão do que esclarecimento."}/>
      </div>
      <BtnAncor content={"CONHEÇA O QUE PODE AJUDAR VOCÊ"} effect={true} link={"#cont-04"}/>
    </div>
  )
}

export default Failure