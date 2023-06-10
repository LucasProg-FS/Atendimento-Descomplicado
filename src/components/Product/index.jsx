import BtnAncor from "../shared/BtnAncor"
import "./styles.scss"


const Product = () => {
  return (
    <div className="container04">
      <h1 id="cont-04">Atendimento Descomplicado</h1>
      <section className="product-apresentation">
        <p className="description-product" data-aos="zoom-in-right" data-aos-duration="2000">O Atendimento Descomplicado é o melhor caminho para você que quer <span>melhorar o atendimento por mensagem</span>, vender mais e otimizar seu tempo. Com mais de <span >190 scripts prontos e dicas práticas</span> para copiar e colar, este produto é a solução ideal para quem deseja oferecer um <span>atendimento de excelência aos clientes e vender muito mais.</span> </p>
        <img src="/astro-in-computer.png" alt="Astronauta no Computador" />
      </section>
      <BtnAncor content={"QUERO O ATENDIMENTO DESCOMPLICADO"} effect={true} link={"#offer"}/>
    </div>
  )
}

export default Product