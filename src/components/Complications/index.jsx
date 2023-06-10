import './styles.scss'
import {CiCircleRemove} from 'react-icons/ci'
import BtnAncor from '../shared/BtnAncor'


const Complications = () => {
  return (
    <div className="container02" id='cont-02'>
      <h2 className='with-bg-purple' >Objeções, vácuos e um eterno estranho chamado cliente…</h2>
      <section>
        <p className='complications-content' data-aos="fade-right" data-aos-duration="2000">Você acorda, toma seu banho e logo após decide todos os clientes que vai atender.</p>
        <p className='complications-content' data-aos="fade-left" data-aos-duration="2000">Começa o trabalho animado, mas logo sente que o ciclo de vácuos, vendas difíceis e perca de tempo se repete.</p>
        <p className='complications-content' data-aos="fade-right" data-aos-duration="2000">Parece que:</p>
        <ul className='list-errors' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <li><span className='icon-x'>{<CiCircleRemove/>}</span> Organizar seus atendimentos no começo do dia não adianta de nada;</li>
          <li><span className='icon-x'>{<CiCircleRemove/>}</span>Tudo feito é inútil;</li>
          <li><span className='icon-x'>{<CiCircleRemove/>}</span>A promoção, ação que te tira margem sempre é a grande salvadora;</li>
          <li><span className='icon-x'>{<CiCircleRemove/>}</span>Você sempre é um estranho e irrelevante;</li>
          <li><span className='icon-x'>{<CiCircleRemove/>}</span>A educação e rapidez nas respostas não adianta de nada.</li>
        </ul>
        <p className='complications-content' data-aos="fade-left" data-aos-duration="2000">Para piorar, você pensa que o problema é o cliente e o retira da sua lista de prioridades. A sua nova missão nesse ciclo cansativo e desmotivador é achar o “cliente ideal”.</p>
        <p className='complications-content' data-aos="fade-right" data-aos-duration="2000">E se eu te dissesse que o problema não é o cliente? E se eu te dissesse que a solução não é a promoção? </p>
      </section>
      <BtnAncor content={"Aconteceu algo e você precisa saber"} effect={true} link={"#cont-03"}/>
    </div>
  )
}

export default Complications