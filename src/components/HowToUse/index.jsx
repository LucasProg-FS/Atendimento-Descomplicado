
import BtnAncor from "../shared/BtnAncor"
import "./styles.scss"

const HowToUse = () => {
  return (
    <div className="container06">
      <h1 className="with-bg-purple">Tá, mas como utilizo o Atendimento Descomplicado?</h1>
      <div className="background-video">
      <video src="/how-to-use.mp4" controls></video>
      </div>
      <BtnAncor content={"QUERO TER ACESSO A ESSE ESPAÇO"} effect={true} link={"#offer"} />
    </div>
  )
}

export default HowToUse