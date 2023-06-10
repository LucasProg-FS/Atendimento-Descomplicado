import './styles.scss'

const BtnAncor = ({content, effect, link}) => {
  return (
    <a className={`btn-ancor ${effect ? "btn-pisca" : ""}`} href={link}>{content}</a>
  )
}

export default BtnAncor