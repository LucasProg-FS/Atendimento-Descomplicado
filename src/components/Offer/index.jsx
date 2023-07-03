import {AiFillCaretRight} from "react-icons/ai"
import "./styles.scss"

const Offer = () => {
  return (
    <div className="container10">
      <h1 className="title-container">Esse é o seu momento!</h1>
      <section>
        <ul className="benefits">
          <h1>Garanta agora mais vendas, produtividade e clientes fieis!</h1>
          <li><span><AiFillCaretRight/></span>Dicas e estratégias para melhorar o relacionamento com os clientes;</li>
          <li><span><AiFillCaretRight/></span>Scripts prontos para lidar com objeções e manter os clientes engajados;</li>
          <li><span><AiFillCaretRight/></span>Técnicas para persuasão e vendas por mensagem;</li>
          <li><span><AiFillCaretRight/></span>Ideias para promoções e campanhas de vendas;</li>
          <li><span><AiFillCaretRight/></span>Estratégias para aumentar a fidelização dos clientes;</li>
          <li><span><AiFillCaretRight/></span>+190 scripts de vendas e relacionamento empresarial.</li>
        </ul>
        <div className="offer" id="offer">
          <h1>OFERTA POR <span>TEMPO LIMITADO</span></h1>
          <p className="old-price">De R$ 79,00</p>
          <p className="pieces">por apenas 6X de</p>
          <p className="new-price">R$5,51</p>
          <p className="other-option">OU R$29,90 À VISTA.</p>
          <a id="ancor-checkout" href="https://sun.eduzz.com/1872971?b=0">QUERO GARANTIR MEU ACESSO!</a>
        </div>
      </section>
      <div className="guarantee">
          <img src="/garantia-risco-zero.png" className="img-garantia" alt="Icone Garantia Zero Risco" />
          <h1>Garantia Risco Zero</h1>
          <p>Temos absoluta certeza de que o <span>ATENDIMENTO DESCOMPLICADO</span> será muito efetivo para você. Mas se em até 7 dias após a compra você não estiver satisfeito, nós devolvemos o seu dinheiro!</p>
          <h2>Nossa Avaliação:</h2>
          <h2 className="avaliation">9,7</h2>
          <p>Segundo nossos usuários</p>
          <img src="/5-estrelas.png" className="img-five-stars" alt="Imagem Representando 5 estrelas" />
        </div>
    </div>

    
  )
}

export default Offer