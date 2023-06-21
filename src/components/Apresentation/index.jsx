import BtnAncor from '../shared/BtnAncor'
import './styles.scss'

const Apresentation = () => {
  return (
    <div className="container01">
      <section>
        <div className="text-apresentation">
          <h1 >Venda todos os dias, por meio de um Atendimento Descomplicado</h1>
          <p >A nova tendência dos escritórios em 2023 reúne <span>Copywriting, psicologia e inteligência artificial</span> para você transformar qualquer atendimento em <span>vendas</span> rapidamente. </p>
        </div>
        <img src="/astro-on-ship.png" alt="Astronauta na Nave" />
      </section>
      <BtnAncor content={"QUERO VENDER MAIS POR MENSAGEM"} effect={true} link={"#cont-02"}/>
    </div>
  )
}

export default Apresentation