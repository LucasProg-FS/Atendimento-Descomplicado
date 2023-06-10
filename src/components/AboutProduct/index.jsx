import "./styles.scss"
import {BiBuildingHouse, BiGroup} from "react-icons/bi"
import {MdOutlineConstruction, MdSmartphone} from "react-icons/md"
import {RiMacLine} from "react-icons/ri"
import {BsPersonBadge} from "react-icons/bs"
import {FaClinicMedical} from "react-icons/fa"
import {CiBookmarkCheck} from "react-icons/ci"
import BtnAncor from "../shared/BtnAncor"

const AboutProduct = () => {
  return (
    <div className="container05">
      <h1  className="with-bg-purple">Para quem é o Atendimento Descomplicado?</h1>
      <ul className="who-is-it-for">
        <li data-aos="flip-up" data-aos-duration="2000"><span><BiGroup/></span>Qualquer prestador de serviço</li>
        <li data-aos="flip-down" data-aos-duration="2000"><span><FaClinicMedical/></span>Clinicas de qualquer nicho e espeacialização</li>
        <li data-aos="flip-up" data-aos-duration="2000"><span><RiMacLine/></span>Lojas digitais</li>
        <li data-aos="flip-down" data-aos-duration="2000"><span><BiBuildingHouse/></span>Imobiliária e corretores</li>
        <li data-aos="flip-up" data-aos-duration="2000"><span><MdOutlineConstruction/></span>Construtoras e incorporadoras</li>
        <li data-aos="flip-down" data-aos-duration="2000"><span><MdSmartphone/></span>Afiliados e produtos digitais</li>
        <li data-aos="flip-up" data-aos-duration="2000"><span><BsPersonBadge/></span>Representantes comerciais</li>
      </ul>
      <h1  className="with-bg-purple">Com o Atendimento Descomplicado, você terá acesso a:</h1>
      <ul className="content-product">
        <li data-aos="fade-right" data-aos-duration="2000"><span><CiBookmarkCheck/></span>Scripts prontos para lidar com objeções e manter os clientes engajados; </li>
        <li data-aos="fade-left" data-aos-duration="2000"><span><CiBookmarkCheck/></span>Mais de 200 mensagens para você copiar e colar em qualquer momento do atendimento;</li>
        <li data-aos="fade-right" data-aos-duration="2000"><span><CiBookmarkCheck/></span>Dicas e estratégias para melhorar o relacionamento com os clientes e transformá-lo em um amigo que sempre compra de você;</li>
        <li data-aos="fade-left" data-aos-duration="2000"><span><CiBookmarkCheck/></span>Técnicas para persuasão e vendas por mensagem;</li>
        <li data-aos="fade-right" data-aos-duration="2000"><span><CiBookmarkCheck/></span>Ideias para promoção e campanhas de vendas; </li>
        <li data-aos="fade-left" data-aos-duration="2000"><span><CiBookmarkCheck/></span>Estratégias para aumentar a fidelização dos clientes; </li>
        <li data-aos="fade-right" data-aos-duration="2000"><span><CiBookmarkCheck/></span>Todas as fases necessária para um fechamento de vendas que faz o cliente comprar novamente;</li>
        <li data-aos="fade-left" data-aos-duration="2000"><span><CiBookmarkCheck/></span>Scripts personalizáveis para qualquer segmento e nicho;</li>
      </ul>
      <BtnAncor content={"QUERO MEU ACESSO"} effect={true} link={"#offer"}/>
    </div>
  )
}

export default AboutProduct