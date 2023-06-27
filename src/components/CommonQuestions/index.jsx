import BtnAncor from "../shared/BtnAncor"
import "./styles.scss"
import {SlQuestion} from "react-icons/sl"
import {BsWhatsapp} from "react-icons/bs"

const CommonQuestions = () => {
  return (
    <div className="container11">
      <h1 className="with-bg-purple">Perguntas mais frequentes.</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
             <span><SlQuestion/></span>Como utilizo o Atendimento Descomplicado?
             </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">É simples e altamente didático, basta buscar aquilo que faz sentido para sua necessidade no momento, copiar, colar e personalizar para seu negócio. </div>
         </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
             <span><SlQuestion/></span>Por quanto tempo tenho acesso?
             </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Você terá acesso vitalício como bônus.</div>
         </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
             <span><SlQuestion/></span>Como destravar acesso?
             </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Não tem segredo, basta clicar no botão acima, em que direcionará você para um empresa chamada Edduz, no qual protege seus dados e te dar acesso a área de membros restrita. O acesso será enviado pelo email colocado e qualquer necessidade, basta falar com nosso suporte.</div>
         </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseOne">
             <span><SlQuestion/></span>O Atendimento Descomplicado funciona para quem?
             </button>
          </h2>
          <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Funciona para secretários, representantes comerciais, para clínicas, negócios digitais, negócios físicos, negócios de prestação de serviço, para todo profissional/empresa que lida com pessoas por mensagem.</div>
         </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseOne">
             <span><SlQuestion/></span>Quais tipos de negócios o Atendimento Descomplicado pode ajudar?
             </button>
          </h2>
          <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Qualquer negócio que lide com pessoas por mensagem, seja para negócios de produtos físicos, digitais ou até mesmo prestação de serviço.</div>
         </div>
        </div>
      </div>
      <BtnAncor content={"QUERO O ATENDIMENTO DESCOMPLICADO"} effect={true} link={"#offer"}/>
      <div className="suport">
        <h1 className="with-bg-purple">Ficou com alguma duvida?</h1>
        <p className="description-suport">Entre em contato com nosso time de Suporte Exclusivo clicando no botão <span>WhatsApp</span> logo abaixo!</p>
        <a target="_blank" href="https://api.whatsapp.com/send/?phone=5583998013970&text=Ol%C3%A1%2C+quero+entender+melhor+sobre+o+Atendimento+Descomplicado%21&type=phone_number&app_absent=0" className="btn-wpp"> <span><BsWhatsapp/></span>WhatsApp</a>
      </div>
    </div>
  )

  
}

export default CommonQuestions